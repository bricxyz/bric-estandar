import type { Metadata } from 'next';
import './serva.css';
import ServaBehavior from './serva-behavior';

export const metadata: Metadata = { title: "SERVA · Sensor de giro para sarta de varilla · BRIC" };

export default function Page() {
  return (
    <>
      <div className="topbar"><div className="container">
        <a className="back" href="/#products"><svg className="i" viewBox="0 0 24 24"><path d="m12 19-7-7 7-7M19 12H5" /></svg>Volver al inicio</a>
        <a className="logo" href="/">BR<i>I</i>C</a>
        <div className="lang" role="group" aria-label="Idioma"><a data-lang="es" href="/serva" aria-current="page">ES</a><a data-lang="en" href="/en/serva">EN</a></div>
      </div></div>
      
      <main>
        <div className="container">
          <div className="narrow">
            <div className="chip"><svg className="i" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" /></svg></div>
            <h1>SERVA</h1>
            <p className="lead">Sensor inteligente e inalámbrico que monitorea en tiempo real la rotación de la sarta de varilla en sistemas de bombeo AIB.</p>
            <div className="badge"><span><img src="/img/Logo-Tulsa.png" alt="Tulsa" />En piloto con Tulsa Oilfield Equipment</span></div>
          </div>
      
          <div className="gallery">
            <figure className="photo"><img src="/img/SERVAproduct.jpg" alt="Técnicos instalando SERVA en la boca de un pozo" /><figcaption>Instalación en pozo</figcaption></figure>
            <figure className="cut"><img src="/img/serva-sensor.png" alt="Carcasa del sensor con abrazadera para la varilla" /><figcaption>Sensor</figcaption></figure>
            <figure className="cut"><img src="/img/serva-receptor-leds.png" alt="Receptor con panel de cinco LEDs" /><figcaption>Receptor</figcaption></figure>
          </div>
      
          <div className="narrow">
            <div className="panel">
              <h2>Características principales</h2>
              <div className="features">
                <div className="feature"><svg className="i" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg><div><h3>Monitoreo del giro en tiempo real</h3><p>Magnetómetro y acelerómetro integrados toman datos cada 1 segundo sobre la rotación de la sarta.</p></div></div>
                <div className="feature"><svg className="i" viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0" /><path d="M12 20h.01" /></svg><div><h3>Comunicación inalámbrica</h3><p>Enlace LoRa punto a punto de baja potencia con el receptor, a 100 m de alcance de referencia. Reporta el estado cada 1 hora, intervalo ajustable.</p></div></div>
                <div className="feature"><svg className="i" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4M12 16h.01" /></svg><div><h3>Detección temprana de fallas de giro</h3><p>Genera información accionable para mantenimiento preventivo: menos roturas de varilla, intervenciones no programadas y tiempos muertos de pozo.</p></div></div>
                <div className="feature"><svg className="i" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg><div><h3>Instalación no invasiva</h3><p>Se monta sobre la varilla existente con 4 tornillos M4, sin modificar el equipo de bombeo. Funciona con 4 pilas AA fáciles de reemplazar en campo.</p></div></div>
              </div>
            </div>
      
            <div className="how">
              <h2>Cómo funciona</h2>
              <div className="flow">
                <div className="node"><div className="n">1</div><h3>Sensor</h3><p className="where">En boca de pozo, sobre la sarta</p><ul><li>Mide el giro cada 1 s</li><li>4 pilas AA · 180 días</li></ul></div>
                <div className="link"><svg className="i" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>LoRa P2P<br />100 m</div>
                <div className="node"><div className="n">2</div><h3>Receptor</h3><p className="where">En la sala de monitoreo</p><ul><li>Panel de 5 LEDs de estado</li><li>12–24 V DC · registro en SD</li></ul></div>
                <div className="link"><svg className="i" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>Modbus RTU</div>
                <div className="node"><div className="n">3</div><h3>Tu sistema</h3><p className="where">Control y mantenimiento</p><ul><li>Lectura de estado y contadores</li><li>Reconocimiento de alarmas</li></ul></div>
              </div>
            </div>
          </div>
      
          <div className="receiver narrow">
            <div className="rx-photo"><div className="frame">
              <img src="/img/serva-receptor-leds.png" alt="Receptor SERVA con los LEDs ON, Comunicación, Batería sensor, Error giro y Pozo parado" />
              <span className="ring" style={{left:"18.3%",top:"70.5%"}}></span><span className="ring" style={{left:"26.6%",top:"70.5%"}}></span><span className="ring" style={{left:"35.7%",top:"70.5%"}}></span><span className="ring" style={{left:"44.8%",top:"70.5%"}}></span><span className="ring" style={{left:"54%",top:"70.5%"}}></span>
            </div></div>
            <div>
              <h2>El panel del receptor</h2>
              <ul className="leds">
                <li><button data-led="0"><i style={{background:"var(--green)"}}></i><div><b>ON</b><span>Encendido fijo mientras el receptor tiene alimentación.</span></div></button></li>
                <li><button data-led="1"><i style={{background:"var(--green)"}}></i><div><b>Comunicación</b><span>Titila si no llegan datos del sensor durante 90 minutos.</span></div></button></li>
                <li><button data-led="2"><i style={{background:"var(--amber)"}}></i><div><b>Batería sensor</b><span>Titila cuando el sensor reporta batería baja.</span></div></button></li>
                <li><button data-led="3"><i style={{background:"var(--red)"}}></i><div><b>Error giro</b><span>Titila si hubo un error de rotación en las últimas 2 transmisiones.</span></div></button></li>
                <li><button data-led="4"><i style={{background:"var(--gray-400)"}}></i><div><b>Pozo parado</b><span>Se enciende cuando se detecta que el pozo está detenido.</span></div></button></li>
              </ul>
            </div>
          </div>
      
          <div className="narrow">
            <h2>Especificaciones técnicas</h2>
            <div className="specs">
              <div className="spec"><h3>Sensor</h3><dl>
                <div><dt>Dimensiones</dt><dd>Placa 10 × 6,2 cm · carcasa 15 × 10 × 8 cm</dd></div>
                <div><dt>Peso</dt><dd>350 g (PCB, tornillos e insertos)</dd></div>
                <div><dt>Alimentación</dt><dd>4 pilas alcalinas AA</dd></div>
                <div><dt>Autonomía</dt><dd>180 días</dd></div>
                <div><dt>Temperatura</dt><dd>−10 °C a 50 °C</dd></div>
                <div><dt>Protección</dt><dd>Resistente a salpicaduras</dd></div>
                <div><dt>Vida útil</dt><dd>5 años (MTBF calculado: 8 años)</dd></div>
              </dl></div>
              <div className="spec"><h3>Receptor y comunicación</h3><dl>
                <div><dt>Peso del receptor</dt><dd>180 g</dd></div>
                <div><dt>Alimentación</dt><dd>12–24 V DC desde tablero</dd></div>
                <div><dt>Radio</dt><dd>LoRa punto a punto, baja potencia</dd></div>
                <div><dt>Alcance</dt><dd>100 m</dd></div>
                <div><dt>Reporte</dt><dd>Cada 1 hora (ajustable)</dd></div>
                <div><dt>Integración</dt><dd>Modbus RTU · esclavo ID 10</dd></div>
                <div><dt>Serial</dt><dd>9600 bps, 8-N-1 · FC03 / FC06</dd></div>
              </dl></div>
            </div>
            <p className="note">Datos de la hoja de datos CT_SERVA Rev.00 y del manual IOM_SERVA Rev.01.2.</p>
      
            <h2>Instalación</h2>
            <div className="install">
              <div className="spec"><h3>Sensor</h3>
                <ol>
                  <li>Con el pozo detenido y asegurado, colocar las 4 pilas AA y verificar el LED de estado.</li>
                  <li>Montar el sensor sobre la sarta, a la sombra de la cruceta, con los 4 tornillos M4.</li>
                  <li>Confirmar que no interfiera con el rotador y que el receptor reciba datos.</li>
                </ol>
                <div className="warn"><svg className="i" viewBox="0 0 24 24"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4M12 17h.01" /></svg>Montar siempre con la tapa hacia abajo: la estanqueidad depende de esa orientación.</div>
              </div>
              <div className="spec"><h3>Receptor</h3>
                <ol>
                  <li>Ubicarlo en la sala de monitoreo, cerca de una fuente de 12–24 V DC del tablero.</li>
                  <li>Pasar el cable por el prensacables y conectar la bornera respetando la polaridad.</li>
                  <li>Cerrar la tapa sin forzar el cableado de los LEDs y verificar que encienda ON.</li>
                </ol>
              </div>
            </div>
      
            <div className="docs">
              <a className="btn-navy" href="/docs/CT_SERVA_Rev_01_1.pdf" download><svg className="i" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5M12 15V3" /></svg>Descargar hoja de datos</a>
              <a className="btn-outline" href="/docs/IOM_SERVA_Rev_01_1.pdf" download><svg className="i" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5M12 15V3" /></svg>Descargar manual de instalación</a>
            </div>
          </div>
        </div>
      
        <section className="cta">
          <div className="container">
            <h2>¿Querés SERVA en tus pozos?</h2>
            <p className="sub">Elegí el camino que mejor se ajusta a tu operación.</p>
            <div className="paths">
              <div className="path"><h3>Producto estándar</h3><p>SERVA se comercializa a través de Tulsa Oilfield Equipment.</p><a className="go" href="https://www.tulsaoil.com" target="_blank" rel="noopener">Ir a Tulsa <svg className="i" viewBox="0 0 24 24"><path d="M7 17 17 7M7 7h10v10" /></svg></a></div>
              <div className="path"><h3>Adaptación o desarrollo a medida</h3><p>Si tu operación necesita otra variante o un desarrollo nuevo, lo diseñamos con tu equipo.</p><a className="go" href="/#contact">Hablar con BRIC <svg className="i" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a></div>
            </div>
          </div>
        </section>
      </main>
      <footer><div className="container"><a className="logo" href="/">BR<i>I</i>C</a><span>© 2026 BRIC. Todos los derechos reservados.</span></div></footer>
      <ServaBehavior />
    </>
  );
}
