"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/constants";
import GridPattern from "./GridPattern";
import styles from "./Contact.module.css";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      whatsapp: String(data.get("whatsapp") || ""),
      email: String(data.get("email") || ""),
      location: String(data.get("location") || ""),
      message: String(data.get("message") || ""),
    };

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || !result.ok) {
        throw new Error(result?.error || "Não foi possível enviar. Tente novamente.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Não foi possível enviar. Tente novamente.");
    }
  }

  return (
    <section id="contato" className={styles.section}>
      <GridPattern />

      <div className={styles.grid}>
        <div>
          <div className={styles.eyebrow}>CONTATO</div>
          <h2 className={styles.heading}>Conta o que você precisa</h2>
          <p className={styles.lead}>
            O jeito mais rápido é o WhatsApp: manda uma foto e a medida aproximada que já dá para
            adiantar o orçamento.
          </p>
          <a
            href={whatsappLink("Olá! Gostaria de pedir um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappCta}
          >
            <span>WHATSAPP · {WHATSAPP_DISPLAY}</span>
          </a>

          <div className={styles.infoGrid}>
            <div>
              <div className={styles.infoLabel}>E-MAIL</div>
              <a href={`mailto:${CONTACT_EMAIL}`} className={styles.infoValue}>
                {CONTACT_EMAIL}
              </a>
            </div>
            <div>
              <div className={styles.infoLabel}>ATENDIMENTO</div>
              <div className={styles.infoValue}>Seg a sex, 8h às 18h · Sáb, 8h às 12h</div>
            </div>
            <div>
              <div className={styles.infoLabel}>ÁREA DE ATENDIMENTO</div>
              <div className={styles.infoValue}>São Paulo capital e Grande São Paulo</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formTitle}>Peça seu orçamento</div>
          <p className={styles.formLead}>Retornamos em até um dia útil.</p>

          <div className={styles.fields}>
            <label className={`${styles.label} ${styles.spanTwo}`}>
              <span>NOME</span>
              <input type="text" name="name" required placeholder="Seu nome" className={styles.input} />
            </label>
            <label className={styles.label}>
              <span>WHATSAPP</span>
              <input
                type="tel"
                name="whatsapp"
                required
                placeholder="(11) 90000-0000"
                className={styles.input}
              />
            </label>
            <label className={styles.label}>
              <span>E-MAIL</span>
              <input type="email" name="email" placeholder="voce@email.com" className={styles.input} />
            </label>
            <label className={`${styles.label} ${styles.spanTwo}`}>
              <span>BAIRRO OU CIDADE</span>
              <input
                type="text"
                name="location"
                placeholder="Ex: Vila Prudente, São Paulo"
                className={styles.input}
              />
            </label>
            <label className={`${styles.label} ${styles.spanTwo}`}>
              <span>O QUE VOCÊ PRECISA</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Descreva o serviço, medidas aproximadas e prazo desejado"
                className={styles.textarea}
              />
            </label>
          </div>

          <button type="submit" disabled={status === "sending"} className={styles.submit}>
            <span className={styles.submitSheen} />
            <span className={styles.submitLabel}>
              {status === "sending" ? "ENVIANDO..." : "ENVIAR PEDIDO"}
            </span>
          </button>

          <div className={styles.status}>
            {status === "sent" && "Pedido enviado. Retornamos em até um dia útil."}
            {status === "error" && errorMessage}
          </div>
        </form>
      </div>
    </section>
  );
}
