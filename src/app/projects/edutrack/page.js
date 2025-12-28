"use client";

import { useEffect, useState } from "react";

const githubUrl = "https://github.com/franreke05/EduTrack";
const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.example.edutrack";

const content = {
  es: {
    nav: {
      home: "Inicio",
      overview: "Resumen",
      gallery: "Galeria",
      features: "Funciones",
      stack: "Stack",
      architecture: "Arquitectura",
      links: "Enlaces",
      pricing: "Precios",
      legal: "Aviso legal",
    },
    hero: {
      eyebrow: "Caso de estudio",
      title: "EduTrack",
      role: "Android app para seguimiento academico",
      lead:
        "EduTrack ayuda a estudiantes a organizar anios, asignaturas y notas con promedios ponderados en una interfaz clara y rapida.",
      ctaPrimary: "Ver GitHub",
      ctaSecondary: "Funciones clave",
      playBadge: "Disponible en Google Play",
      chips: [
        "Kotlin + Compose",
        "Firebase Auth + Realtime DB",
        "Material 3 UI",
        "Session con DataStore",
      ],
      metaTitle: "Ficha tecnica",
      meta: [
        { label: "Plataforma", value: "Android" },
        { label: "UI", value: "Jetpack Compose + Material 3" },
        { label: "Backend", value: "Firebase Auth + Realtime Database" },
        { label: "Estado", value: "En desarrollo" },
        { label: "Rol", value: "Solo developer" },
      ],
      screens: ["Inicio", "Notas"],
    },
    overview: {
      title: "Resumen",
      cards: [
        {
          title: "Problema",
          text:
            "Gestionar varias asignaturas y periodos suele terminar en hojas de calculo desordenadas y sin visibilidad del promedio real.",
        },
        {
          title: "Solucion",
          text:
            "Una app mobile con flujo guiado que centraliza datos, calcula promedios por periodo y sincroniza con Firebase.",
        },
      ],
    },
    gallery: {
      title: "Galeria",
      lead: "Video demo y capturas clave del flujo.",
      prev: "Anterior",
      next: "Siguiente",
      items: [
        {
          type: "video",
          label: "Video demo",
          caption: "Vista general del flujo principal.",
        },
        {
          type: "image",
          label: "Inicio",
          caption: "Pantalla de anios academicos.",
        },
        {
          type: "image",
          label: "Asignaturas",
          caption: "Gestion de asignaturas y busqueda.",
        },
        {
          type: "image",
          label: "Notas",
          caption: "Detalle de notas por periodo.",
        },
      ],
    },
    features: {
      title: "Funciones clave",
      items: [
        "Anio academico con fechas, descripcion y limite de asignaturas.",
        "Asignaturas con creditos, busqueda y configuracion de periodos.",
        "Notas con porcentaje, periodo y promedio automatico.",
        "Login por email y Google con Firebase Auth.",
        "Sesion persistente con DataStore y sync en tiempo real.",
        "Perfil editable y gestion de cuenta.",
      ],
    },
    architecture: {
      title: "Arquitectura",
      lead:
        "Stack moderno con componentes nativos y datos en tiempo real para simplificar la experiencia del usuario.",
      items: [
        "Jetpack Compose + Navigation Compose para pantallas y flujo.",
        "Firebase Realtime Database como fuente de datos principal.",
        "Session local con DataStore y Flow.",
        "Calculo de promedios ponderados por asignatura y periodo.",
      ],
      dataTitle: "Modelo de datos",
      dataItems: [
        "Usuario",
        "Anio",
        "Asignatura (creditos, periodo)",
        "Notas (porcentaje, fecha, periodo)",
      ],
    },
    stack: {
      title: "Stack",
      lead: "Tecnologias principales usadas en el proyecto.",
      items: [
        "Kotlin",
        "Jetpack Compose",
        "Material 3",
        "Navigation Compose",
        "Firebase Auth",
        "Firebase Realtime Database",
        "Google Sign-In",
        "DataStore",
        "Coil",
      ],
    },
    links: {
      title: "Enlaces",
      lead: "Codigo y acceso al proyecto.",
      primary: "Repositorio en GitHub",
      play: "Ver en Google Play",
      secondary: "Volver al portfolio",
    },
    footer: {
      legal:
        "Aviso legal: la disponibilidad en stores depende de requisitos y aprobaciones externas.",
    },
  },
  en: {
    nav: {
      home: "Home",
      overview: "Overview",
      gallery: "Gallery",
      features: "Features",
      stack: "Stack",
      architecture: "Architecture",
      links: "Links",
      pricing: "Pricing",
      legal: "Legal",
    },
    hero: {
      eyebrow: "Case study",
      title: "EduTrack",
      role: "Android app for academic tracking",
      lead:
        "EduTrack helps students organize years, subjects, and grades with weighted averages in a clean, fast interface.",
      ctaPrimary: "View GitHub",
      ctaSecondary: "Key features",
      playBadge: "Available on Google Play",
      chips: [
        "Kotlin + Compose",
        "Firebase Auth + Realtime DB",
        "Material 3 UI",
        "DataStore session",
      ],
      metaTitle: "Project facts",
      meta: [
        { label: "Platform", value: "Android" },
        { label: "UI", value: "Jetpack Compose + Material 3" },
        { label: "Backend", value: "Firebase Auth + Realtime Database" },
        { label: "Status", value: "In progress" },
        { label: "Role", value: "Solo developer" },
      ],
      screens: ["Home", "Grades"],
    },
    overview: {
      title: "Overview",
      cards: [
        {
          title: "Problem",
          text:
            "Tracking multiple subjects and grading periods often ends in messy spreadsheets with unclear averages.",
        },
        {
          title: "Solution",
          text:
            "A mobile-first flow that centralizes data, calculates averages per period, and syncs with Firebase.",
        },
      ],
    },
    gallery: {
      title: "Gallery",
      lead: "Demo video and key flow screens.",
      prev: "Previous",
      next: "Next",
      items: [
        {
          type: "video",
          label: "Demo video",
          caption: "High-level tour of the main flow.",
        },
        {
          type: "image",
          label: "Home",
          caption: "Academic years dashboard.",
        },
        {
          type: "image",
          label: "Subjects",
          caption: "Subject management and search.",
        },
        {
          type: "image",
          label: "Grades",
          caption: "Grades by period with averages.",
        },
      ],
    },
    features: {
      title: "Key features",
      items: [
        "Academic year with dates, description, and subject limits.",
        "Subjects with credits, search, and period configuration.",
        "Grades with weights, period assignment, and auto averages.",
        "Email and Google sign-in with Firebase Auth.",
        "Persistent session with DataStore and realtime sync.",
        "Editable profile and account management.",
      ],
    },
    architecture: {
      title: "Architecture",
      lead:
        "Modern native stack with realtime data to keep the experience simple and responsive.",
      items: [
        "Jetpack Compose + Navigation Compose for screen flow.",
        "Firebase Realtime Database as the main data source.",
        "Local session stored with DataStore and Flow.",
        "Weighted average calculations by subject and period.",
      ],
      dataTitle: "Data model",
      dataItems: [
        "User",
        "Year",
        "Subject (credits, period)",
        "Grade (weight, date, period)",
      ],
    },
    stack: {
      title: "Stack",
      lead: "Main technologies used in the project.",
      items: [
        "Kotlin",
        "Jetpack Compose",
        "Material 3",
        "Navigation Compose",
        "Firebase Auth",
        "Firebase Realtime Database",
        "Google Sign-In",
        "DataStore",
        "Coil",
      ],
    },
    links: {
      title: "Links",
      lead: "Code and access to the project.",
      primary: "GitHub repository",
      play: "View on Google Play",
      secondary: "Back to portfolio",
    },
    footer: {
      legal:
        "Legal notice: store availability depends on external requirements and approvals.",
    },
  },
};

