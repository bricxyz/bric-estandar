import type { Metadata } from 'next';
import './home.css';
import HomeBehavior from './home-behavior';

export const metadata: Metadata = { title: "BRIC · Soluciones electrónicas para desafíos reales" };

export default function Page() {
  return (
    <>
      <header id="top">
        <div className="container">
          <a className="logo" href="#">BR<i>I</i>C</a>
          <div className="h-right">
            <div className="lang" role="group" aria-label="Idioma"><button aria-pressed="true">ES</button><button aria-pressed="false">EN</button></div>
            <button className="menu-btn" aria-expanded="false" aria-controls="menu"><span>MENÚ</span><svg className="i" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg></button>
            <a className="btn-touch" href="#contact">Contactanos</a>
          </div>
        </div>
      </header>
      <div className="overlay" id="menu">
        <nav aria-label="Principal">
          <a href="#about">Sobre nosotros</a>
          <a href="#approach">Servicio</a>
          <a href="#partners">Socios</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
      
      <main>
        <section className="hero">
          <div className="container">
            <h1>Soluciones electrónicas para <b>desafíos reales</b></h1>
          </div>
          <a className="scroll" href="#statement"><span>BAJÁ</span><svg className="i" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg></a>
        </section>
      
        <section className="statement" id="statement">
          <h2 className="reveal">BRIC crea soluciones de hardware y software inteligentes y escalables que van a transformar el mundo productivo.</h2>
        </section>
      
        <section className="block" id="approach">
          <div className="container">
            <div className="s-head reveal">
              <h2>Nuestro enfoque</h2>
              <p>En BRIC no solo ofrecemos productos: co-creamos soluciones. Nuestro servicio empieza entendiendo tu desafío y termina con tecnología inteligente, hecha a medida, que encaja en tu operación.</p>
            </div>
            <div className="timeline">
              <div className="t-step reveal"><div className="t-num">1</div><div><h3>Descubrimiento y comprensión</h3><p>Empezamos entendiendo a fondo tus desafíos, operaciones y objetivos con visitas a sitio, entrevistas con los involucrados y análisis de datos.</p></div></div>
              <div className="t-step reveal"><div className="t-num">2</div><div><h3>Diseño colaborativo de la solución</h3><p>Junto a tu equipo diseñamos soluciones a medida, combinando nuestra experiencia técnica con tu conocimiento de la industria.</p></div></div>
              <div className="t-step reveal"><div className="t-num">3</div><div><h3>Desarrollo y pruebas</h3><p>Desarrollamos prototipos y los probamos rigurosamente en condiciones reales, refinando la solución con datos de desempeño y tu feedback.</p></div></div>
              <div className="t-step reveal"><div className="t-num">4</div><div><h3>Implementación y soporte</h3><p>Acompañamos la implementación y mantenemos una relación continua para que la solución siga aportando valor a medida que cambian tus necesidades.</p></div></div>
            </div>
          </div>
        </section>
      
        <section className="block" id="products">
          <div className="container">
            <div className="s-head reveal">
              <h2>Nuestra solución</h2>
              <p>Conocé SERVA, un ejemplo de colaboración, creatividad y respuesta a necesidades reales: una solución a medida, desarrollada junto a nuestro socio, para asegurar el giro de la sarta de varilla en la industria petrolera.</p>
            </div>
            <div className="sol reveal">
              <div className="sol-media" tabIndex={0} role="button" aria-label="Ver SERVA instalado en campo">
                <img src="/img/SERVAproduct.jpg" alt="Técnicos instalando el prototipo de SERVA en la boca de un pozo petrolero" />
                <div className="face"><svg className="i" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" /></svg><span>Pasá el mouse para verlo en acción</span></div>
                <div className="cap"><h3>Instalación en campo</h3><p>El prototipo de SERVA durante la instalación en un pozo en producción.</p></div>
              </div>
              <div>
                <h3 className="name">SERVA</h3>
                <p className="desc">Sensor inteligente e inalámbrico que monitorea en tiempo real la rotación de la sarta de varilla en equipos de bombeo AIB. Detecta fallas de giro y genera información para disparar tareas de mantenimiento.</p>
                <ul className="checks">
                  <li><svg className="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Monitoreo del giro en tiempo real con magnetómetro y acelerómetro</li>
                  <li><svg className="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Comunicación inalámbrica LoRa con el receptor en la sala de monitoreo</li>
                  <li><svg className="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Instalación no invasiva sobre la varilla, sin modificar el AIB</li>
                  <li><svg className="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>180 días de autonomía con 4 pilas AA</li>
                  <li><svg className="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Integración con sistemas de planta vía Modbus RTU</li>
                </ul>
                <a className="btn-navy" href="/serva">Ver más <svg className="i" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
              </div>
            </div>
          </div>
        </section>
      
        <section className="block" id="partners">
          <div className="container">
            <div className="s-head reveal">
              <h2>Nuestros socios</h2>
              <p>Colaboramos con líderes de la industria para entregar soluciones integrales.</p>
            </div>
            <div className="partners reveal">
              <div className="partner">
                <img src="/img/Logo-Tulsa.png" alt="Tulsa Oilfield Solutions" />
                <p>Socio estratégico que ofrece soluciones de ingeniería avanzada para la industria del petróleo y el gas. Con foco en la innovación y la confiabilidad, Tulsa impulsa la eficiencia operativa y la seguridad en sectores energéticos críticos.</p>
              </div>
            </div>
          </div>
        </section>
      
        <section className="about" id="about">
          <div className="container inner reveal">
            <h2>Sobre nosotros</h2>
            <p className="intro">Somos ingenieros electrónicos del ITBA, impulsados por el mate, los prototipos, el código y la emoción de resolver problemas reales. BRIC nació de una gran idea: construir dispositivos inteligentes que realmente marquen la diferencia. No solo hacemos tecnología: entendemos tu desafío y diseñamos soluciones a medida que funcionan.</p>
            <details><summary>MISIÓN <span className="pm"><svg className="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg></span></summary><p>Diseñar y desarrollar dispositivos inteligentes y a medida que resuelvan problemas reales, combinando experiencia en ingeniería con creatividad para entregar soluciones innovadoras y efectivas.</p></details>
            <details><summary>VALORES <span className="pm"><svg className="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg></span></summary><p>Innovación, colaboración, adaptabilidad, foco en el cliente, humanidad y calidad guían todo lo que hacemos.</p></details>
            <details><summary>VISIÓN <span className="pm"><svg className="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg></span></summary><p>Ser líderes en el diseño y desarrollo de soluciones exitosas e innovadoras en distintas industrias, con tecnología eficiente que impulse un cambio positivo.</p></details>
          </div>
        </section>
      
        <section className="contact" id="contact">
          <div className="container">
            <div className="s-head reveal">
              <h2>Resolvamos tus desafíos juntos</h2>
              <p>Escribinos para ver cómo nuestras soluciones electrónicas pueden responder a tus necesidades.</p>
            </div>
            <div className="c-grid">
              <div className="card reveal">
                <h3>Contactanos</h3>
                <p>¿Tenés preguntas o querés saber más sobre nuestras soluciones? Escribile a nuestro equipo.</p>
                <form>
                  <label>Nombre<input placeholder="Tu nombre" /></label>
                  <label>Email<input type="email" placeholder="Tu email" /></label>
                  <label className="full">Empresa<input placeholder="Tu empresa" /></label>
                  <label className="full">Mensaje<textarea placeholder="¿En qué te podemos ayudar?"></textarea></label>
                  <button type="submit">Enviar mensaje <svg className="i" viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg></button>
                </form>
              </div>
              <div className="card reveal">
                <h3>Información de contacto</h3>
                <p>Comunicate directamente con nosotros.</p>
                <ul className="info">
                  <li><svg className="i" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg><div><b>Ubicación</b><span>Buenos Aires, Argentina</span></div></li>
                  <li><svg className="i" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg><div><b>Teléfono</b><a href="tel:+543875675406"><span>+54 387 567-5406</span></a></div></li>
                  <li><svg className="i" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg><div><b>Email</b><a href="mailto:bric.xyz@gmail.com"><span>bric.xyz@gmail.com</span></a></div></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer>
        <div className="container">
          <a className="logo" href="#">BR<i>I</i>C</a>
          <small>© 2026 BRIC. Todos los derechos reservados.</small>
        </div>
      </footer>
      <HomeBehavior />
    </>
  );
}
