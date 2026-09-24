import { ArrowDownRight, ArrowUpRight, Download, Copy } from "lucide-react";
import { profile, interests, facts, mfc, experience, awards, education, toolkit } from "@/content";
import { Nav } from "@/components/Nav";
import { Motion } from "@/components/Motion";
import { HeroScene } from "@/components/HeroScene";
import { Pipeline, StackCalc } from "@/components/Mfc";

const Spark = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0c.8 6.6 5.4 11.2 12 12-6.6.8-11.2 5.4-12 12-.8-6.6-5.4-11.2-12-12C6.6 11.2 11.2 6.6 12 0Z" fill="currentColor" />
  </svg>
);

function SectionHead({ num, title, children }: { num: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <header className="section-head">
      <div>
        <p className="section-num" data-reveal>{num}</p>
        <h2 className="display-xl" data-lines>{title}</h2>
      </div>
      {children && <p className="lead" data-reveal>{children}</p>}
    </header>
  );
}

const Wave = () => <div className="container-page" aria-hidden="true"><div className="divider-wave animated" /></div>;

// Sparkline from start→end; shape only, endpoints are the paper's values.
function sparkPath(trend: string) {
  return trend === "down" ? "M4 10 C 60 12, 120 22, 196 50" : "M4 50 C 80 46, 130 34, 196 8";
}

