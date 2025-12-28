import { promises as fs } from "fs";
import path from "path";

export const metadata = {
  title: "Mensajes | Portfolio",
  description: "Mensajes recibidos desde el formulario de contacto.",
};

async function readMessages() {
  const filePath = path.join(process.cwd(), "data", "messages.json");
  try {
    const content = await fs.readFile(filePath, "utf8");
    const parsed = content ? JSON.parse(content) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

export default async function MessagesPage() {
  const messages = await readMessages();

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
            <a href="/">Portfolio</a>
            <a href="/projects/edutrack">EduTrack</a>
            <a href="/legal">Legal</a>
          </nav>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <h1 className="section-title">Mensajes recibidos</h1>
          <p className="section-lead">
            Este listado lee los mensajes guardados en `data/messages.json`.
          </p>

          {messages.length === 0 ? (
            <div className="card">
              <p>No hay mensajes aun.</p>
            </div>
          ) : (
            <div className="cards">
              {messages.map((item) => (
                <article className="card" key={item.id}>
                  <h3>{item.name}</h3>
                  <p>{item.message}</p>
                  <div className="message-meta">
                    <div>
                      <span>Email:</span> {item.email}
                    </div>
                    <div>
                      <span>Fecha:</span> {item.createdAt}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <a href="/">Portfolio</a>
            <a href="/legal">Legal</a>
          </div>
          <div className="legal">
            Aviso legal: los mensajes son privados y no se comparten con terceros.
          </div>
        </div>
      </footer>
    </div>
  );
}
