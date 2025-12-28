"use client";

import { useEffect, useState } from "react";

const content = {
  es: {
    nav: {
      home: "Inicio",
      work: "Proyectos",
      contact: "Contacto",
      legal: "Aviso legal",
    },
    hero: {
      eyebrow: "Tarifas",
      title: "Precios para apps mobile",
      lead:
        "Pensado para startups, pymes y comercios que necesitan una app de contenido o producto.",
      rangeNote: "Rangos orientativos segun alcance y complejidad.",
      rangeTooltip:
        "Los rangos dependen de pantallas, integraciones, QA y revisiones en stores. IVA no incluido.",
    },
    plans: [
      {
        name: "Basica",
        price: "450-700 EUR",
        subtitle: "MVP interno para comercios",
        ideal: "Ideal para retail y validacion rapida.",
        monthly: "Hosting gestionado opcional: 15 EUR/mes.",
        tag: "Retail",
        items: [
          "Sideload interno (sin stores).",
          "APK firmada + checklist de instalacion.",
          "1 cambio funcional mayor.",
          "2 ajustes de UI o colores.",
        ],
      },
      {
        name: "Standard",
        price: "900-1500 EUR",
        subtitle: "Producto base para startups",
        ideal: "Ideal para empresas medianas y apps de contenido.",
        monthly: "1 mes de hosting incluido, luego 18 EUR/mes.",
        tag: "Recomendado",
        featured: true,
        items: [
          "Login funcional (auth basica).",
          "Publicacion en stores opcional.",
          "Servidor propio opcional: 150 EUR.",
          "2 cambios funcionales mayores.",
          "4 ajustes menores de UI.",
        ],
      },
      {
        name: "Premium",
        price: "1700-3000 EUR",
        subtitle: "Lanzamiento completo",
        ideal: "Ideal para apps comerciales con roadmap.",
        monthly: "6 meses de hosting incluidos, luego 25 EUR/mes.",
        tag: "Launch",
        items: [
          "Release asegurado en App Store y Google Play.",
          "Login + registro incluidos.",
          "Servidor propio opcional: 150 EUR.",
          "Landing web opcional: +200 EUR.",
          "4 cambios funcionales + hasta 10 ajustes menores.",
          "Actualizaciones semanales.",
        ],
      },
      {
        name: "Enterprise",
        price: "A medida",
        subtitle: "Producto custom",
        ideal: "Ideal para integraciones y escalado.",
        monthly: "Discovery tecnico y presupuesto personalizado.",
        tag: "Custom",
        items: [
          "Arquitectura, integraciones y compliance a medida.",
          "Equipo extendido y roadmap por fases.",
        ],
      },
    ],
    terms: {
      title: "Condiciones de pago",
      lead:
        "Puedes elegir entre pago por hitos o por plazo estimado, segun el modelo del proyecto.",
      tooltip:
        "El calendario se define en la propuesta. Cambios fuera de alcance se presupuestan aparte.",
      options: [
        {
          title: "Pago por hitos",
          text: "Para proyectos con roadmap por fases.",
          split: "40% inicio / 30% intermedio / 30% entrega",
        },
        {
          title: "Pago por plazo estimado",
          text: "Para entregas con tiempo estimado cerrado.",
          split: "50% inicio / 50% entrega final",
        },
      ],
    },
    table: {
      title: "Comparativa rapida",
      lead: "Resumen de lo incluido en cada plan.",
      feature: "Incluye",
      featuredIndex: 1,
      columns: ["Basica", "Standard", "Premium", "Enterprise"],
      rows: [
        {
          label: "Publicacion en stores",
          values: ["No", "Opcional", "Incluido", "A medida"],
        },
        {
          label: "Login / registro",
          values: ["No", "Login", "Login + registro", "A medida"],
        },
        {
          label: "Hosting incluido",
          values: ["Opcional", "1 mes", "6 meses", "A medida"],
        },
        {
          label: "Servidor propio",
          values: ["Opcional", "Opcional", "Opcional", "A medida"],
        },
        {
          label: "Cambios funcionales",
          values: ["1", "2", "4", "A medida"],
        },
        {
          label: "Cambios menores",
          values: ["2", "4", "10", "A medida"],
        },
        {
          label: "Actualizaciones",
          values: ["No", "Mensual", "Semanal", "A medida"],
        },
        {
          label: "Landing web",
          values: ["No", "Opcional", "+200 EUR", "A medida"],
        },
      ],
    },
    cta: {
      title: "Hablemos de tu app",
      lead: "Elige el canal que prefieras y te respondo rapido.",
      primary: "Solicitar propuesta",
      secondary: "Ver proyectos",
      options: [
        { label: "Email", href: "mailto:franreke606@gmail.com" },
        { label: "WhatsApp", href: "https://wa.me/34642957572" },
        { label: "Llamar", href: "tel:642957572" },
        { label: "Formulario", href: "/#contact" },
      ],
    },
    footer: {
      legal:
        "Aviso legal: precios orientativos sujetos a cambios segun alcance, integraciones y plazos.",
    },
  },
  en: {
    nav: {
      home: "Home",
      work: "Work",
      contact: "Contact",
      legal: "Legal",
    },
    hero: {
      eyebrow: "Pricing",
      title: "Mobile app pricing",
      lead:
        "Designed for startups, SMBs, and retail teams that need a content or product app.",
      rangeNote: "Indicative ranges based on scope and complexity.",
      rangeTooltip:
        "Ranges depend on screens, integrations, QA, and store reviews. VAT not included.",
    },
    plans: [
      {
        name: "Basic",
        price: "450-700 EUR",
        subtitle: "Internal MVP for retail",
        ideal: "Ideal for retail and fast validation.",
        monthly: "Managed hosting optional: 15 EUR/month.",
        tag: "Retail",
        items: [
          "Internal sideload (no stores).",
          "Signed APK + install checklist.",
          "1 major functional change.",
          "2 UI or color adjustments.",
        ],
      },
      {
        name: "Standard",
        price: "900-1500 EUR",
        subtitle: "Core product for startups",
        ideal: "Ideal for mid-size teams and content apps.",
        monthly: "1 month of hosting included, then 18 EUR/month.",
        tag: "Recommended",
        featured: true,
        items: [
          "Functional login (basic auth).",
          "Optional store publishing.",
          "Bring your own server: 150 EUR.",
          "2 major functional changes.",
          "4 minor UI adjustments.",
        ],
      },
      {
        name: "Premium",
        price: "1700-3000 EUR",
        subtitle: "Full launch",
        ideal: "Ideal for commercial apps with a roadmap.",
        monthly: "6 months of hosting included, then 25 EUR/month.",
        tag: "Launch",
        items: [
          "Guaranteed App Store and Google Play release.",
          "Login + sign up included.",
          "Bring your own server: 150 EUR.",
          "Optional landing page: +200 EUR.",
          "4 major changes + up to 10 minor tweaks.",
          "Weekly progress updates.",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        subtitle: "Tailored delivery",
        ideal: "Ideal for integrations and scale.",
        monthly: "Technical discovery and custom quote.",
        tag: "Custom",
        items: [
          "Architecture, integrations, and compliance as needed.",
          "Extended team and phased roadmap.",
        ],
      },
    ],
    terms: {
      title: "Payment terms",
      lead:
        "Choose between milestone-based payments or fixed timeline delivery.",
      tooltip:
        "The schedule is defined in the proposal. Out-of-scope changes are quoted separately.",
      options: [
        {
          title: "Milestone payments",
          text: "Best for phased roadmaps.",
          split: "40% start / 30% mid / 30% delivery",
        },
        {
          title: "Fixed timeline",
          text: "Best for a defined delivery window.",
          split: "50% start / 50% final delivery",
        },
      ],
    },
    table: {
      title: "Quick comparison",
      lead: "What is included in each plan.",
      feature: "Includes",
      featuredIndex: 1,
      columns: ["Basic", "Standard", "Premium", "Enterprise"],
      rows: [
        {
          label: "Store publishing",
          values: ["No", "Optional", "Included", "Custom"],
        },
        {
          label: "Login / sign up",
          values: ["No", "Login", "Login + sign up", "Custom"],
        },
        {
          label: "Hosting included",
          values: ["Optional", "1 month", "6 months", "Custom"],
        },
        {
          label: "Bring your own server",
          values: ["Optional", "Optional", "Optional", "Custom"],
        },
        {
          label: "Major changes",
          values: ["1", "2", "4", "Custom"],
        },
        {
          label: "Minor tweaks",
          values: ["2", "4", "10", "Custom"],
        },
        {
          label: "Updates",
          values: ["No", "Monthly", "Weekly", "Custom"],
        },
        {
          label: "Landing page",
          values: ["No", "Optional", "+200 EUR", "Custom"],
        },
      ],
    },
    cta: {
      title: "Lets talk about your app",
      lead: "Pick your preferred channel and I will reply fast.",
      primary: "Request a proposal",
      secondary: "View work",
      options: [
        { label: "Email", href: "mailto:franreke606@gmail.com" },
        { label: "WhatsApp", href: "https://wa.me/34642957572" },
        { label: "Call", href: "tel:642957572" },
        { label: "Form", href: "/#contact" },
      ],
    },
    footer: {
      legal:
        "Legal notice: pricing is indicative and may change based on scope, integrations, and timelines.",
    },
  },
};

export default function PricingPage() {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const locale = navigator.language || "";
    if (locale.toLowerCase().startsWith("en")) {
      setLang("en");
    }
  }, []);

  const t = content[lang];

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
            <a href="/#work">{t.nav.work}</a>
            <a href="/#contact">{t.nav.contact}</a>
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
        <section className="section">
          <div className="container pricing-hero">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="section-lead">{t.hero.lead}</p>
            <div className="pricing-note">
              <span>{t.hero.rangeNote}</span>
              <span className="tooltip" data-tooltip={t.hero.rangeTooltip}>
                i
              </span>
            </div>
          </div>
          <div className="container pricing-grid">
            {t.plans.map((plan) => (
              <article
                className={`pricing-card${plan.featured ? " featured" : ""}`}
                key={plan.name}
              >
                <div className="pricing-summary">
                  <div className="pricing-head">
                    <h3>{plan.name}</h3>
                    <span className="pricing-tag">{plan.tag}</span>
                  </div>
                  <div className="pricing-price">{plan.price}</div>
                  <p className="pricing-sub">{plan.subtitle}</p>
                  <p className="pricing-ideal">{plan.ideal}</p>
                  <p className="pricing-monthly">{plan.monthly}</p>
                </div>
                <div className="pricing-details">
                  <ul className="pricing-list">
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-title-row">
              <h2 className="section-title">{t.terms.title}</h2>
              <span className="tooltip" data-tooltip={t.terms.tooltip}>
                i
              </span>
            </div>
            <p className="section-lead">{t.terms.lead}</p>
            <div className="terms-grid">
              {t.terms.options.map((option) => (
                <article className="terms-card" key={option.title}>
                  <h3>{option.title}</h3>
                  <p className="terms-text">{option.text}</p>
                  <div className="terms-split">{option.split}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">{t.table.title}</h2>
            <p className="section-lead">{t.table.lead}</p>
            <div className="table-wrap">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>{t.table.feature}</th>
                    {t.table.columns.map((column, index) => (
                      <th
                        key={column}
                        className={
                          index === t.table.featuredIndex ? "featured" : ""
                        }
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.table.rows.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      {row.values.map((value, index) => (
                        <td
                          key={value}
                          className={
                            index === t.table.featuredIndex ? "featured" : ""
                          }
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container pricing-cta">
            <div>
              <h2 className="section-title">{t.cta.title}</h2>
              <p className="section-lead">{t.cta.lead}</p>
              <div className="pricing-actions">
                {t.cta.options.map((option) => (
                  <a className="contact-option" href={option.href} key={option.label}>
                    {option.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="cta-row">
              <a className="btn primary" href="mailto:franreke606@gmail.com">
                {t.cta.primary}
              </a>
              <a className="btn ghost" href="/#work">
                {t.cta.secondary}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <a href="/">{t.nav.home}</a>
            <a href="/#work">{t.nav.work}</a>
            <a href="/legal">{t.nav.legal}</a>
            <a href="/#contact">{t.nav.contact}</a>
          </div>
          <div className="legal">{t.footer.legal}</div>
        </div>
      </footer>
    </div>
  );
}
