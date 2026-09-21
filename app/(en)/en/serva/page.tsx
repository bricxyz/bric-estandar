import type { Metadata } from 'next';
import './serva.css';
import ServaBehavior from './serva-behavior';

export const metadata: Metadata = { title: "SERVA · Rod string rotation sensor · BRIC" };

export default function Page() {
  return (
    <>
      <div className="topbar"><div className="container">
        <a className="back" href="/en#products"><svg className="i" viewBox="0 0 24 24"><path d="m12 19-7-7 7-7M19 12H5" /></svg>Back to home</a>
        <a className="logo" href="/en">BR<i>I</i>C</a>
        <div className="lang" role="group" aria-label="Language"><a data-lang="es" href="/serva">ES</a><a data-lang="en" href="/en/serva" aria-current="page">EN</a></div>
      </div></div>
      
      <main>
        <div className="container">
          <div className="narrow">
            <div className="chip"><svg className="i" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" /></svg></div>
            <h1>SERVA</h1>
            <p className="lead">A smart wireless sensor that monitors rod string rotation in real time on beam pumping units.</p>
            <div className="badge"><span><img src="/img/Logo-Tulsa.png" alt="Tulsa" />In pilot with Tulsa Oilfield Equipment</span></div>
          </div>
      
          <div className="gallery">
            <figure className="photo"><img src="/img/SERVAproduct.jpg" alt="Technicians installing SERVA at a wellhead" /><figcaption>Wellsite installation</figcaption></figure>
            <figure className="cut"><img src="/img/serva-sensor.png" alt="Sensor housing with the rod clamp" /><figcaption>Sensor</figcaption></figure>
            <figure className="cut"><img src="/img/serva-receptor-leds.png" alt="Receiver con panel de cinco LEDs" /><figcaption>Receiver</figcaption></figure>
          </div>
      
          <div className="narrow">
            <div className="panel">
              <h2>Key features</h2>
              <div className="features">
                <div className="feature"><svg className="i" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg><div><h3>Real-time rotation monitoring</h3><p>A built-in magnetometer and accelerometer sample rod string rotation every second.</p></div></div>
                <div className="feature"><svg className="i" viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0" /><path d="M12 20h.01" /></svg><div><h3>Wireless communication</h3><p>A low-power point-to-point LoRa link to the receiver, with a 100 m reference range. It reports status every hour, and the interval is adjustable.</p></div></div>
                <div className="feature"><svg className="i" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4M12 16h.01" /></svg><div><h3>Early detection of rotation failures</h3><p>It produces actionable information for preventive maintenance: fewer rod failures, unplanned interventions and well downtime.</p></div></div>
                <div className="feature"><svg className="i" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg><div><h3>Non-invasive installation</h3><p>It clamps onto the existing rod with 4 M4 screws, with no changes to the pumping unit. It runs on 4 AA batteries that are easy to replace in the field.</p></div></div>
              </div>
            </div>
      
            <div className="how">
              <h2>How it works</h2>
              <div className="flow">
                <div className="node"><div className="n">1</div><h3>Sensor</h3><p className="where">At the wellhead, on the rod string</p><ul><li>Samples rotation every second</li><li>4 AA batteries · 180 days</li></ul></div>
                <div className="link"><svg className="i" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>LoRa P2P<br />100 m</div>
                <div className="node"><div className="n">2</div><h3>Receiver</h3><p className="where">In the monitoring room</p><ul><li>5-LED status panel</li><li>12–24 V DC · SD card logging</li></ul></div>
                <div className="link"><svg className="i" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>Modbus RTU</div>
                <div className="node"><div className="n">3</div><h3>Your system</h3><p className="where">Control and maintenance</p><ul><li>Reads status and counters</li><li>Acknowledges alarms</li></ul></div>
              </div>
            </div>
          </div>
      
          <div className="receiver narrow">
            <div className="rx-photo"><div className="frame">
              <img src="/img/serva-receptor-leds.png" alt="SERVA receiver with the ON, Communication, Sensor battery, Rotation error and Well stopped LEDs" />
              <span className="ring" style={{left:"18.3%",top:"70.5%"}}></span><span className="ring" style={{left:"26.6%",top:"70.5%"}}></span><span className="ring" style={{left:"35.7%",top:"70.5%"}}></span><span className="ring" style={{left:"44.8%",top:"70.5%"}}></span><span className="ring" style={{left:"54%",top:"70.5%"}}></span>
            </div></div>
            <div>
              <h2>The receiver panel</h2>
              <ul className="leds">
                <li><button data-led="0"><i style={{background:"var(--green)"}}></i><div><b>ON</b><span>Steady while the receiver has power.</span></div></button></li>
                <li><button data-led="1"><i style={{background:"var(--green)"}}></i><div><b>Communication</b><span>Blinks if no sensor data arrives for 90 minutes.</span></div></button></li>
                <li><button data-led="2"><i style={{background:"var(--amber)"}}></i><div><b>Sensor battery</b><span>Blinks when the sensor reports a low battery.</span></div></button></li>
                <li><button data-led="3"><i style={{background:"var(--red)"}}></i><div><b>Rotation error</b><span>Blinks after a rotation error in the last 2 transmissions.</span></div></button></li>
                <li><button data-led="4"><i style={{background:"var(--gray-400)"}}></i><div><b>Well stopped</b><span>Lights up when the well is detected as stopped.</span></div></button></li>
              </ul>
            </div>
          </div>
      
          <div className="narrow">
            <h2>Technical specifications</h2>
            <div className="specs">
              <div className="spec"><h3>Sensor</h3><dl>
                <div><dt>Dimensions</dt><dd>Board 10 × 6.2 cm · enclosure 15 × 10 × 8 cm</dd></div>
                <div><dt>Weight</dt><dd>350 g (PCB, screws and inserts)</dd></div>
                <div><dt>Power</dt><dd>4 alkaline AA batteries</dd></div>
                <div><dt>Battery life</dt><dd>180 days</dd></div>
                <div><dt>Temperature</dt><dd>−10 °C to 50 °C</dd></div>
                <div><dt>Protection</dt><dd>Splash resistant</dd></div>
                <div><dt>Service life</dt><dd>5 years (calculated MTBF: 8 years)</dd></div>
              </dl></div>
              <div className="spec"><h3>Receiver and communication</h3><dl>
                <div><dt>Receiver weight</dt><dd>180 g</dd></div>
                <div><dt>Power</dt><dd>12–24 V DC from the panel</dd></div>
                <div><dt>Radio</dt><dd>Point-to-point LoRa, low power</dd></div>
                <div><dt>Range</dt><dd>100 m</dd></div>
                <div><dt>Reporting</dt><dd>Every hour (adjustable)</dd></div>
                <div><dt>Integration</dt><dd>Modbus RTU · slave ID 10</dd></div>
                <div><dt>Serial</dt><dd>9600 bps, 8-N-1 · FC03 / FC06</dd></div>
              </dl></div>
            </div>
            <p className="note">Figures from datasheet CT_SERVA Rev.00 and manual IOM_SERVA Rev.01.2.</p>
      
            <h2>Installation</h2>
            <div className="install">
              <div className="spec"><h3>Sensor</h3>
                <ol>
                  <li>With the well stopped and secured, fit the 4 AA batteries and check the status LED.</li>
                  <li>Mount the sensor on the rod string, sheltered by the carrier bar, using the 4 M4 screws.</li>
                  <li>Confirm it does not interfere with the rotator and that the receiver is getting data.</li>
                </ol>
                <div className="warn"><svg className="i" viewBox="0 0 24 24"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4M12 17h.01" /></svg>Always mount it with the cover facing down: the seal depends on that orientation.</div>
              </div>
              <div className="spec"><h3>Receiver</h3>
                <ol>
                  <li>Place it in the monitoring room, near a 12–24 V DC supply on the panel.</li>
                  <li>Run the cable through the gland and wire the terminal block, respecting polarity.</li>
                  <li>Close the cover without straining the LED wiring and check that ON lights up.</li>
                </ol>
              </div>
            </div>
      
            <div className="docs">
              <a className="btn-navy" href="/docs/CT_SERVA_Rev_01_1.pdf" download><svg className="i" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5M12 15V3" /></svg>Download datasheet</a>
              <a className="btn-outline" href="/docs/IOM_SERVA_Rev_01_1.pdf" download><svg className="i" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5M12 15V3" /></svg>Download installation manual</a>
            </div>
          </div>
        </div>
      
        <section className="cta">
          <div className="container">
            <h2>Want SERVA on your wells?</h2>
            <p className="sub">Choose the path that fits your operation.</p>
            <div className="paths">
              <div className="path"><h3>Standard product</h3><p>SERVA is sold through Tulsa Oilfield Equipment.</p><a className="go" href="https://www.tulsaoil.com" target="_blank" rel="noopener">Go to Tulsa <svg className="i" viewBox="0 0 24 24"><path d="M7 17 17 7M7 7h10v10" /></svg></a></div>
              <div className="path"><h3>Adaptation or custom development</h3><p>If your operation needs a different variant or a new development, we design it with your team.</p><a className="go" href="/en#contact">Talk to BRIC <svg className="i" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a></div>
            </div>
          </div>
        </section>
      </main>
      <footer><div className="container"><a className="logo" href="/en">BR<i>I</i>C</a><span>© 2026 BRIC. All rights reserved.</span></div></footer>
      <ServaBehavior />
    </>
  );
}
