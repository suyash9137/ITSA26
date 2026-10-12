import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

const photos = {
  people: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=88",
  workshop: "https://images.unsplash.com/photo-1565688256340-249dbb31f25d?auto=format&fit=crop&w=1600&q=88",
  coding: "https://images.unsplash.com/photo-1637073849667-91120a924221?auto=format&fit=crop&w=1400&q=88",
  vertical: "https://images.unsplash.com/photo-1756273343749-63f7d6ea0cda?auto=format&fit=crop&w=1200&q=88",
  focus: "https://images.unsplash.com/photo-1568333261345-0918efdce2d9?auto=format&fit=crop&w=1400&q=88",
  event: "https://images.unsplash.com/photo-1695067058684-da5a90013c57?auto=format&fit=crop&w=1800&q=88",
};

const eventArchive = [
  { number: "01", year: "2026", name: "Techgyanathon", type: "Technical Festival", date: "16—18 March", note: "A technical autopsy in three acts.", image: photos.event },
  { number: "02", year: "2026", name: "Workshops", type: "Learning Programme", date: "Upcoming", note: "Hands-on learning designed around practical technology.", image: photos.workshop },
  { number: "03", year: "2026", name: "Competitions", type: "Student Challenges", date: "Upcoming", note: "Built to test ideas, teamwork and technical thinking.", image: photos.focus },
  { number: "04", year: "2025", name: "Community Archive", type: "Past Activities", date: "Archive", note: "Moments from the ITSA community and its programmes.", image: photos.people },
];

