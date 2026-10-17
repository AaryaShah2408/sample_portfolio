import { useEffect, useState } from 'react'
import { contact, projectLinks } from './config.js'

const NAV = [['about','About'],['work','Work'],['experience','Experience'],['toolkit','Toolkit'],['education','Education'],['contact','Contact']]

function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    NAV.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <header className="nav">
      <a className="logo" href="#top" aria-label="Aarya Shah, back to top">AS<i /></a>
      <button className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      <nav id="menu" className={open ? 'open' : ''} aria-label="Primary">
        {NAV.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
    </header>
  )
}

function HeroArt() {
  return (
    <svg className="heroart" viewBox="0 0 480 440" role="img" aria-label="Abstract chart line, bell curve and connected data points">
      <defs><linearGradient id="fade" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#c6f432" stopOpacity=".16"/><stop offset="1" stopColor="#c6f432" stopOpacity="0"/></linearGradient></defs>
      <g stroke="#ffffff" strokeOpacity=".07">{[...Array(9)].map((_, i) => <path key={i} d={`M${i*60} 0V440M0 ${i*55}H480`} />)}</g>
      <path className="bell" d="M20 400C120 400 150 390 190 300S250 70 300 70 360 300 400 390 460 400 470 400" fill="none" stroke="#e9ecf3" strokeOpacity=".35"/>
      <path d="M20 330 90 290 140 310 210 220 270 245 340 130 400 160 460 70V440H20Z" fill="url(#fade)"/>
      <path className="line" pathLength="1" d="M20 330 90 290 140 310 210 220 270 245 340 130 400 160 460 70" fill="none" stroke="#c6f432" strokeWidth="2"/>
      <g fill="#080d1a" stroke="#c6f432">{[[90,290],[140,310],[210,220],[270,245],[340,130],[400,160]].map(([x,y],i) => <circle key={i} className="pt" style={{animationDelay:`${1.2+i*.15}s`}} cx={x} cy={y} r="4"/>)}</g>
      <g stroke="#e9ecf3" strokeOpacity=".25" strokeDasharray="3 5"><path d="M210 220 340 130M140 310 270 245"/></g>
      <text x="22" y="425" className="svgt">μ, σ</text><text x="400" y="52" className="svgt">y = βx + ε</text>
    </svg>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="mono tag">Student · Research · Technology</p>
        <h1>Building at the intersection of markets, mathematics &amp; machine learning.</h1>
        <p className="lead">I'm Aarya Shah, a BTech student exploring quantitative finance, statistical modelling, and machine learning to understand complex problems and build practical solutions.</p>
        <div className="btns"><a className="btn primary" href="#work">Explore my work</a><a className="btn" href="#contact">Get in touch</a></div>
        <p className="mono status"><span className="dot" />Studying at MPSTME, NMIMS · 2022–2028</p>
      </div>
      <HeroArt />
    </section>
  )
}

const Head = ({ label, children }) => <div className="head"><p className="mono label">{label}</p><h2>{children}</h2></div>

function About() {
  return (
    <section id="about" className="sec">
      <Head label="About">Curiosity, backed by computation.</Head>
      <div className="two">
        <div className="prose">
          <p>I'm pursuing a BTech at MPSTME, NMIMS, and most of what I enjoy sits where numbers meet decisions: financial markets, derivatives, statistical analysis, and machine learning.</p>
          <p>I like taking an idea from a formula to something that runs. Python is how I do that, whether the question is how property prices behave, how sectors relate to each other, or how a face can be described with a handful of components.</p>
          <p>What pulls me in is connecting analytical concepts to practical problems, and I'm still early enough in the journey to treat every project as a chance to learn how things really work.</p>
        </div>
        <aside className="panel" aria-label="Education summary">
          <svg viewBox="0 0 300 160" aria-hidden="true"><g stroke="#fff" strokeOpacity=".1">{[...Array(6)].map((_, i)=><path key={i} d={`M${i*60} 0V160M0 ${i*32}H300`}/>)}</g><path d="M0 120C60 120 80 20 150 20S240 120 300 120" fill="none" stroke="#c6f432" strokeOpacity=".7"/><path d="M0 130 300 40" stroke="#e9ecf3" strokeOpacity=".35" strokeDasharray="4 4"/></svg>
          <p className="mono small">BTech | MPSTME, NMIMS | 2022–2028</p>
        </aside>
      </div>
    </section>
  )
}

