"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Star, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const codeLines = [
  <><span className="kw">const</span> <span className="name">profile</span> = {"{"}</>,
  <>  <span className="key">name</span>: <span className="str">'Seto Yoki'</span>,</>,
  <>  <span className="key">title</span>: <span className="str">'Full-Stack Developer'</span>,</>,
  <>  <span className="key">skills</span>: [</>,
  <>    <span className="str">'React'</span>, <span className="str">'NextJS'</span>, <span className="str">'Redux'</span>, <span className="str">'Express'</span>, <span className="str">'Node.js'</span>,</>,
  <>    <span className="str">'MySQL'</span>, <span className="str">'MongoDB'</span>, <span className="str">'Docker'</span>, <span className="str">'AWS'</span>, <span className="str">'TypeScript'</span>,</>,
  <>    <span className="str">'GraphQL'</span>, <span className="str">'Git'</span>, <span className="str">'Linux'</span>, <span className="str">'Tailwind'</span></>,
  <>  ],</>,
  <>  <span className="key">hardWorker</span>: <span className="bool">true</span>,</>,
  <>  <span className="key">quickLearner</span>: <span className="bool">true</span>,</>,
  <>  <span className="key">problemSolver</span>: <span className="bool">true</span>,</>,
  <>  <span className="key">yearsOfExperience</span>: <span className="num">5</span>,</>,
  <>  <span className="key">hireable</span>: <span className="fn">function</span>() {"{"}</>,
  <>    <span className="kw">return</span> {"{"}</>,
  <>      <span className="name">this</span>.hardWorker &amp;&amp;</>,
  <>      <span className="name">this</span>.problemSolver &amp;&amp;</>,
  <>      <span className="name">this</span>.skills.length &gt;= <span className="num">10</span> &amp;&amp;</>,
  <>      <span className="name">this</span>.yearsOfExperience &gt;= <span className="num">5</span></>,
  <>    );</>,
  <>  {"},"}</>,
  <>  <span className="key">status</span>: <span className="str">"🔥 Open To Work!"</span></>,
  {"};" as any},
];

const nav = ["Home", "About", "Skills", "Experience", "Education", "Projects", "Contact"];

export default function Page() {
  const [menu, setMenu] = useState(false);
  const [role, setRole] = useState("");
  const roles = ["JavaScript Developer", "Full-Stack Developer", "UI Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIndex];
    const delay = deleting ? 55 : 90;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = target.slice(0, role.length + 1);
        setRole(next);
        if (next === target) setTimeout(() => setDeleting(true), 900);
      } else {
        const next = target.slice(0, Math.max(0, role.length - 1));
        setRole(next);
        if (!next) {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [role, roleIndex, deleting]);

  return (
    <main className="site">
      <div className="stars" />
      <div className="grid" />

      <header className="topbar">
        <nav className={`nav ${menu ? "mobileOpen" : ""}`}>
          {nav.map((item, i) => (
            <a key={item} className={i === 0 ? "active" : ""} href={`#${item.toLowerCase()}`} onClick={() => setMenu(false)}>
              {item}
            </a>
          ))}
        </nav>
        <button className="menuButton" onClick={() => setMenu(!menu)} aria-label="Menu">
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <section id="home" className="hero">
        <div className="heroLeft">
          <motion.div className="welcome" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
            <span className="dot" /> Welcome to my universe
          </motion.div>

          <motion.div className="magicBadge" initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} transition={{delay:.2}}>
            <Zap size={15} /> UI Magic
          </motion.div>

          <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:.25,duration:.7}}>
            Hello<br />I&apos;m <span>Seto Yoki</span><i />
          </motion.h1>

          <motion.div className="roleBadge" initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:.45}}>
            <Zap size={15} /> <b>{role}</b><em />
          </motion.div>

          <p className="intro">
            JavaScript lover 🚀 | Full-Stack Developer 🛠️ | Building for the<br className="desktop" /> web 💻✨
          </p>

          <a href="#about" className="learn">Learn More</a>

          <div className="floatBadge clean"><Code2 size={15}/> Clean Code</div>
          <div className="floatBadge innovation"><Star size={15}/> Innovation</div>
        </div>

        <motion.div className="editor" initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} transition={{duration:.8,delay:.25}}>
          <div className="editorBar">
            <div className="lights"><span className="red"/><span className="yellow"/><span className="green"/></div>
            <span>developer.js</span>
          </div>
          <pre>{codeLines.map((line, i) => <code key={i} className="line">{line}{"\n"}</code>)}</pre>
        </motion.div>
      </section>

      <section id="about" className="dummy"><h2>About</h2></section>
      <section id="skills" className="dummy"><h2>Skills</h2></section>
      <section id="experience" className="dummy"><h2>Experience</h2></section>
      <section id="education" className="dummy"><h2>Education</h2></section>
      <section id="projects" className="dummy"><h2>Projects</h2></section>
      <section id="contact" className="dummy"><h2>Contact</h2></section>
    </main>
  );
}
