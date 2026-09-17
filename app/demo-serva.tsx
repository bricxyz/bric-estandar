'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import pozoA from './data/pozo-a.json';
import pozoB from './data/pozo-b.json';

type Serie = {
  pozo: string;
  zona: string;
  horas: number;
  magz: number[];
  env: number[];
  gira: number[];
  umbral: number;
};

const SERIES: { id: string; label: string; caso: string; serie: Serie }[] = [
  { id: 'a', label: 'Pozo A', caso: 'Prueba controlada: el rotador se desconectó a propósito', serie: pozoA as Serie },
  { id: 'b', label: 'Pozo B', caso: 'Operación normal: la sarta gira durante todo el registro', serie: pozoB as Serie },
];

// El sensor reporta su estado al receptor cada 1 hora, y el intervalo es configurable.
// En la demo se usan reportes cada 30 minutos para que la secuencia entre en pantalla.
const MINUTOS_POR_REPORTE = 30;
const UMBRAL_FALLA = 2; // reportes seguidos sin giro que encienden el LED ERROR GIRO
const UMBRAL_RECUPERACION = 3; // reportes seguidos con giro que apagan la alarma

const W = 900;
const H = 300;
const PAD = { l: 44, r: 16, t: 18, b: 34 };

function estadoAlarma(gira: number[], minuto: number) {
  const reportes = Math.floor(minuto / MINUTOS_POR_REPORTE);
  let sinGiro = 0;
  let conGiro = 0;
  let alarma = false;
  for (let r = 1; r <= reportes; r++) {
    const valor = gira[r * MINUTOS_POR_REPORTE - 1] ?? 0;
    if (valor) {
      conGiro += 1;
      sinGiro = 0;
      if (alarma && conGiro >= UMBRAL_RECUPERACION) alarma = false;
    } else {
      sinGiro += 1;
      conGiro = 0;
      if (sinGiro >= UMBRAL_FALLA) alarma = true;
    }
  }
  return { alarma, reportes, sinGiro };
}