const art = {
  realEstate: <svg viewBox="0 0 320 200" aria-hidden="true"><path d="M30 110 90 60 150 110V170H30Z" fill="none" stroke="#e9ecf3" strokeOpacity=".6"/><path d="M70 170V130H110V170" fill="none" stroke="#e9ecf3" strokeOpacity=".4"/>{[[170,150],[195,135],[210,140],[235,105],[255,95],[275,70],[295,60]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="3" fill="#c6f432"/>)}<path d="M165 155C210 140 250 100 300 55" fill="none" stroke="#c6f432"/><g fill="#e9ecf3" fillOpacity=".25">{[20,34,52,40,26,14].map((h,i)=><rect key={i} x={170+i*20} y={190-h} width="12" height={h}/>)}</g></svg>,
  sector: <svg viewBox="0 0 320 200" aria-hidden="true"><g>{[[16,130,'#c6f432',.9],[16,95,'#c6f432',.55],[16,60,'#e9ecf3',.4],[16,40,'#e9ecf3',.25],[16,22,'#e9ecf3',.15]].map(([a,w,c,o],i)=><rect key={i} x="20" y={30+i*26} width={w*1.2} height="16" fill={c} fillOpacity={o}/>)}</g><g fill="none" stroke="#e9ecf3" strokeOpacity=".15"><path d="M200 20V180M200 180H310"/></g>{[[215,150],[235,138],[250,120],[270,112],[285,85],[300,70]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="3" fill="#e9ecf3"/>)}<path d="M210 156 305 62" stroke="#c6f432"/></svg>,
  pca: <svg viewBox="0 0 320 200" aria-hidden="true"><g stroke="#e9ecf3" strokeOpacity=".3">{[[110,50,160,40],[160,40,210,50],[100,100,110,50],[220,100,210,50],[110,50,160,90],[210,50,160,90],[100,100,160,90],[220,100,160,90],[160,90,160,125],[130,150,160,125],[190,150,160,125],[100,100,130,150],[220,100,190,150]].map(([a,b,c,d],i)=><path key={i} d={`M${a} ${b}L${c} ${d}`}/>)}</g>{[[110,50],[160,40],[210,50],[100,100],[220,100],[160,90],[160,125],[130,150],[190,150]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="3.5" fill="#c6f432"/>)}<path d="M20 175H300M60 20V175" stroke="#e9ecf3" strokeOpacity=".2" strokeDasharray="3 5"/></svg>,
}

const projects = [
  { k:'realEstate', title:'Real Estate Price Prediction System', cat:'Machine learning', desc:'A predictive modelling project focused on estimating real estate prices from property-related data, translating raw information into practical price estimates.', tags:['Python','Machine learning'] },
  { k:'sector', title:'Sector Weightage Analysis', cat:'Statistical modelling', desc:'An analytical study using ANOVA and linear regression to investigate sector weightage and explore relationships in financial data.', tags:['Python','ANOVA','Linear regression'] },
  { k:'pca', title:'Face Recognition Using PCA', cat:'Computer vision', desc:'A computer vision project exploring Principal Component Analysis to reduce the dimensionality of facial data and support face recognition.', tags:['Python','PCA'] },
]

