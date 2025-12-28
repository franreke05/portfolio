"use client";

import { useEffect, useState } from "react";

const content = {
  es: {
    nav: {
      home: "Inicio",
      work: "Proyectos",
      pricing: "Precios",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Aviso legal",
      title: "Aviso legal y politicas",
      lead:
        "Textos legales basicos para este sitio conforme a LSSI-CE y RGPD. Revisa y adapta estos puntos a tu caso concreto.",
    },
    sections: [
      {
        title: "Titular del sitio",
        items: [
          "Titular: Francisco Requena",
          "Ubicacion: Almeria, Spain",
          "Email: franreke606@gmail.com",
          "Actividad: desarrollo de aplicaciones mobile y servicios digitales.",
        ],
      },
      {
        title: "Condiciones de uso",
        items: [
          "El acceso al sitio es libre y gratuito, salvo servicios contratados.",
          "El usuario se compromete a un uso diligente y a no realizar acciones ilicitas.",
          "El contenido puede cambiar sin previo aviso por mantenimiento o mejoras.",
        ],
      },
      {
        title: "Propiedad intelectual",
        items: [
          "Los textos, diseno y codigo son titularidad del responsable, salvo que se indique lo contrario.",
          "No se permite la reproduccion total o parcial sin autorizacion expresa.",
        ],
      },
      {
        title: "Limitacion de responsabilidad",
        items: [
          "No se garantiza la ausencia de errores o interrupciones del servicio.",
          "No se asume responsabilidad por el uso indebido del sitio o de sus contenidos.",
          "Los enlaces externos son responsabilidad de sus propios titulares.",
        ],
      },
      {
        title: "Politica de privacidad (RGPD)",
        items: [
          "Responsable del tratamiento: Francisco Requena.",
          "Finalidad: gestionar consultas enviadas a traves del formulario.",
          "Base legal: consentimiento del usuario.",
          "Conservacion: el tiempo necesario para atender la solicitud.",
          "Derechos: acceso, rectificacion, supresion, oposicion, limitacion y portabilidad.",
          "Ejercicio de derechos: contactar por email en franreke606@gmail.com.",
        ],
      },
      {
        title: "Politica de cookies",
        id: "cookies",
        items: [
          "Este sitio utiliza cookies tecnicas necesarias para su funcionamiento.",
          "Se usa una cookie para guardar tu consentimiento.",
          "Si se activan cookies analiticas o de terceros, se solicitara consentimiento.",
          "Puedes configurar o bloquear cookies desde tu navegador.",
        ],
      },
      {
        title: "Contacto",
        items: [
          "Email: franreke606@gmail.com",
          "Ubicacion: Almeria, Spain",
        ],
      },
    ],
    footer: {
      legal:
        "Aviso: este contenido es informativo y no sustituye el asesoramiento legal profesional.",
    },
  },
  en: {
    nav: {
      home: "Home",
      work: "Work",
      pricing: "Pricing",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Legal",
      title: "Legal notice and policies",
      lead:
        "Basic legal texts for this site under LSSI-CE and GDPR. Review and adapt to your specific case.",
    },
    sections: [
      {
        title: "Site owner",
        items: [
          "Owner: Francisco Requena",
          "Location: Almeria, Spain",
          "Email: franreke606@gmail.com",
          "Activity: mobile app development and digital services.",
        ],
      },
      {
        title: "Terms of use",
        items: [
          "Access is free, except for contracted services.",
          "Users must use the site responsibly and avoid unlawful actions.",
          "Content may change without notice due to maintenance or updates.",
        ],
      },
      {
        title: "Intellectual property",
        items: [
          "Texts, design, and code belong to the owner unless stated otherwise.",
          "Reproduction is not allowed without explicit permission.",
        ],
      },
      {
        title: "Limitation of liability",
        items: [
          "No guarantee of error-free or uninterrupted service.",
          "No liability for misuse of the site or its content.",
          "External links are the responsibility of their respective owners.",
        ],
      },
      {
        title: "Privacy policy (GDPR)",
        items: [
          "Data controller: Francisco Requena.",
          "Purpose: handle requests sent via the contact form.",
          "Legal basis: user consent.",
          "Retention: only as long as needed to answer the request.",
          "Rights: access, rectification, deletion, objection, restriction, portability.",
          "Exercise rights: contact via email at franreke606@gmail.com.",
        ],
      },
      {
        title: "Cookie policy",
        id: "cookies",
        items: [
          "This site uses technical cookies required for proper operation.",
          "A cookie is used to remember your consent choice.",
          "If analytics or third-party cookies are enabled, consent will be requested.",
          "You can configure or block cookies in your browser.",
        ],
      },
      {
        title: "Contact",
        items: ["Email: franreke606@gmail.com", "Location: Almeria, Spain"],
      },
    ],
    footer: {
      legal:
        "Notice: this content is informational and not a substitute for legal advice.",
    },
  },
};

export default function LegalPage() {
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
            <a href="/pricing">{t.nav.pricing}</a>
            <a href="/#contact">{t.nav.contact}</a>
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

      <main className="section">
        <div className="container">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="section-lead">{t.hero.lead}</p>
        </div>
        <div className="container legal-grid">
          {t.sections.map((section) => (
            <article
              className="legal-card"
              key={section.title}
              id={section.id}
            >
              <h3>{section.title}</h3>
              <ul className="legal-list">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <a href="/">{t.nav.home}</a>
            <a href="/pricing">{t.nav.pricing}</a>
            <a href="/#contact">{t.nav.contact}</a>
          </div>
          <div className="legal">{t.footer.legal}</div>
        </div>
      </footer>
    </div>
  );
}