const techGroups = [
  { name: "Programming", code: "01", items: ["Python", "C++", "Java"] },
  { name: "Web", code: "02", items: ["JavaScript", "TypeScript", "React", "Node.js"] },
  { name: "Data & AI", code: "03", items: ["Machine Learning", "Deep Learning", "Generative AI"] },
  { name: "Databases", code: "04", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { name: "Cloud", code: "05", items: ["AWS", "Google Cloud", "Docker"] },
  { name: "Cybersecurity", code: "06", items: ["Networks", "Security", "Systems"] },
  { name: "Design", code: "07", items: ["Figma", "UI / UX", "Visual Systems"] },
  { name: "Emerging Tech", code: "08", items: ["IoT", "Computer Vision", "Automation"] },
];

const teams = [
  { name: "Technical", code: "01", role: "Code / Systems / Web", image: photos.coding },
  { name: "Documentation", code: "02", role: "Stories / Records / Editorial", image: photos.focus },
  { name: "Creativity", code: "03", role: "Design / Visuals / Experience", image: photos.vertical },
  { name: "Publicity", code: "04", role: "Community / Media / Outreach", image: photos.people },
  { name: "Infrastructure", code: "05", role: "Operations / Stage / Support", image: photos.workshop },
];

const gallery = [
  { title: "Ideas become prototypes", meta: "BUILD / 01", image: photos.people },
  { title: "Learning in public", meta: "WORKSHOP / 02", image: photos.workshop },
  { title: "Deep in the build", meta: "CODE / 03", image: photos.focus },
  { title: "Competition energy", meta: "EVENT / 04", image: photos.event },
  { title: "Together by design", meta: "COMMUNITY / 05", image: photos.vertical },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function Button({ children, href, variant = "primary" }: { children: ReactNode; href: string; variant?: "primary" | "line" }) {
  return <a className={`button button-${variant}`} href={href} data-cursor="GO"><span>{children}</span><Arrow /></a>;
}

function SectionHeader({ index, label, children, aside }: { index: string; label: string; children: ReactNode; aside?: string }) {
  return (
    <header className="section-header reveal">
      <div className="section-meta">{index} / {label}</div>
      <h2>{children}</h2>
      {aside && <p>{aside}</p>}
    </header>
  );
}

function Navbar({ openCommand }: { openCommand: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["About", "Technology", "Events", "People", "Gallery"];
  return (
    <>
      <nav className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#home" aria-label="ITSA home"><span>IT</span><b>ITSA</b></a>
        <div className="nav-links">{links.map((link) => <a href={`#${link.toLowerCase()}`} key={link}>{link}</a>)}</div>
        <div className="nav-actions">
          <button className="command-trigger" onClick={openCommand}><span>COMMAND</span><kbd>⌘K</kbd></button>
          <Button href="#connect" variant="line">CONNECT</Button>
        </div>
        <button className="menu-trigger" onClick={() => setOpen(true)} aria-label="Open menu"><i /><i /></button>
      </nav>
      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <div className="mobile-menu-top"><span>ITSA / 2026</span><button onClick={() => setOpen(false)}>CLOSE ×</button></div>
        <div className="mobile-links">{links.concat("Connect").map((link, i) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} style={{ "--delay": `${i * 55}ms` } as React.CSSProperties}><small>0{i + 1}</small><span>{link}</span><Arrow /></a>)}</div>
        <p>VPPCOEVA · SION · MUMBAI</p>
      </div>
    </>
  );
}

function Core() {
  return (
    <div className="core-stage" aria-label="ITSA Core visual">
      <div className="core-aura" />
      <div className="core-ring ring-a"><i /><i /></div>
      <div className="core-ring ring-b"><i /><i /><i /></div>
      <div className="core-shell"><div className="core-inner">I</div></div>
      {["AI", "WEB", "DATA", "CLOUD", "CYBER", "DESIGN"].map((item, i) => <span className={`core-label core-label-${i + 1}`} key={item}>{item}</span>)}
      <div className="core-coordinate">CORE / ONLINE<br />19.0760° N · 72.8777° E</div>
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const move = (event: MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    ref.current.style.setProperty("--x", `${(event.clientX / innerWidth - .5) * 2}`);
    ref.current.style.setProperty("--y", `${(event.clientY / innerHeight - .5) * 2}`);
  };
  return (
    <section className="hero" id="home" ref={ref} onMouseMove={move}>
      <div className="hero-grid" /><div className="hero-wash" /><Core />
      <div className="hero-content">
        <div className="hero-eyebrow"><span>VPPCOEVA · SION · MUMBAI</span><span>ITSA DIGITAL UNIVERSE / 2026</span></div>
        <h1><span>Information</span><span>Technology</span><span>Student</span><span>Association</span></h1>
        <div className="hero-lower">
          <p>Where technology students collaborate, experiment, compete and create what&apos;s next.</p>
          <div><Button href="#about">EXPLORE ITSA</Button><Button href="#events" variant="line">VIEW EVENTS</Button></div>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO DISCOVER</span><i /></a>
    </section>
  );
}

function About() {
  return (
    <section className="about section" id="about">
      <SectionHeader index="01" label="ABOUT">WE BUILD<br />THE PEOPLE<br />WHO BUILD<br /><em>TECHNOLOGY.</em></SectionHeader>
      <div className="about-copy reveal">
        <p>ITSA is a student initiative of the Information Technology Department at VPPCOEVA—an active community for collaboration, learning, innovation and professional growth.</p>
        <p>Through workshops, competitions, industry exposure and shared experimentation, students turn academic curiosity into real-world capability.</p>
      </div>
      <div className="about-frame reveal-image"><img src={photos.people} alt="Students collaborating around a laptop" /></div>
      <div className="about-side">STUDENT-LED<br />TECHNOLOGY-DRIVEN<br />BUILT IN MUMBAI</div>
    </section>
  );
}

function SystemSection() {
  return (
    <section className="system-section">
      <div className="system-top"><span>ITSA / INSTITUTIONAL SYSTEM</span><span>LOCAL TIME / MUMBAI</span><span className="active-dot">SYSTEM STATUS / ACTIVE</span></div>
      <div className="system-word">ITSA</div>
      <div className="system-grid">
        <div><small>ENTITY</small><strong>INFORMATION<br />TECHNOLOGY<br />STUDENT ASSOCIATION</strong></div>
        <div><small>LOCATION</small><strong>VPPCOEVA<br />SION / MUMBAI</strong></div>
        <div><small>OPERATING PRINCIPLES</small><strong>TECHNOLOGY<br />COMMUNITY<br />INNOVATION</strong></div>
        <div><small>IDENTIFIER</small><strong>ITSA / 2026<br />19.0760° N<br />72.8777° E</strong></div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="impact section">
      <div className="impact-intro"><span>02 / IMPACT</span><p>We don&apos;t inflate the numbers.<br />We build the next ones.</p></div>
      <div className="impact-grid">
        {[["XX+", "EVENTS"], ["XX+", "STUDENTS"], ["XX+", "WORKSHOPS"], ["XX+", "PROJECTS"]].map(([value, label], i) => <article className="impact-stat reveal" key={label}><small>0{i + 1}</small><strong>{value}</strong><span>{label}</span></article>)}
      </div>
    </section>
  );
}

function FeaturedEvent() {
  return (
    <section className="featured section" id="events">
      <div className="feature-top"><span>03 / FEATURED EVENT</span><span>16—18 MARCH 2026</span><span>VPPCOE · MUMBAI</span></div>
      <div className="feature-object" aria-hidden="true"><div className="event-sphere" /><div className="event-disc disc-a" /><div className="event-disc disc-b" /><span>03 DAYS</span></div>
      <h2><span>TECH</span><span>GYANA</span><span>THON</span></h2>
      <p className="feature-thesis">A technical autopsy<br />in three acts.</p>
      <div className="feature-facts"><div><strong>₹60K</strong><span>PRIZE POOL</span></div><div><strong>5+</strong><span>EVENTS</span></div><div><strong>2</strong><span>WORKSHOPS</span></div><div><strong>3</strong><span>DAYS</span></div></div>
      <Button href="mailto:techgyanathon@pvppcoe.ac.in" variant="line">EXPLORE EVENT</Button>
    </section>
  );
}

function EventArchive() {
  const [active, setActive] = useState(0);
  return (
    <section className="events-archive section">
      <SectionHeader index="04" label="EVENT ARCHIVE" aside="A living catalogue of competitions, workshops, programmes and community moments.">DESIGNED TO<br />BE <em>EXPERIENCED.</em></SectionHeader>
      <div className="archive-layout">
        <div className="event-preview" data-cursor="VIEW"><img src={eventArchive[active].image} alt={eventArchive[active].name} /><span>{eventArchive[active].year} / {eventArchive[active].type}</span><p>{eventArchive[active].note}</p></div>
        <div className="archive-list">
          <div className="archive-year">2026 — PRESENT</div>
          {eventArchive.map((event, i) => <button className={active === i ? "active" : ""} key={event.number} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}><small>{event.number}</small><span>{event.name}</span><i>{event.date}</i><Arrow /></button>)}
        </div>
      </div>
    </section>
  );
}

function LiveITSA() {
  return (
    <section className="live-section">
      <div className="live-title"><span className="active-dot">LIVE ITSA / NOW</span><h2>WHAT&apos;S<br />HAPPENING<br /><em>AT ITSA.</em></h2></div>
      <div className="live-modules">
        <article className="live-main"><span>CURRENTLY / 01</span><strong>BUILDING THE<br />2026 EXPERIENCE.</strong><p>Planning, designing and preparing the next cycle of workshops, competitions and community programmes.</p></article>
        <article><span>NEXT EVENT / 02</span><strong>TECHGYANATHON</strong><p>16—18 March 2026</p></article>
        <article><span>COMMUNITY / 03</span><strong>OPEN TO<br />COLLABORATION</strong><p>Ideas, events and partnerships.</p></article>
        <article><span>LATEST / 04</span><strong>ITSA / 2026</strong><p>System active · Sion, Mumbai</p></article>
      </div>
    </section>
  );
}

function Constellation() {
  const [active, setActive] = useState(0);
  return (
    <section className="technology section" id="technology">
      <SectionHeader index="05" label="TECHNOLOGY">THE ITSA<br />TECHNOLOGY<br /><em>CONSTELLATION.</em></SectionHeader>
      <div className="constellation">
        <div className="constellation-grid" />
        <div className="constellation-core"><span>ITSA</span><small>KNOWLEDGE CORE</small></div>
        <svg viewBox="0 0 1000 700" aria-hidden="true"><path d="M500 350 L155 125 M500 350 L420 70 M500 350 L780 110 M500 350 L880 350 M500 350 L750 610 M500 350 L430 640 M500 350 L140 560 M500 350 L110 330" /></svg>
        {techGroups.map((group, i) => <button className={`tech-node node-${i + 1} ${active === i ? "active" : ""}`} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)} key={group.name} data-cursor="DISCOVER"><small>{group.code}</small><span>{group.name}</span></button>)}
        <div className="tech-detail"><span>SELECTED / {techGroups[active].code}</span><h3>{techGroups[active].name}</h3><div>{techGroups[active].items.map((item) => <b key={item}>{item}</b>)}</div></div>
      </div>
    </section>
  );
}

