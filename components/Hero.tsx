import { WHATSAPP_DISPLAY, CONTACT_EMAIL, whatsappLink } from "@/lib/constants";
import GridPattern from "./GridPattern";
import WeldingSparks from "./WeldingSparks";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="topo" className={styles.hero}>
      <GridPattern />
      <div className={styles.fade} />
      <WeldingSparks density={1.3} />

      <div className={styles.grid}>
        <div>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>ATENDIMENTO EM TODA A GRANDE SP</span>
          </div>
          <h1 className={styles.title}>Solda e serralheria com acabamento impecável</h1>
          <div className={styles.arcLine}>
            <div className={styles.arcRun} />
          </div>
          <p className={styles.lead}>
            Rafael Reale atende residências, obras e indústrias na Grande São Paulo. Da grade do
            portão à manutenção da linha de produção, o serviço sai limpo, no prazo e do jeito
            que você combinou.
          </p>
          <div className={styles.actions}>
            <a
              href={whatsappLink("Olá! Gostaria de falar sobre um serviço de solda/serralheria.")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
            >
              <span className={styles.ctaSheen} />
              <span className={styles.ctaLabel}>FALAR NO WHATSAPP</span>
            </a>
            <a href="#servicos" className={styles.secondaryCta}>
              VER SERVIÇOS
            </a>
          </div>
          <div className={styles.contactRow}>
            <span>{WHATSAPP_DISPLAY}</span>
            <span className={styles.dotSep}>·</span>
            <span>{CONTACT_EMAIL}</span>
          </div>
        </div>

        <div className={styles.badgeWrap}>
          <div className={styles.glow} />
          <div className={styles.plate}>
            <div className={styles.brushed} />
            <div className={styles.sheenOverlay} />
            <div className={styles.plateContent}>
              <div className={styles.plateTitle}>RDR</div>
              <div className={styles.plateSubtitle}>
                SOLDAS E <span className={styles.plateRed}>SERVIÇOS</span>
              </div>
              <div className={styles.plateTags}>
                <span>QUALIDADE</span>
                <span className={styles.tagDot} />
                <span>SEGURANÇA</span>
                <span className={styles.tagDot} />
                <span>COMPROMISSO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
