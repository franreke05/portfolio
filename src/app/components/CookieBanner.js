"use client";

import { useEffect, useState } from "react";

const COOKIE_NAME = "fr_cookie_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

const copy = {
  es: {
    title: "Cookies",
    text:
      "Usamos cookies tecnicas para que el sitio funcione y una cookie para recordar tu preferencia.",
    accept: "Aceptar",
    reject: "Rechazar",
    details: "Ver politica",
  },
  en: {
    title: "Cookies",
    text:
      "We use technical cookies so the site works and one cookie to remember your preference.",
    accept: "Accept",
    reject: "Reject",
    details: "View policy",
  },
};

function getCookieValue(name) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(^| )${name}=([^;]+)`)
  );
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookieValue(name, value) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const locale = navigator.language || "";
    if (locale.toLowerCase().startsWith("en")) {
      setLang("en");
    }
  }, []);

  useEffect(() => {
    const consent = getCookieValue(COOKIE_NAME);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (value) => {
    setCookieValue(COOKIE_NAME, value);
    setVisible(false);
  };

  if (!visible) return null;

  const t = copy[lang];

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite">
      <div className="cookie-title">{t.title}</div>
      <p className="cookie-text">{t.text}</p>
      <div className="cookie-actions">
        <a className="cookie-link" href="/legal#cookies">
          {t.details}
        </a>
        <button
          className="cookie-button ghost"
          type="button"
          onClick={() => handleChoice("declined")}
        >
          {t.reject}
        </button>
        <button
          className="cookie-button primary"
          type="button"
          onClick={() => handleChoice("accepted")}
        >
          {t.accept}
        </button>
      </div>
    </div>
  );
}
