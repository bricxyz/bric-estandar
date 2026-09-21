import type { Metadata } from 'next';
import './home.css';
import HomeBehavior from './home-behavior';
import DemoServa from '../../demo-serva';

export const metadata: Metadata = { title: "BRIC · Electronic solutions for real-world challenges" };

export default function Page() {
  return (
    <>
      <header id="top">
        <div className="container">
          <a className="logo" href="#">BR<i>I</i>C</a>
          <div className="h-right">
            <div className="lang" role="group" aria-label="Language"><a data-lang="es" href="/">ES</a><a data-lang="en" href="/en" aria-current="page">EN</a></div>
            <button className="menu-btn" aria-expanded="false" aria-controls="menu"><span>MENU</span><svg className="i" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg></button>
            <a className="btn-touch" href="#contact">Contact us</a>
          </div>
        </div>
      </header>
      <div className="overlay" id="menu">
        <nav aria-label="Main">
          <a href="#about">About us</a>
          <a href="#approach">Service</a>
          <a href="#partners">Partners</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      
      <main>
        <section className="hero">
          <div className="container">
            <h1>Electronic solutions for <b>real-world challenges</b></h1>
          </div>
          <a className="scroll" href="#statement"><span>SCROLL</span><svg className="i" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg></a>
        </section>
      
        <section className="statement" id="statement">
          <h2 className="reveal">BRIC builds smart, scalable hardware and software solutions that will transform the productive world.</h2>
        </section>
      
        <section className="block" id="approach">
          <div className="container">
            <div className="s-head reveal">
              <h2>Our approach</h2>
              <p>At BRIC we don’t just offer products: we co-create solutions. Our service begins by understanding your challenge and ends with smart, custom-built technology that fits your operation.</p>
            </div>
            <div className="timeline">
              <div className="t-step reveal"><div className="t-num">1</div><div><h3>Discovery and understanding</h3><p>We start by deeply understanding your challenges, operations and goals through site visits, stakeholder interviews and data analysis.</p></div></div>
              <div className="t-step reveal"><div className="t-num">2</div><div><h3>Collaborative solution design</h3><p>Together with your team we design custom solutions, combining our technical expertise with your industry knowledge.</p></div></div>
              <div className="t-step reveal"><div className="t-num">3</div><div><h3>Development and testing</h3><p>We develop prototypes and test them rigorously in real-world conditions, refining the solution with performance data and your feedback.</p></div></div>
              <div className="t-step reveal"><div className="t-num">4</div><div><h3>Implementation and support</h3><p>We support the rollout and keep an ongoing partnership so the solution keeps delivering value as your needs change.</p></div></div>
            </div>
          </div>
        </section>
      
        <section className="block" id="products">
          <div className="container">
            <div className="s-head reveal">
              <h2>Our solution</h2>
              <p>Meet SERVA, an example of collaboration, creativity and answering real needs: a custom solution developed alongside our partner to ensure rod string rotation in the oil industry.</p>
            </div>
            <div className="sol reveal">
              <div className="sol-media" tabIndex={0} role="button" aria-label="See SERVA installed in the field">
                <img src="/img/SERVAproduct.jpg" alt="Technicians installing the SERVA prototype at an oil wellhead" />
                <div className="face"><svg className="i" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" /></svg><span>Hover to see it in action</span></div>
                <div className="cap"><h3>Field installation</h3><p>The SERVA prototype during installation at a producing well.</p></div>
              </div>
              <div>
                <h3 className="name">SERVA</h3>
                <p className="desc">A smart wireless sensor that monitors rod string rotation in real time on beam pumping units. It detects rotation failures and produces information that triggers maintenance work.</p>
                <ul className="checks">
                  <li><svg className="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Real-time rotation monitoring with magnetometer and accelerometer</li>
                  <li><svg className="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Wireless LoRa link to the receiver in the monitoring room</li>
                  <li><svg className="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Non-invasive installation on the existing rod, with no changes to the pumping unit</li>
                  <li><svg className="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>180 days of battery life on 4 AA batteries</li>
                  <li><svg className="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Integration with plant systems over Modbus RTU</li>
                </ul>
                <a className="btn-navy" href="/en/serva">Learn more <svg className="i" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
              </div>
            </div>
          </div>
        </section>
      
        <DemoServa lang="en" />
      
        <section className="block" id="partners">
          <div className="container">
            <div className="s-head reveal">
              <h2>Our partners</h2>
              <p>We work with industry leaders to deliver end-to-end solutions.</p>
            </div>
            <div className="partners reveal">
              <div className="partner">
                <img src="/img/Logo-Tulsa.png" alt="Tulsa Oilfield Solutions" />
                <p>A strategic partner delivering advanced engineering solutions for the oil and gas industry. With a focus on innovation and reliability, Tulsa drives operational efficiency and safety across critical energy sectors.</p>
              </div>
            </div>
          </div>
        </section>
      
        <section className="about" id="about">
          <div className="container inner reveal">
            <h2>About us</h2>
            <p className="intro">We are electronic engineers from ITBA, fueled by mate, prototyping, code and the thrill of cracking real-world problems. BRIC was born from one big idea: to build smart devices that actually make a difference. We don’t just build technology: we understand your challenge and design tailored solutions that work.</p>
            <details><summary>MISSION <span className="pm"><svg className="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg></span></summary><p>To design and develop smart, tailored devices that solve real-world problems, blending engineering expertise with creativity to deliver innovative, effective solutions.</p></details>
            <details><summary>VALUES <span className="pm"><svg className="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg></span></summary><p>Innovation, collaboration, adaptability, customer focus, humanity and quality guide everything we do.</p></details>
            <details><summary>VISION <span className="pm"><svg className="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg></span></summary><p>To lead the design and development of successful, innovative solutions across industries, with efficient technology that drives positive change.</p></details>
          </div>
        </section>
      
        <section className="contact" id="contact">
          <div className="container">
            <div className="s-head reveal">
              <h2>Let’s solve your challenges together</h2>
              <p>Write to us and let’s see how our electronic solutions can meet your needs.</p>
            </div>
            <div className="c-grid">
              <div className="card reveal">
                <h3>Contact us</h3>
                <p>Questions, or want to know more about our solutions? Write to our team.</p>
                <form>
                  <label>Name<input name="nombre" placeholder="Your name" /></label>
                  <label>Email<input type="email" name="email" placeholder="Your email" /></label>
                  <label className="full">Company<input name="empresa" placeholder="Your company" /></label>
                  <label className="full">Message<textarea name="mensaje" placeholder="How can we help?"></textarea></label>
                  <input type="hidden" name="_subject" value="Enquiry from the BRIC website" />
                  <input type="text" name="_gotcha" className="trampa" tabIndex={-1} aria-hidden="true" />
                  <p className="form-msg" role="status"></p>
                  <button type="submit">Send message <svg className="i" viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg></button>
                </form>
              </div>
              <div className="card reveal">
                <h3>Contact information</h3>
                <p>Reach us directly.</p>
                <ul className="info">
                  <li><svg className="i" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg><div><b>Location</b><span>Buenos Aires, Argentina</span></div></li>
                  <li><svg className="i" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg><div><b>Phone</b><a href="tel:+543875675406"><span>+54 387 567-5406</span></a></div></li>
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
          <small>© 2026 BRIC. All rights reserved.</small>
        </div>
      </footer>
      <HomeBehavior />
    </>
  );
}
