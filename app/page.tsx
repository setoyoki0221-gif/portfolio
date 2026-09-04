"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Server,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "Figma"
];

const projects = [
  {
    title: "Project One",
    type: "Full-Stack Application",
    description: "A polished full-stack product with a fast interface, robust API layer, authentication and a scalable data model.",
    stack: ["Next.js", "TypeScript", "Node.js"],
    number: "01",
  },
  {
    title: "Project Two",
    type: "Product & UI Engineering",
    description: "A responsive product experience focused on clean interaction design, reusable components and smooth motion.",
    stack: ["React", "Tailwind", "Framer Motion"],
    number: "02",
  },
  {
    title: "Project Three",
    type: "Cloud & Backend",
    description: "A production-minded backend and cloud architecture designed around reliability, observability and performance.",
    stack: ["Node.js", "AWS", "Docker"],
    number: "03",
  },
  {
    title: "Project Four",
    type: "Creative Web",
    description: "An experimental web experience combining expressive typography, modern visuals and delightful micro-interactions.",
    stack: ["Next.js", "GSAP", "WebGL"],
    number: "04",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const close = () => setOpen(false);

  return (
    <main>
      <motion.div className="progress" style={{ scaleX }} />

      <header className="nav">
        <a href="#home" className="brand" onClick={close}>
          SY<span>.</span>
        </a>

        <nav className={`navLinks ${open ? "open" : ""}`}>
          {["Home", "Skills", "Projects", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>
          ))}
        </nav>

        <a className="navCta" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
        <button className="menuBtn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <section id="home" className="hero section">
        <div className="orb orbA" />
        <div className="orb orbB" />
        <div className="gridGlow" />

        <motion.div
          className="heroCopy"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="eyebrow">FULL-STACK DEVELOPER & UI/UX ENGINEER</motion.p>
          <motion.h1 variants={fadeUp}>
            Building digital
            <span> experiences</span>
            <br />that feel alive.
          </motion.h1>
          <motion.p variants={fadeUp} className="heroText">
            Hi, I&apos;m <strong>Seto Yoki</strong>. I design and build thoughtful web products
            where clean engineering meets expressive interfaces.
          </motion.p>
          <motion.div variants={fadeUp} className="heroActions">
            <a className="button primary" href="#projects">View my work <ArrowDown size={17} /></a>
            <a className="button ghost" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
          </motion.div>
        </motion.div>

        <motion.div
          className="heroCard"
          initial={{ opacity: 0, scale: .92, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: .35 }}
        >
          <div className="cardNoise" />
          <div className="terminalTop"><i /><i /><i /><span>~/seto/portfolio</span></div>
          <pre>{`const developer = {
  name: "Seto Yoki",
  focus: [
    "full-stack",
    "ui/ux",
    "creative web"
  ],
  status: "available"
};`}</pre>
          <div className="availability"><span /> Available for new projects</div>
        </motion.div>
      </section>

      <section id="skills" className="section">
        <motion.div className="sectionHead" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2>Tools that turn ideas <span>into products.</span></h2>
        </motion.div>

        <div className="skillGrid">
          {skills.map((skill, i) => (
            <motion.div
              className="skill"
              key={skill}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .035 }}
              whileHover={{ y: -5 }}
            >
              <Code2 size={17} />
              <span>{skill}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="sectionHead split">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projects I&apos;m <span>proud of.</span></h2>
          </div>
          <p className="muted">A small selection of things I&apos;ve designed, engineered and shipped.</p>
        </div>

        <div className="projectList">
          {projects.map((project, i) => (
            <motion.article
              className="project"
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ delay: i * .08 }}
            >
              <div className="projectNumber">{project.number}</div>
              <div className="projectInfo">
                <p className="projectType">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.stack.map(t => <span key={t}>{t}</span>)}</div>
              </div>
              <a href="#contact" className="projectArrow" aria-label={`Discuss ${project.title}`}><ArrowUpRight /></a>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="aboutVisual">
          <div className="aboutRing ring1" />
          <div className="aboutRing ring2" />
          <div className="aboutCore"><Sparkles /></div>
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>I care about the <span>details.</span></h2>
          <p className="aboutText">
            I&apos;m a developer who enjoys taking an idea from a rough sketch to a real,
            reliable product. My sweet spot is the intersection of frontend craft,
            backend architecture and visual design.
          </p>
          <p className="aboutText">
            I like simple systems, purposeful motion and interfaces that get out of the
            way while still feeling memorable.
          </p>
          <div className="aboutStats">
            <div><strong>01</strong><span>Design-minded<br />engineering</span></div>
            <div><strong>02</strong><span>Scalable<br />architecture</span></div>
            <div><strong>03</strong><span>Human-first<br />experiences</span></div>
          </div>
        </motion.div>
      </section>

      <section className="services section">
        <div className="serviceCard"><Server /><h3>Full-stack</h3><p>APIs, databases, auth, cloud infrastructure and production-ready applications.</p></div>
        <div className="serviceCard"><Sparkles /><h3>UI / UX</h3><p>Interfaces with clear hierarchy, thoughtful interaction and responsive behavior.</p></div>
        <div className="serviceCard"><Code2 /><h3>Creative web</h3><p>Motion, visual systems and expressive details that make products feel special.</p></div>
      </section>

      <section id="contact" className="contact section">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>Let&apos;s make something <span>great.</span></h2>
          <p className="contactText">Tell me a little about what you&apos;re building and I&apos;ll get back to you.</p>
          <a className="emailLink" href="mailto:hello@example.com">hello@example.com <ArrowUpRight /></a>
        </motion.div>

        <div className="socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer"><Github /> GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
          <a href="mailto:hello@example.com"><Mail /> Email</a>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Seto Yoki</span>
        <span>Designed & built with care.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}