export default function EduTrackPage() {
  const [lang, setLang] = useState("es");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const locale = navigator.language || "";
    if (locale.toLowerCase().startsWith("en")) {
      setLang("en");
    }
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [lang]);

  const t = content[lang];
  const media = t.gallery.items;
  const totalSlides = media.length;

  const handlePrev = () => {
    setActiveIndex((prev) =>
      totalSlides === 0 ? 0 : (prev - 1 + totalSlides) % totalSlides
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      totalSlides === 0 ? 0 : (prev + 1) % totalSlides
    );
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
            <a href="/">{t.nav.home}</a>
            <a href="#overview">{t.nav.overview}</a>
            <a href="#gallery">{t.nav.gallery}</a>
            <a href="#features">{t.nav.features}</a>
            <a href="#stack">{t.nav.stack}</a>
            <a href="#architecture">{t.nav.architecture}</a>
            <a href="#links">{t.nav.links}</a>
            <a href="/pricing">{t.nav.pricing}</a>
            <a href="/legal">{t.nav.legal}</a>
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
        <section className="section project-hero" id="overview">
          <div className="container project-hero-grid">
            <div className="reveal" style={{ "--delay": "80ms" }}>
              <a className="project-back" href="/">
                {t.nav.home}
              </a>
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1>{t.hero.title}</h1>
              <p className="role">{t.hero.role}</p>
              <p className="lead">{t.hero.lead}</p>
              <div className="cta-row">
                <a
                  className="btn primary"
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.hero.ctaPrimary}
                </a>
                <a className="btn ghost" href="#features">
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
              <a
                className="play-badge"
                href={playStoreUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.hero.playBadge}
              </a>
            </div>

            <div className="project-panel reveal" style={{ "--delay": "160ms" }}>
              <div>
                <h3 className="card-title">{t.hero.metaTitle}</h3>
                <div className="project-meta">
                  {t.hero.meta.map((item) => (
                    <div className="project-meta-row" key={item.label}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
              <div className="project-screens">
                {t.hero.screens.map((label, index) => (
                  <div
                    className={`project-screen${index === 1 ? " alt" : ""}`}
                    key={label}
                  >
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container project-grid">
            {t.overview.cards.map((card) => (
              <article className="card reveal" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="container">
            <div className="reveal" style={{ "--delay": "80ms" }}>
              <h2 className="section-title">{t.gallery.title}</h2>
              <p className="section-lead">{t.gallery.lead}</p>
            </div>
            <div className="carousel reveal" style={{ "--delay": "160ms" }}>
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {media.map((item) => (
                  <div className="carousel-slide" key={item.label}>
                    <div className="carousel-media">
                      {item.type === "image" && item.src ? (
                        <img src={item.src} alt={item.label} />
                      ) : item.type === "video" && item.src ? (
                        <video controls preload="metadata">
                          <source src={item.src} />
                        </video>
                      ) : (
                        <span>{item.label}</span>
                      )}
                    </div>
                    <p className="carousel-caption">{item.caption}</p>
                  </div>
                ))}
              </div>
              <div className="carousel-controls">
                <button
                  className="carousel-button"
                  type="button"
                  onClick={handlePrev}
                  disabled={totalSlides <= 1}
                >
                  {t.gallery.prev}
                </button>
                <div className="carousel-dots">
                  {media.map((dot, index) => (
                    <span
                      className={`carousel-dot${
                        index === activeIndex ? " active" : ""
                      }`}
                      key={dot.label}
                    />
                  ))}
                </div>
                <button
                  className="carousel-button"
                  type="button"
                  onClick={handleNext}
                  disabled={totalSlides <= 1}
                >
                  {t.gallery.next}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <div className="reveal" style={{ "--delay": "80ms" }}>
              <h2 className="section-title">{t.features.title}</h2>
            </div>
            <div className="cards">
              {t.features.items.map((item, index) => (
                <article
                  className="card reveal"
                  style={{ "--delay": `${140 + index * 70}ms` }}
                  key={item}
                >
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="architecture">
          <div className="container split">
            <div className="reveal" style={{ "--delay": "80ms" }}>
              <h2 className="section-title">{t.architecture.title}</h2>
              <p className="section-lead">{t.architecture.lead}</p>
              <div className="list">
                {t.architecture.items.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ "--delay": "160ms" }}>
              <h3 className="section-title">{t.architecture.dataTitle}</h3>
              <div className="card">
                <div className="list">
                  {t.architecture.dataItems.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="stack">
          <div className="container">
            <div className="reveal" style={{ "--delay": "80ms" }}>
              <h2 className="section-title">{t.stack.title}</h2>
              <p className="section-lead">{t.stack.lead}</p>
            </div>
            <div className="stack-grid">
              {t.stack.items.map((item) => (
                <span className="stack-item" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="links">
          <div className="container">
            <div className="contact-card reveal" style={{ "--delay": "80ms" }}>
              <h2 className="section-title">{t.links.title}</h2>
              <p className="section-lead">{t.links.lead}</p>
              <div className="cta-row">
                <a
                  className="btn primary"
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.links.primary}
                </a>
                <a
                  className="btn ghost"
                  href={playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.links.play}
                </a>
                <a className="btn ghost" href="/">
                  {t.links.secondary}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <a href="/">{t.nav.home}</a>
            <a href="/pricing">{t.nav.pricing}</a>
            <a href="/legal">{t.nav.legal}</a>
          </div>
          <div className="legal">{t.footer.legal}</div>
        </div>
      </footer>
    </div>
  );
}