export default function Home() {
  const loop = [...interests, ...interests];
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <div className="preloader" aria-hidden="true">
        <div className="preloader-inner">
          <div className="battery"><div className="battery-fill" /></div>
          <div className="preloader-count">0%</div>
          <div className="preloader-label">Charging · 0.255 V per cell</div>
        </div>
      </div>

      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
      <div className="paper-grain" aria-hidden="true" />

      <Nav />
      <Motion />

      <main id="main">
        {/* ---------------- HERO ---------------- */}
        <section className="hero" id="top">
          <HeroScene />
          <div className="hero-fade" />
          <div className="container-page hero-grid">
            <div>
              <span className="status-chip" data-hero>
                <span className="pulse-dot" /> Electrical Engineering · Universitas Indonesia
              </span>
              <h1 className="hero-name" aria-label={profile.name}>
                <span className="line-mask" aria-hidden="true"><span data-chars>Nabil</span></span>
                <span className="line-mask" aria-hidden="true"><span data-chars>Haniya</span></span>
                <span className="line-mask" aria-hidden="true"><span data-chars className="ital">Zafri</span></span>
              </h1>
              <p className="lead" data-hero>{profile.intro}</p>
              <div className="mt-8 flex flex-wrap gap-4" data-hero>
                <a href="#work" className="btn btn-solid" data-magnetic>
                  See the work <ArrowDownRight size={18} />
                </a>
                <a href={profile.cv} className="btn" target="_blank" rel="noreferrer" data-magnetic>
                  Download CV <Download size={16} />
                </a>
              </div>
            </div>

            <div className="portrait-wrap" data-hero>
              <div className="portrait" data-tilt>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/profile.jpg" alt="Nabil Haniya Zafri in a yellow Universitas Indonesia jacket" width={1200} height={1200} />
                <div className="portrait-halftone" />
                <div className="portrait-caption">
                  <span>Nabil Haniya Zafri</span>
                  <span>Depok, ID</span>
                </div>
              </div>
              <div className="orbit-badge" aria-hidden="true">
                <svg viewBox="0 0 100 100">
                  <defs><path id="orbit" d="M50 50 m-37 0 a37 37 0 1 1 74 0 a37 37 0 1 1 -74 0" /></defs>
                  <text><textPath href="#orbit">EE UI &apos;24 · TEKNIK ELEKTRO · FTUI ·</textPath></text>
                </svg>
                <b>&apos;24</b>
              </div>
              <span className="sticker" style={{ left: "-1.25rem", top: "22%", background: "#a3cfa9", rotate: "-6deg" }} data-float>
                GPA 3.71
              </span>
              <span className="sticker" style={{ right: "-1rem", top: "58%", background: "#f4c9a0", rotate: "5deg" }} data-float>
                Vice Head of R&amp;D
              </span>
            </div>
          </div>

          <div className="container-page hero-meta">
            <span className="scroll-cue"><i /> Scroll</span>
            <span>Depok · <span data-clock>--:--</span> WIB</span>
          </div>
        </section>

        {/* ---------------- MARQUEE ---------------- */}
        <div className="marquee" aria-label="Interests">
          <div className="marquee-track">
            {loop.map((t, i) => (
              <span className="marquee-item" key={i} aria-hidden={i >= interests.length}>
                {t} <Spark />
              </span>
            ))}
          </div>
        </div>

        {/* ---------------- ABOUT ---------------- */}
        <section className="section" id="about">
          <div className="container-page">
            <p className="section-num" data-reveal>01 — About</p>
            <p className="manifesto" data-words>
              I&apos;m an Electrical Engineering undergraduate at Universitas Indonesia, drawn to <em>power systems</em>,
              electrical equipment and <em>data-driven problem solving</em>. I&apos;ve led teams, managed technical projects
              and worked across academic and organisational life — and I&apos;m eager to contribute to impactful projects in
              the electrical industry.
            </p>
            <div className="fact-grid" data-stagger>
              {facts.map((f) => (
                <div className="fact" key={f.label}>
                  <span className="fact-value">
                    {f.value > 1900 ? f.value : <span data-count={f.value} data-decimals={f.decimals}>{f.value.toFixed(f.decimals)}</span>}{f.suffix}
                  </span>
                  <span className="fact-label">{f.label}</span>
                  <span className="fact-sub">{f.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Wave />

        {/* ---------------- WORK ---------------- */}
        <section className="section" id="work">
          <div className="container-page">
            <SectionHead num="02 — Selected work" title={<>Eco-Power <span className="ital">from Waste</span></>}>
              {mfc.subtitle}
            </SectionHead>

            <div className="case-top">
              <div className="cover-frame" data-reveal data-speed="-0.06">
                <div className="frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={mfc.cover} alt="Cover of the Eco-Power from Waste paper by team artWorker" width={911} height={1287} />
                </div>
                <div className="stamp" data-stamp>
                  <div>
                    <small>Innovation Idea</small>
                    <strong>Favorable<br />Idea</strong>
                    <small>2025</small>
                  </div>
                </div>
              </div>

              <div>
                <p className="poster-title" data-lines>
                  Food waste in.<br />Electricity out.<br /><span className="accent-orange">Heavy metals down.</span>
                </p>
                <dl className="meta-list" data-stagger>
                  <div className="meta-row"><dt>Team</dt><dd>{mfc.team}</dd></div>
                  <div className="meta-row"><dt>Competition</dt><dd>{mfc.competition}</dd></div>
                  <div className="meta-row"><dt>Result</dt><dd>Favorable Idea — PT Pertamina Hulu Energi</dd></div>
                  <div className="meta-row"><dt>My part</dt><dd>{mfc.role}</dd></div>
                  <div className="meta-row"><dt>Method</dt><dd>MATLAB/Simulink model with modified Monod kinetics, then series–parallel stacking design</dd></div>
                </dl>
                <div className="mt-8 flex flex-wrap gap-4" data-reveal>
                  <a href={mfc.paper} target="_blank" rel="noreferrer" className="btn btn-solid" data-magnetic data-cursor="Read">
                    Read the paper <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>

            <Pipeline steps={mfc.steps} />

            <div className="results" data-stagger>
              {mfc.results.map((r) => (
                <div className="result" key={r.label}>
                  <span className="fact-label">{r.label}</span>
                  <span className="result-value">
                    {r.prefix}<span data-count={r.value} data-decimals={r.value % 1 ? 2 : 0}>{r.value}</span>{r.suffix}
                  </span>
                  <svg viewBox="0 0 200 58" aria-hidden="true">
                    <line className="spark-base" x1="4" y1="56" x2="196" y2="56" />
                    <path className="spark-path" d={sparkPath(r.trend)} data-draw />
                    <circle className="spark-dot" cx="196" cy={r.trend === "down" ? 50 : 8} r="4.5" />
                  </svg>
                  <span className="meta">{r.detail}</span>
                </div>
              ))}
            </div>
            <p className="fine-print">
              All figures are simulation results reported in the paper (MATLAB/Simulink). Lab validation is listed as future work.
            </p>

            <StackCalc cell={mfc.cell} design={mfc.design} />
          </div>
        </section>

        <Wave />

        {/* ---------------- EXPERIENCE ---------------- */}
        <section className="section" id="experience">
          <div className="container-page">
            <SectionHead num="03 — Experience" title={<>Growing through <span className="ital">responsibility.</span></>}>
              From reviving a dormant high-school robotics team to leading R&amp;D staff at IME FTUI.
            </SectionHead>
            <div className="timeline">
              <div className="timeline-rail" aria-hidden="true"><div /></div>
              {experience.map((r) => (
                <article className="role" key={r.title}>
                  <span className="role-dot" aria-hidden="true" />
                  <p className="role-date">{r.period}</p>
                  <div className="role-card" data-reveal>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="role-org">{r.org}</span>
                      {r.current ? (
                        <span className="tag tag-orange now-tag"><span className="pulse-dot" /> Now</span>
                      ) : (
                        <span className="tag">{r.kind}</span>
                      )}
                    </div>
                    <h3>{r.title}</h3>
                    {r.blurb && <p className="role-blurb">{r.blurb}</p>}
                    <ul>{r.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- RECOGNITION ---------------- */}
        <section className="section section-sage" id="recognition">
          <div className="container-page">
            <SectionHead num="04 — Recognition" title={<>Proof, <span className="ital">on paper.</span></>}>
              One innovation award at university; robotics podiums at two competitions with the team I led in high school.
            </SectionHead>
            <div className="awards">
              {awards.map((a) => (
                <article className="award" key={a.title} data-stamp data-tilt>
                  <span className="award-mark">{a.mark}</span>
                  <h3>{a.title}</h3>
                  <span className="award-by">{a.by}</span>
                  <div className="award-foot">
                    <span>{a.note}</span>
                    <b>{a.year}</b>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- EDUCATION + TOOLKIT ---------------- */}
        <section className="section" id="education">
          <div className="container-page">
            <SectionHead num="05 — Education & toolkit" title={<>Learning the <span className="ital">fundamentals.</span></>}>
              Currently studying Electrical Engineering at Universitas Indonesia&apos;s Faculty of Engineering.
            </SectionHead>

            <div className="edu-card" data-reveal>
              <div>
                <p className="eyebrow">{education.school} · {education.location}</p>
                <h3 className="mt-2" style={{ fontFamily: "var(--f-display)", textTransform: "none", fontWeight: 400, fontSize: "clamp(1.7rem, 1.2rem + 1.6vw, 2.6rem)" }}>
                  {education.degree}
                </h3>
                <p className="meta mt-1">{education.period}</p>
                <div className="mt-8">
                  <div className="range-head mb-2" style={{ fontSize: ".85rem" }}>
                    <span>Degree timeline</span>
                    <output data-progress-label>&nbsp;</output>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" data-progress-start={education.start} data-progress-end={education.end} />
                  </div>
                  <div className="progress-labels"><span>Aug 2024</span><span>Aug 2028</span></div>
                </div>
              </div>
              <div className="md:text-right">
                <p className="fact-label">Cumulative GPA</p>
                <p className="edu-gpa">
                  <span data-count={education.gpa} data-decimals="2">{education.gpa}</span><small> / 4.00</small>
                </p>
              </div>
            </div>

            <div className="desk" data-desk>
              <span className="desk-hint">psst — they&apos;re draggable</span>
              {toolkit.map((g) => (
                <div className="desk-group" key={g.group}>
                  <h3>{g.group}</h3>
                  <div className="chips">
                    {g.items.map((s) => (
                      <span className="chip" data-tone={g.tone} data-drag key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section className="section section-brown contact grain" id="contact">
          <div className="contact-halftone" aria-hidden="true" />
          <div className="container-page relative">
            <p className="eyebrow" style={{ color: "var(--orange)" }} data-reveal>06 — Have an idea, opportunity, or good question?</p>
            <h2 className="mt-4" data-lines>
              Let&apos;s build the<br /><span className="ital">next thing.</span>
            </h2>
            <div className="mt-12 flex flex-wrap items-center gap-4" data-reveal>
              <a className="mail-link" href={`mailto:${profile.email}`} data-cursor="Write">
                {profile.email}
                <span className="arrow"><ArrowUpRight size={22} /></span>
              </a>
              <button type="button" className="icon-btn" data-copy={profile.email} aria-label="Copy email address" title="Copy email">
                <Copy size={16} />
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-3" data-reveal>
              {profile.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="btn btn-light" data-magnetic>
                  {s.label} <ArrowUpRight size={16} />
                </a>
              ))}
              <a href={profile.cv} target="_blank" rel="noreferrer" className="btn btn-solid" data-magnetic>
                CV <Download size={16} />
              </a>
            </div>
            <p className="meta mt-12">Based in {profile.location} · <span data-clock>--:--</span> WIB</p>
          </div>
        </section>
      </main>

      <footer className="container-page site-footer">
        <a href="#top" className="nav-logo">Nabil<span>.</span></a>
        <p className="meta">© {new Date().getFullYear()} {profile.name} · Built with Next.js, three.js &amp; GSAP</p>
        <a href="#top" className="link-border-underline meta">Back to top ↑</a>
      </footer>
    </>
  );
}