export default function DemoServa() {
  const [activo, setActivo] = useState(0);
  const [minuto, setMinuto] = useState(0);
  const [reproduciendo, setReproduciendo] = useState(false);
  const raf = useRef<number | null>(null);

  const { serie, caso, label } = useMemo(
    () => ({ serie: SERIES[activo].serie, caso: SERIES[activo].caso, label: SERIES[activo].label }),
    [activo]
  );
  const total = serie.magz.length;

  useEffect(() => {
    if (!reproduciendo) return;
    let ultimo = performance.now();
    const paso = (ahora: number) => {
      if (ahora - ultimo > 45) {
        ultimo = ahora;
        setMinuto(m => (m + 1 >= total ? 0 : m + 1));
      }
      raf.current = requestAnimationFrame(paso);
    };
    raf.current = requestAnimationFrame(paso);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [reproduciendo, total]);

  const { min, max } = useMemo(() => {
    const min = Math.min(...serie.magz);
    const max = Math.max(...serie.magz);
    const margen = (max - min) * 0.12;
    return { min: min - margen, max: max + margen };
  }, [serie]);

  const x = (i: number) => PAD.l + (i / (total - 1)) * (W - PAD.l - PAD.r);
  const y = (v: number) => PAD.t + (1 - (v - min) / (max - min)) * (H - PAD.t - PAD.b);

  const linea = useMemo(
    () => serie.magz.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' '),
    [serie, min, max]
  );

  const bandas = useMemo(() => {
    const out: { desde: number; hasta: number }[] = [];
    let inicio: number | null = null;
    serie.gira.forEach((g, i) => {
      if (g && inicio === null) inicio = i;
      if (!g && inicio !== null) {
        out.push({ desde: inicio, hasta: i - 1 });
        inicio = null;
      }
    });
    if (inicio !== null) out.push({ desde: inicio, hasta: serie.gira.length - 1 });
    return out;
  }, [serie]);

  const horas = Math.floor(serie.horas);
  const gira = serie.gira[minuto] === 1;
  const { alarma } = estadoAlarma(serie.gira, minuto);
  const tiempo = minuto / 60;
  const reloj = `${String(Math.floor(tiempo)).padStart(2, '0')}:${String(minuto % 60).padStart(2, '0')}`;

  return (
    <section className="block demo" id="demo">
      <div className="container">
        <div className="s-head">
          <h2>Así se ve una falla de giro</h2>
          <p>
            Datos medidos por SERVA en pozos de Rincón de los Sauces, Neuquén. La señal del magnetómetro dibuja una onda
            mientras la sarta rota; cuando se detiene, la onda desaparece y el receptor lo marca en la sala de monitoreo.
          </p>
        </div>

        <div className="demo-tabs" role="group" aria-label="Elegí el registro">
          {SERIES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={i === activo ? 'on' : ''}
              aria-pressed={i === activo}
              onClick={() => {
                setActivo(i);
                setMinuto(0);
              }}
            >
              {s.label}
            </button>
          ))}
          <span className="demo-caso">{caso}</span>
        </div>

        <div className="demo-grid">
          <div className="demo-chart">
            <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Registro del magnetómetro en ${label}. ${caso}.`}>
              {bandas.map((b, i) => (
                <rect
                  key={i}
                  x={x(b.desde)}
                  y={PAD.t}
                  width={Math.max(1, x(b.hasta) - x(b.desde))}
                  height={H - PAD.t - PAD.b}
                  className="demo-banda"
                />
              ))}
              {Array.from({ length: horas + 1 }, (_, h) => (
                <g key={h}>
                  <line x1={x(h * 60)} y1={PAD.t} x2={x(h * 60)} y2={H - PAD.b} className="demo-grid-line" />
                  <text x={x(h * 60)} y={H - 12} textAnchor="middle" className="demo-tick">
                    {h} h
                  </text>
                </g>
              ))}
              <path d={linea} className="demo-linea" />
              <rect
                x={x(minuto)}
                y={PAD.t}
                width={Math.max(1, W - PAD.r - x(minuto))}
                height={H - PAD.t - PAD.b}
                className="demo-velo"
              />
              <line x1={x(minuto)} y1={PAD.t} x2={x(minuto)} y2={H - PAD.b} className="demo-cabezal" />
              <circle cx={x(minuto)} cy={y(serie.magz[minuto])} r="5" className="demo-punto" />
              <text x={PAD.l} y={14} className="demo-eje">
                Magnetómetro, eje z · promedio por minuto
              </text>
            </svg>

            <div className="demo-controles">
              <button type="button" className="demo-play" onClick={() => setReproduciendo(p => !p)}>
                {reproduciendo ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="7" y="5" width="4" height="14" rx="1" />
                    <rect x="13" y="5" width="4" height="14" rx="1" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5l11 7-11 7z" />
                  </svg>
                )}
                {reproduciendo ? 'Pausar' : 'Reproducir'}
              </button>
              <input
                type="range"
                min={0}
                max={total - 1}
                value={minuto}
                aria-label="Momento del registro"
                onChange={e => {
                  setReproduciendo(false);
                  setMinuto(Number(e.target.value));
                }}
              />
              <span className="demo-reloj">{reloj}</span>
            </div>
          </div>

          <aside className="demo-panel">
            <h3>Receptor en la sala de monitoreo</h3>
            <ul className="demo-leds">
              <li className="on">
                <i />
                <span>ON</span>
              </li>
              <li className="on">
                <i />
                <span>Comunicación</span>
              </li>
              <li className="on">
                <i />
                <span>Batería sensor</span>
              </li>
              <li className={alarma ? 'alarma' : ''}>
                <i />
                <span>Error giro</span>
              </li>
              <li>
                <i />
                <span>Pozo parado</span>
              </li>
            </ul>
            <p className={`demo-estado ${gira ? 'ok' : 'bad'}`}>{gira ? 'La sarta está girando' : 'La sarta no gira'}</p>
            <p className="demo-lectura">
              {alarma
                ? 'Dos reportes seguidos sin giro: el receptor enciende ERROR GIRO y hay que revisar el rotador.'
                : gira
                  ? 'El magnetómetro ve una vuelta completa cada pocos minutos. Todo en orden.'
                  : 'La señal se aplanó. Si el próximo reporte llega igual, se enciende la alarma.'}
            </p>
          </aside>
        </div>

        <p className="demo-note">
          Registro real de SERVA. En el Pozo A el rotador se desconectó a propósito para probar la detección y se volvió a
          conectar a las 2 horas 15. El sensor reporta al receptor cada 1 hora y el intervalo es configurable; acá se
          muestran reportes cada 30 minutos. Los nombres de los pozos se omiten.
        </p>
      </div>
    </section>
  );
}
