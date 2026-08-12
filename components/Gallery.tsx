import styles from "./Gallery.module.css";

const SLOTS = [
  { label: "Foto de trabalho — destaque", span: "large" },
  { label: "Foto", span: "normal" },
  { label: "Foto", span: "normal" },
  { label: "Foto panorâmica", span: "wide" },
  { label: "Foto", span: "normal" },
  { label: "Foto vertical", span: "tall" },
  { label: "Foto", span: "normal" },
  { label: "Foto", span: "normal" },
  { label: "Foto", span: "normal" },
] as const;

export default function Gallery() {
  return (
    <section id="galeria" className={styles.section}>
      <div className={styles.texture} />
      <div className={styles.inner}>
        <div className={styles.headingRow}>
          <div>
            <div className={styles.eyebrow}>TRABALHOS</div>
            <h2 className={styles.heading}>Serviço entregue, cliente satisfeito</h2>
          </div>
          <p className={styles.headingText}>
            Em breve, fotos reais dos nossos trabalhos por aqui.
          </p>
        </div>
        <div className={styles.grid}>
          {SLOTS.map((slot, i) => (
            <div key={i} className={`${styles.slot} ${styles[slot.span]}`}>
              <span className={styles.slotIcon} aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7h2.5l1.2-2h8.6l1.2 2H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="13" r="3.4" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </span>
              <span className={styles.slotLabel}>{slot.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