function People() {
  const [active, setActive] = useState(0);
  return (
    <section className={`people section people-tone-${active}`} id="people">
      <SectionHeader index="06" label="PEOPLE" aside="Five specialist teams, working as one student-led system.">THE PEOPLE<br />BEHIND<br /><em>THE BUILD.</em></SectionHeader>
      <div className="people-layout">
        <div className="people-portrait reveal-image" data-cursor="VIEW"><img src={teams[active].image} alt={`${teams[active].name} team`} /><span>TEAM / {teams[active].code}</span></div>
        <div className="people-list">{teams.map((team, i) => <button className={active === i ? "active" : ""} key={team.name} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}><small>{team.code}</small><span>{team.name}</span><i>{team.role}</i><Arrow /></button>)}</div>
      </div>
    </section>
  );
}

function Bodies() {
  return (
    <section className="bodies">
      <div><span>07 / PROFESSIONAL BODIES</span><p>CONNECTED<br />BEYOND THE<br />CLASSROOM.</p></div>
      <div className="body-row">{["ITSA", "CSI", "ISTE", "IACC"].map((body, i) => <div key={body}><small>0{i + 1}</small><strong>{body}</strong><span>ASSOCIATED NETWORK</span></div>)}</div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <SectionHeader index="08" label="GALLERY">THE MEMORY<br /><em>ARCHIVE.</em></SectionHeader>
      <div className="gallery-grid">{gallery.map((item, i) => <figure className={`gallery-item gallery-item-${i + 1} reveal-image`} key={item.title} data-cursor="VIEW"><img src={item.image} alt={item.title} /><figcaption><span>{item.meta}</span><p>{item.title}</p></figcaption></figure>)}</div>
      <div className="image-credit">COMMUNITY IMAGERY SHOWN AS VISUAL DIRECTION · PHOTOGRAPHY VIA UNSPLASH</div>
    </section>
  );
}

