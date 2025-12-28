"use client";

import { useEffect, useState } from "react";

const content = {
  es: {
    nav: {
      services: "Servicios",
      work: "Proyectos",
      pricing: "Precios",
      legal: "Aviso legal",
      process: "Proceso",
      about: "Sobre mi",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Freelance mobile developer",
      title: "Francisco Requena",
      role: "Mobile Developer iOS + Android",
      lead:
        "Ayudo a negocios y startups a lanzar apps moviles claras, rapidas y mantenibles, con foco en resultados.",
      ctaPrimary: "Iniciar proyecto",
      ctaSecondary: "Ver trabajos",
      chips: ["iOS + Android", "Apps nativas", "Entrega por fases", "Almeria, Spain"],
      cardTitle: "Datos clave",
      cardLines: [
        { label: "Base", value: "Almeria, Spain" },
        { label: "Idioma", value: "Espanol / Ingles" },
        { label: "Disponibilidad", value: "Nuevos proyectos" },
        { label: "Contacto", value: "franreke606@gmail.com" },
      ],
    },
    services: {
      title: "Servicios",
      lead:
        "Trabajo de idea a lanzamiento con entregas claras, comunicacion directa y foco en calidad.",
      items: [
        {
          title: "Estrategia y alcance",
          text: "Definimos objetivo, MVP y roadmap para lanzar rapido sin ruido.",
        },
        {
          title: "Desarrollo mobile",
          text: "Apps iOS y Android nativas, performance first y codigo limpio.",
        },
        {
          title: "Lanzamiento y soporte",
          text: "Publicacion en stores, analitica basica y mejoras continuas.",
        },
      ],
    },
    work: {
      eyebrow: "Trabajo seleccionado",
      title: "Proyectos destacados",
      lead:
        "Una seleccion breve de proyectos que muestran mi enfoque en producto y detalle.",
      items: [
        {
          title: "EduTrack",
          text:
            "App Android para gestionar anios academicos, asignaturas y notas con promedios ponderados.",
          tags: ["Kotlin", "Compose", "Firebase"],
          href: "/projects/edutrack",
          linkLabel: "Ver caso",
          github: "https://github.com/franreke05/EduTrack",
          accent: "178 235 242",
          featured: true,
        },
        {
          title: "Proyecto 02",
          text: "Caso de estudio enfocado en experiencia, performance o crecimiento.",
          tags: ["UX", "Kotlin", "API"],
          accent: "139 111 86",
        },
        {
          title: "Proyecto 03",
          text: "Resumen del impacto, tecnologias clave y tu rol.",
          tags: ["MVP", "Entrega rapida", "QA"],
          accent: "139 111 86",
        },
      ],
    },
    process: {
      title: "Proceso",
      lead:
        "Trabajo con un flujo corto para reducir riesgos y mantener el avance visible.",
      steps: [
        "Kickoff y definicion de objetivos",
        "Prototipo rapido y validacion",
        "Desarrollo por sprints con entregas",
        "QA, publicacion y soporte",
      ],
    },
    about: {
      title: "Sobre mi",
      lead:
        "Mobile developer con base en Almeria. Experiencia en desarrollo, soporte tecnico y proyectos internos.",
      highlights: [
        "Practicas en IMARINA con desarrollo de app en Kotlin Compose.",
        "Experiencia en ORIZON SOFTWARE atendiendo tickets y redisenos.",
        "Formacion SMR y DAM con enfoque en tecnologia aplicada.",
      ],
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          role: "Practicas - IMARINA",
          detail: "Desarrollo de una app en Kotlin Compose.",
        },
        {
          role: "Informatico - ORIZON SOFTWARE",
          detail: "Redisenos de formularios y soporte a clientes.",
        },
        {
          role: "Practicas - DIMUFIT",
          detail: "Sistemas de redes y tareas de soporte.",
        },
      ],
    },
    stack: {
      title: "Stack",
      lead: "Tecnologias y herramientas con las que trabajo.",
      items: [
        "Kotlin",
        "Jetpack Compose",
        "Java",
        "Android Studio",
        "React",
        "HTML/CSS",
        "SQL",
        "Python",
        "GitHub",
        "GitLab",
        "iOS (native)",
      ],
    },
    contact: {
      title: "Contacto",
      lead:
        "Cuantame tu idea y te respondo con una propuesta clara en 24-48h.",
      primary: "Escribeme por email",
      secondary: "Llamar",
      details: [
        { label: "Email", value: "franreke606@gmail.com" },
        { label: "Telefono", value: "642957572" },
        { label: "Ubicacion", value: "Almeria, Spain" },
      ],
      formTitle: "Enviame un mensaje",
      formLead: "Si prefieres, deja tu consulta aqui y te respondo pronto.",
      nameLabel: "Nombre",
      emailLabel: "Email",
      messageLabel: "Mensaje",
      submitLabel: "Enviar mensaje",
      sending: "Enviando...",
      success: "Mensaje enviado. Gracias.",
      error: "No se pudo enviar. Intenta de nuevo.",
    },
    footer: {
      text: "Disponible para proyectos freelance. Hecho con Next.js.",
      legal:
        "Aviso legal: precios y condiciones sujetos al alcance y requisitos del proyecto.",
    },
  },
  en: {
    nav: {
      services: "Services",
      work: "Work",
      pricing: "Pricing",
      legal: "Legal",
      process: "Process",
      about: "About",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Freelance mobile developer",
      title: "Francisco Requena",
      role: "Mobile Developer iOS + Android",
      lead:
        "I help businesses and startups launch clean, fast, and maintainable mobile apps with a focus on results.",
      ctaPrimary: "Start a project",
      ctaSecondary: "View work",
      chips: ["iOS + Android", "Native apps", "Phased delivery", "Almeria, Spain"],
      cardTitle: "Key facts",
      cardLines: [
        { label: "Base", value: "Almeria, Spain" },
        { label: "Language", value: "Spanish / English" },
        { label: "Availability", value: "Open for projects" },
        { label: "Contact", value: "franreke606@gmail.com" },
      ],
    },
    services: {
      title: "Services",
      lead:
        "From idea to launch with clear milestones, direct communication, and quality.",
      items: [
        {
          title: "Strategy and scope",
          text: "Define goals, MVP, and roadmap to ship fast without noise.",
        },
        {
          title: "Mobile development",
          text: "Native iOS and Android apps with performance-first delivery.",
        },
        {
          title: "Launch and support",
          text: "Store release, basic analytics, and continuous improvements.",
        },
      ],
    },
    work: {
      eyebrow: "Selected work",
      title: "Featured work",
      lead:
        "A short selection of projects that best represent my product focus.",
      items: [
        {
          title: "EduTrack",
          text:
            "Android app to manage academic years, subjects, and grades with weighted averages.",
          tags: ["Kotlin", "Compose", "Firebase"],
          href: "/projects/edutrack",
          linkLabel: "View case",
          github: "https://github.com/franreke05/EduTrack",
          accent: "178 235 242",
          featured: true,
        },
        {
          title: "Project 02",
          text: "A case study focused on UX, performance, or growth.",
          tags: ["UX", "Kotlin", "API"],
          accent: "139 111 86",
        },
        {
          title: "Project 03",
          text: "Outcome highlights, key tech, and your role.",
          tags: ["MVP", "Fast delivery", "QA"],
          accent: "139 111 86",
        },
      ],
    },
    process: {
      title: "Process",
      lead:
        "A short workflow to reduce risk and keep progress transparent.",
      steps: [
        "Kickoff and goal definition",
        "Rapid prototype and validation",
        "Sprint-based delivery",
        "QA, release, and support",
      ],
    },
    about: {
      title: "About",
      lead:
        "Mobile developer based in Almeria with experience in development, support, and internal projects.",
      highlights: [
        "Internship at IMARINA building an app with Kotlin Compose.",
        "Experience at ORIZON SOFTWARE handling tickets and redesigns.",
        "SMR and DAM education focused on applied tech.",
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Internship - IMARINA",
          detail: "Built an app with Kotlin Compose.",
        },
        {
          role: "IT Support - ORIZON SOFTWARE",
          detail: "Form redesigns and client support.",
        },
        {
          role: "Internship - DIMUFIT",
          detail: "Network systems and support tasks.",
        },
      ],
    },
    stack: {
      title: "Stack",
      lead: "Technologies and tools I use.",
      items: [
        "Kotlin",
        "Jetpack Compose",
        "Java",
        "Android Studio",
        "React",
        "HTML/CSS",
        "SQL",
        "Python",
        "GitHub",
        "GitLab",
        "iOS (native)",
      ],
    },
    contact: {
      title: "Contact",
      lead: "Share your idea and I will reply with a clear plan in 24-48h.",
      primary: "Email me",
      secondary: "Call",
      details: [
        { label: "Email", value: "franreke606@gmail.com" },
        { label: "Phone", value: "642957572" },
        { label: "Location", value: "Almeria, Spain" },
      ],
      formTitle: "Send me a message",
      formLead: "Prefer a form? Leave a note and I will reply soon.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      submitLabel: "Send message",
      sending: "Sending...",
      success: "Message sent. Thanks.",
      error: "Could not send. Try again.",
    },
    footer: {
      text: "Available for freelance projects. Built with Next.js.",
      legal:
        "Legal notice: pricing and terms may change depending on scope and requirements.",
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState("es");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const locale = navigator.language || "";
    if (locale.toLowerCase().startsWith("en")) {
      setLang("en");
    }
  }, []);

  const t = content[lang];

  const getProjectTarget = (item) =>
    item.href || item.github || "/#contact";

  const openProject = (target) => {
    if (!target) return;
    if (target.startsWith("#")) {
      window.location.hash = target;
      return;
    }
    if (target.startsWith("/#")) {
      window.location.hash = target.slice(1);
      return;
    }
    if (/^https?:\/\//i.test(target)) {
      window.open(target, "_blank", "noreferrer");
      return;
    }
    window.location.href = target;
  };

  const handleProjectKeyDown = (target) => (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(target);
    }
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleFieldChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus({ type: "success", text: t.contact.success });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", text: t.contact.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page">
      <header className="site-header">
        <div className="container">
          <div className="brand">
            <span className="brand-logo-wrap">
              <img
                className="brand-logo"
                src="/logo-fr.png"
                alt="Francisco Requena logo"
              />
            </span>
            <span className="brand-text">Mobile Developer</span>
          </div>
          <nav className="site-nav">
            <a href="#work">{t.nav.work}</a>
            <a href="/pricing">{t.nav.pricing}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#process">{t.nav.process}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="lang-toggle">
            <button
              type="button"
              className={lang === "es" ? "active" : ""}
              onClick={() => setLang("es")}
            >
              ES
            </button>
            <button
              type="button"
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="section work-section work-spotlight" id="work">
          <div className="container work-spotlight-grid">
            <aside className="work-spotlight-intro">
              <div className="reveal" style={{ "--delay": "60ms" }}>
                <p className="eyebrow">{t.hero.eyebrow}</p>
                <h1 className="intro-title">{t.hero.title}</h1>
                <p className="role">{t.hero.role}</p>
                <p className="lead">{t.hero.lead}</p>
                <div className="cta-row">
                  <a className="btn primary" href="#contact">
                    {t.hero.ctaPrimary}
                  </a>
                  <a className="btn ghost" href="#work">
                    {t.hero.ctaSecondary}
                  </a>
                </div>
                <div className="chips">
                  {t.hero.chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hero-card reveal" style={{ "--delay": "140ms" }}>
                <div className="portrait" aria-hidden="true" />
                <div>
                  <h3 className="card-title">{t.hero.cardTitle}</h3>
                  <div className="card-list">
                    {t.hero.cardLines.map((line) => (
                      <div key={line.label}>
                        <span>{line.label}:</span> {line.value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
            <div className="work-spotlight-projects">
              <div className="reveal" style={{ "--delay": "120ms" }}>
                <p className="eyebrow">{t.work.eyebrow}</p>
                <h2 className="work-spotlight-title">{t.work.title}</h2>
                <p className="section-lead">{t.work.lead}</p>
              </div>
              <div className="work-grid work-grid-spotlight">
                {t.work.items.map((item, index) => {
                  const target = getProjectTarget(item);
                  const isClickable = Boolean(target);

                  return (
                    <article
                      className={`card work-card reveal${
                        item.featured ? " featured" : ""
                      }${isClickable ? " is-clickable" : ""}`}
                      style={{
                        "--delay": `${140 + index * 80}ms`,
                        "--project-accent": item.accent || "var(--accent-rgb)",
                      }}
                      key={item.title}
                      role={isClickable ? "link" : undefined}
                      tabIndex={isClickable ? 0 : undefined}
                      onClick={isClickable ? () => openProject(target) : undefined}
                      onKeyDown={
                        isClickable ? handleProjectKeyDown(target) : undefined
                      }
                      aria-label={
                        isClickable
                          ? `${item.title} ${
                              lang === "es" ? "proyecto" : "project"
                            }`
                          : undefined
                      }
                    >
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <div className="tag-row">
                        {item.tags.map((tag) => (
                          <span className="tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      {(item.href || item.github) && (
                        <div className="card-actions">
                          {item.href && item.linkLabel && (
                            <a
                              className="card-link primary"
                              href={item.href}
                              onClick={stopPropagation}
                              onKeyDown={stopPropagation}
                            >
                              {item.linkLabel}
                            </a>
                          )}
                          {item.github && (
                            <a
                              className="card-link"
                              href={item.github}
                              target="_blank"
                              rel="noreferrer"
                              onClick={stopPropagation}
                              onKeyDown={stopPropagation}
                            >
                              GitHub
                            </a>
                          )}
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="reveal" style={{ "--delay": "80ms" }}>
              <h2 className="section-title">{t.services.title}</h2>
              <p className="section-lead">{t.services.lead}</p>
            </div>
            <div className="cards">
              {t.services.items.map((item, index) => (
                <article
                  className="card reveal"
                  style={{ "--delay": `${140 + index * 80}ms` }}
                  key={item.title}
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="container split">
            <div className="reveal" style={{ "--delay": "80ms" }}>
              <h2 className="section-title">{t.process.title}</h2>
              <p className="section-lead">{t.process.lead}</p>
              <div className="cards">
                {t.process.steps.map((step) => (
                  <div className="card" key={step}>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ "--delay": "160ms" }}>
              <h3 className="section-title">{t.about.title}</h3>
              <p className="section-lead">{t.about.lead}</p>
              <div className="list">
                {t.about.highlights.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container split">
            <div className="reveal" style={{ "--delay": "80ms" }}>
              <h2 className="section-title">{t.experience.title}</h2>
              <div className="timeline">
                {t.experience.items.map((item) => (
                  <div className="timeline-item" key={item.role}>
                    <h4>{item.role}</h4>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ "--delay": "160ms" }}>
              <h2 className="section-title">{t.stack.title}</h2>
              <p className="section-lead">{t.stack.lead}</p>
              <div className="stack-grid">
                {t.stack.items.map((item) => (
                  <span className="stack-item" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-grid">
            <div className="contact-card reveal" style={{ "--delay": "80ms" }}>
              <h2 className="section-title">{t.contact.title}</h2>
              <p className="section-lead">{t.contact.lead}</p>
              <div className="cta-row">
                <a
                  className="btn primary"
                  href="mailto:franreke606@gmail.com"
                >
                  {t.contact.primary}
                </a>
                <a className="btn ghost" href="tel:642957572">
                  {t.contact.secondary}
                </a>
              </div>
              <div className="contact-links">
                {t.contact.details.map((detail) => (
                  <div key={detail.label}>
                    <span>{detail.label}:</span>{" "}
                    <a
                      href={
                        detail.label === "Email"
                          ? "mailto:franreke606@gmail.com"
                          : detail.label === "Phone" ||
                            detail.label === "Telefono"
                          ? "tel:642957572"
                          : undefined
                      }
                    >
                      {detail.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <form
              className="contact-form reveal"
              style={{ "--delay": "160ms" }}
              onSubmit={handleSubmit}
            >
              <h3 className="card-title">{t.contact.formTitle}</h3>
              <p className="form-lead">{t.contact.formLead}</p>
              <div className="form-field">
                <label className="form-label" htmlFor="contact-name">
                  {t.contact.nameLabel}
                </label>
                <input
                  className="form-input"
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={handleFieldChange("name")}
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="contact-email">
                  {t.contact.emailLabel}
                </label>
                <input
                  className="form-input"
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={handleFieldChange("email")}
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="contact-message">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  className="form-textarea"
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={handleFieldChange("message")}
                  required
                />
              </div>
              <button className="btn primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? t.contact.sending : t.contact.submitLabel}
              </button>
              {status.text && (
                <p className={`form-status ${status.type}`} aria-live="polite">
                  {status.text}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div>{t.footer.text}</div>
          <div className="footer-links">
            <a href="/pricing">{t.nav.pricing}</a>
            <a href="/legal">{t.nav.legal}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <div className="legal">{t.footer.legal}</div>
        </div>
      </footer>
    </div>
  );
}
