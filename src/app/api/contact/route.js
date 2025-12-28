import { promises as fs } from "fs";
import path from "path";

export async function POST(request) {
  try {
    const body = await request.json();
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const entry = {
      id: `${Date.now()}`,
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "messages.json");

    await fs.mkdir(dataDir, { recursive: true });

    let current = [];
    try {
      const existing = await fs.readFile(filePath, "utf8");
      current = existing ? JSON.parse(existing) : [];
      if (!Array.isArray(current)) {
        current = [];
      }
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }

    current.unshift(entry);
    await fs.writeFile(filePath, JSON.stringify(current, null, 2), "utf8");

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