function Vision() {
  return (
    <section className="vision section">
      <span className="vision-index">09 / VISION &amp; MISSION</span>
      <h2><span>BUILD.</span><span>LEARN.</span><span>CREATE.</span><span>LEAD.</span></h2>
      <div className="vision-copy"><article><span>VISION / 01</span><p>Create an environment where students can explore technology, innovation and professional growth.</p></article><article><span>MISSION / 02</span><p>Bridge academic learning with real-world technology, collaboration and industry exposure.</p></article></div>
    </section>
  );
}

function Identity() {
  return (
    <section className="identity">
      <div className="identity-meta"><span>ITSA / IDENTITY SYSTEM / 2026</span><span>VPPCOEVA · SION · MUMBAI</span></div>
      <div className="identity-word">ITSA</div>
      <div className="identity-bottom"><p>INFORMATION TECHNOLOGY<br />STUDENT ASSOCIATION</p><p>CURIOUS · TECHNICAL · CREATIVE<br />STUDENT-DRIVEN · CONNECTED</p><p className="active-dot">SYSTEM / ACTIVE</p></div>
    </section>
  );
}

function Connect() {
  return (
    <section className="connect section" id="connect">
      <span>10 / OPEN CHANNEL</span><h2>LET&apos;S BUILD<br /><em>WHAT&apos;S NEXT.</em></h2>
      <div className="connect-aside"><p>Got an idea? Want to collaborate, organize an event or become part of ITSA?</p><Button href="mailto:techgyanathon@pvppcoe.ac.in">CONNECT WITH ITSA</Button></div>
      <div className="connect-links"><a href="mailto:techgyanathon@pvppcoe.ac.in">EMAIL <Arrow diagonal /></a><a href="https://www.instagram.com/itsa_vppcoe/" target="_blank" rel="noreferrer">INSTAGRAM <Arrow diagonal /></a><a href="https://www.linkedin.com/company/96393125/admin/" target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a></div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-brand">ITSA<span>●</span></div>
      <div className="footer-info"><p>Information Technology Student Association<br /><b>VPPCOEVA · Sion, Mumbai — 400022</b></p><div>{["About", "Technology", "Events", "People", "Gallery", "Connect"].map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}</div></div>
      <div className="footer-end"><span>© 2026 ITSA</span><span>19.0760° N · 72.8777° E</span><span>ALL RIGHTS RESERVED.</span></div>
    </footer>
  );
}

