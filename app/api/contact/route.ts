import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  whatsapp: string;
  email: string;
  location: string;
  message: string;
};

function isValidPayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return typeof b.name === "string" && b.name.trim().length > 0 && typeof b.whatsapp === "string" && b.whatsapp.trim().length > 0;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Corpo da requisição inválido." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { ok: false, error: "Preencha ao menos nome e WhatsApp." },
      { status: 400 },
    );
  }

  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;

  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    console.error("Contact form: Resend env vars not configured.");
    return NextResponse.json(
      { ok: false, error: "Envio de e-mail não configurado. Tente pelo WhatsApp." },
      { status: 500 },
    );
  }

  const resend = new Resend(RESEND_API_KEY);
  const { name, whatsapp, email, location, message } = body;

  try {
    const { error } = await resend.emails.send({
      from: `Site RDR Soldas <${CONTACT_FROM_EMAIL}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email || undefined,
      subject: `Novo pedido de orçamento — ${name}`,
      text: [
        `Nome: ${name}`,
        `WhatsApp: ${whatsapp}`,
        `E-mail: ${email || "não informado"}`,
        `Bairro/Cidade: ${location || "não informado"}`,
        "",
        "O que precisa:",
        message || "não informado",
      ].join("\n"),
    });

    if (error) {
      console.error("Contact form: failed to send email.", error);
      return NextResponse.json(
        { ok: false, error: "Falha ao enviar. Tente novamente ou fale pelo WhatsApp." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form: failed to send email.", error);
    return NextResponse.json(
      { ok: false, error: "Falha ao enviar. Tente novamente ou fale pelo WhatsApp." },
      { status: 502 },
    );
  }
}
