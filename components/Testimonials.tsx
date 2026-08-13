import GridPattern from "./GridPattern";
import styles from "./Testimonials.module.css";

type Testimonial = {
  quote?: string;
  name?: string;
  location?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Chamei pra fazer o portão de casa e ficou impecável. Pontual, caprichoso e com acabamento de primeira.",
    name: "Seu Pedro",
    location: "Vila Prudente, São Paulo",
  },
  {
    quote:
      "Precisava de um corrimão pra escada externa e o resultado superou o esperado. Peça bem alinhada e resistente.",
    name: "Seu Pedro",
    location: "Itaquera, São Paulo",
  },
  {
    quote:
      "Contratamos pra manutenção de uma estrutura na fábrica e não paramos a produção nenhum dia.",
    name: "Seu Pedro",
    location: "Guarulhos, SP",
  },
  {
    quote:
      "As grades de proteção ficaram exatamente como o combinado, com um acabamento que valorizou a fachada.",
    name: "Seu Pedro",
    location: "Mooca, São Paulo",
  },
  {
    quote:
      "Precisava de um reparo emergencial em uma bancada de inox e fui atendido no mesmo dia. Rápido e com preço justo.",
    name: "Seu Pedro",
    location: "Santo André, SP",
  },
  {
    quote:
      "O mezanino ficou muito bem estruturado e o time explicou cada etapa do projeto antes de começar.",
    name: "Seu Pedro",
    location: "São Caetano do Sul, SP",
  },
];

function QuoteIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.5 10.5h-3v-1a3 3 0 0 1 3-3h.5V4.5H7A5.5 5.5 0 0 0 1.5 10v6h6v-5.5Zm11 0h-3v-1a3 3 0 0 1 3-3h.5V4.5H18A5.5 5.5 0 0 0 12.5 10v6h6v-5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarRow() {
  return (
    <div className={styles.stars} aria-label="Avaliação 5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.5l2.94 6.36 6.93.66-5.24 4.7 1.55 6.88L12 17.98l-6.18 3.12 1.55-6.88-5.24-4.7 6.93-.66L12 2.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className={styles.section}>
      <GridPattern />
      <div className={styles.inner}>
        <div className={styles.headingRow}>
          <div>
            <div className={styles.eyebrow}>DEPOIMENTOS</div>
            <h2 className={styles.heading}>O que dizem os clientes</h2>
          </div>
          <p className={styles.headingText}>
            Depoimentos de clientes que já fecharam serviço com a gente.
          </p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((item, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.quoteIcon}>
                <QuoteIcon />
              </span>
              <StarRow />
              {item.quote ? (
                <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
              ) : (
                <p className={styles.quotePlaceholder}>Depoimento do cliente {i + 1}</p>
              )}
              <div className={styles.author}>
                <div className={styles.authorName}>{item.name ?? "Nome do cliente"}</div>
                <div className={styles.authorLocation}>{item.location ?? "Bairro, cidade"}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
