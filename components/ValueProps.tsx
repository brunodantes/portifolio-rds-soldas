import GridPattern from "./GridPattern";
import styles from "./ValueProps.module.css";

const ITEMS = [
  {
    title: "QUALIDADE",
    text: "Executamos cada projeto com atenção aos detalhes e acabamento impecável.",
  },
  {
    title: "SEGURANÇA",
    text: "Trabalhamos com responsabilidade, seguindo normas e boas práticas.",
  },
  {
    title: "COMPROMISSO",
    text: "Cumprimos prazos e entregamos soluções que superam expectativas.",
  },
  {
    title: "EXPERIÊNCIA",
    text: "Profissionalismo e know-how para garantir resultados sólidos e duradouros.",
  },
];

export default function ValueProps() {
  return (
    <section className={styles.section}>
      <GridPattern />
      <div className={styles.grid}>
        {ITEMS.map((item) => (
          <div key={item.title} className={styles.card}>
            <div className={styles.cardTitle}>{item.title}</div>
            <p className={styles.cardText}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