function Work() {
  return (
    <section id="work" className="sec">
      <Head label="Selected work">Projects driven by data.</Head>
      <div className="projects">
        {projects.map((p, i) => {
          const url = projectLinks[p.k]
          return (
            <article className={`proj ${i % 2 ? 'flip' : ''}`} key={p.k}>
              <div className="pvis">{art[p.k]}</div>
              <div className="pbody">
                <p className="mono label">Project {String(i + 1).padStart(2, '0')} · {p.cat}</p>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <ul className="tags">{p.tags.map(t => <li key={t} className="mono">{t}</li>)}</ul>
                {url ? <a className="btn" href={url} target="_blank" rel="noopener noreferrer">View project</a>
                     : <span className="btn disabled" aria-disabled="true">Link not added yet</span>}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="sec">
      <Head label="Experience">Research meets execution.</Head>
      <ol className="timeline">
        <li>
          <svg viewBox="0 0 120 70" aria-hidden="true"><path d="M5 60 40 35 70 45 115 10" fill="none" stroke="#c6f432"/><path d="M5 60 40 50 70 55 115 40" fill="none" stroke="#e9ecf3" strokeOpacity=".3" strokeDasharray="3 3"/></svg>
          <div><p className="mono label">Proprietary Trading</p><h3>Derivatives Researcher, Crosseas Capital</h3>
          <p>Worked within the proprietary trading department, focusing on derivatives research and developing exposure to the analytical side of financial markets.</p></div>
        </li>
        <li>
          <svg viewBox="0 0 120 70" aria-hidden="true"><g stroke="#e9ecf3" strokeOpacity=".35"><path d="M20 35 60 12 100 35 60 58Z M60 12V58 M20 35H100"/></g>{[[20,35],[60,12],[100,35],[60,58]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="4" fill="#c6f432"/>)}</svg>
          <div><p className="mono label">Non-profit</p><h3>Logistics Manager, Ville Parle NGO</h3>
          <p>Handled logistics-related responsibilities, contributing to the coordination and organization required to support NGO activities.</p></div>
        </li>
      </ol>
    </section>
  )
}

const skills = [
  ['Programming & development', ['Python']],
  ['Data science & machine learning', ['Machine learning','Statistical modelling','Principal Component Analysis','Linear regression','ANOVA']],
  ['Finance & research', ['Derivatives research','Financial markets','Quantitative analysis']],
]
function Toolkit() {
  return (
    <section id="toolkit" className="sec">
      <Head label="Toolkit">Tools for thinking and building.</Head>
      <div className="skills">
        {skills.map(([t, items]) => (
          <div key={t}><h3 className="mono">{t}</h3><ul>{items.map(s => <li key={s}>{s}</li>)}</ul></div>
        ))}
      </div>
      <p className="mono small note">Drawn from my projects and internship, areas I'm actively learning rather than claims of mastery.</p>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="sec">
      <Head label="Education">Where it started.</Head>
      <div className="edu">
        <p className="mono">2022–2028</p>
        <div><h3>Bachelor of Technology (BTech)</h3><p>Mukesh Patel School of Technology Management &amp; Engineering (MPSTME), NMIMS</p></div>
      </div>
    </section>
  )
}

function Contact() {
  const links = [
    ['Email', contact.email && `mailto:${contact.email}`, contact.email],
    ['LinkedIn', contact.linkedin, 'Connect on LinkedIn'],
    ['GitHub', contact.github, 'See my code'],
  ].filter(l => l[1])
  return (
    <section id="contact" className="sec contact">
      <Head label="Contact">Have an interesting problem?</Head>
      <p className="lead">I'm interested in ideas that connect data, technology, and financial markets. Feel free to reach out.</p>
      {links.length ? (
        <ul className="clinks">{links.map(([n, href, text]) => (
          <li key={n}><a className="btn primary" href={href} {...(n !== 'Email' && { target: '_blank', rel: 'noopener noreferrer' })}>{n}<span className="sr"> {text}</span></a></li>
        ))}</ul>
      ) : <p className="mono small">Contact links haven't been added yet.</p>}
    </section>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Nav />
      <main><Hero /><About /><Work /><Experience /><Toolkit /><Education /><Contact /></main>
      <footer className="foot">
        <p>© {new Date().getFullYear()} Aarya Shah</p>
        <nav aria-label="Footer">{['about','work','experience','contact'].map(id => <a key={id} href={`#${id}`}>{id[0].toUpperCase() + id.slice(1)}</a>)}</nav>
      </footer>
    </>
  )
}