function CommandPalette({ open, close }: { open: boolean; close: () => void }) {
  const links = ["About", "Events", "People", "Technology", "Gallery", "Connect"];
  return (
    <div className={`command-palette ${open ? "is-open" : ""}`} aria-hidden={!open} onClick={close}>
      <div className="command-window" onClick={(event) => event.stopPropagation()}>
        <div className="command-head"><span>ITSA / COMMAND</span><button onClick={close}>ESC</button></div>
        <p>WHAT ARE YOU LOOKING FOR?</p>
        <div>{links.map((link, i) => <a href={`#${link.toLowerCase()}`} onClick={close} key={link}><small>0{i + 1}</small><span>{link}</span><Arrow /></a>)}</div>
      </div>
    </div>
  );
}

function Cursor() {
  const [state, setState] = useState({ x: -100, y: -100, label: "" });
  useEffect(() => {
    const move = (e: globalThis.MouseEvent) => setState((s) => ({ ...s, x: e.clientX, y: e.clientY }));
    const over = (e: globalThis.MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-cursor],a,button") as HTMLElement | null;
      setState((s) => ({ ...s, label: target?.dataset.cursor || (target ? "GO" : "") }));
    };
    window.addEventListener("mousemove", move); document.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", over); };
  }, []);
  return <div className={`cursor ${state.label ? "active" : ""}`} style={{ transform: `translate3d(${state.x}px,${state.y}px,0)` }}><span>{state.label}</span></div>;
}

export default function App() {
  const [commandOpen, setCommandOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: .12 });
    document.querySelectorAll(".reveal,.reveal-image").forEach((el) => observer.observe(el));
    const key = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setCommandOpen(true); }
      if (event.key === "Escape") setCommandOpen(false);
    };
    window.addEventListener("keydown", key);
    return () => { observer.disconnect(); window.removeEventListener("keydown", key); };
  }, []);
  return (
    <>
      <div className="noise" /><Cursor /><Navbar openCommand={() => setCommandOpen(true)} /><CommandPalette open={commandOpen} close={() => setCommandOpen(false)} />
      <main><Hero /><About /><SystemSection /><Impact /><FeaturedEvent /><EventArchive /><LiveITSA /><Constellation /><People /><Bodies /><Gallery /><Vision /><Identity /><Connect /></main><Footer />
    </>
  );
}
