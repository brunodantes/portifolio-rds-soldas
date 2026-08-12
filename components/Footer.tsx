import { CONTACT_EMAIL, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/constants";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.brandRow}>
            <div className={styles.logo}>
              <span>RDR</span>
            </div>
            <div>
              <div className={styles.brandTitle}>SOLDAS E SERVIÇOS</div>
              <div className={styles.brandSubtitle}>Rafael Reale</div>
            </div>
          </div>
          <p className={styles.tagline}>Qualidade, segurança e compromisso em cada solda.</p>
        </div>

        <div>
          <div className={styles.colLabel}>CONTATO</div>
          <div className={styles.colLinks}>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </div>

        <div>
          <div className={styles.colLabel}>HORÁRIO</div>
          <div className={styles.colLinks}>
            <span>Seg a sex · 8h às 18h</span>
            <span>Sábado · 8h às 12h</span>
          </div>
        </div>

        <div>
          <div className={styles.colLabel}>EMPRESA</div>
          <div className={styles.colLinks}>
            <span>CNPJ 00.000.000/0001-00</span>
            <span className={styles.provisional}>dado provisório</span>
          </div>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <span>© {new Date().getFullYear()} RDR Soldas e Serviços</span>
        <span>São Paulo · SP</span>
      </div>
    </footer>
  );
}
