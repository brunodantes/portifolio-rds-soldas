import Embers from "./Embers";
import styles from "./Process.module.css";

const STEPS = [
  {
    n: "01",
    title: "Contato",
    text: "Você manda mensagem contando o que precisa. Foto ajuda bastante.",
  },
  {
    n: "02",
    title: "Visita técnica",
    text: "Medimos no local e conferimos as condições de acesso e instalação.",
  },
  {
    n: "03",
    title: "Orçamento",
    text: "Proposta escrita com escopo, material, prazo e valor fechado.",
  },
  {
    n: "04",
    title: "Execução",
    text: "Fabricação e montagem com proteção do ambiente e da sua rotina.",
  },
  {
    n: "05",
    title: "Entrega e revisão",
    text: "Conferimos junto com você, ajustamos o que for preciso e limpamos a área.",
  },
];

const COMMITMENTS = [
  {
    title: "Normas e boas práticas",
    text: "Processo e material escolhidos conforme a aplicação, não pelo que estiver mais barato.",
  },
  {
    title: "EPI e segurança no local",
    text: "Proteção do soldador e isolamento da área para não colocar ninguém em risco.",
  },
  {
    title: "Acabamento e limpeza",
    text: "Cordão esmerilhado, tratamento anticorrosivo e local entregue limpo.",
  },
  {
    title: "Garantia no serviço",
    text: "Deu problema no que soldamos, a gente volta e resolve.",
  },
];

export default function Process() {
  return (
    <section id="padrao" className={styles.section}>
      <Embers preset={1} />
      <div className={styles.inner}>
        <div className={styles.intro}>
          <div className={styles.eyebrow}>PADRÃO DE TRABALHO</div>
          <h2 className={styles.heading}>Do primeiro contato à peça entregue</h2>
          <p className={styles.leadText}>
            Você sabe o que esperar em cada etapa, sem surpresa no preço nem no prazo.
          </p>
        </div>

        <div className={styles.steps}>
          {STEPS.map((step) => (
            <div key={step.n} className={styles.step}>
              <div className={styles.stepNumber}>{step.n}</div>
              <div className={styles.stepTitle}>{step.title}</div>
              <p className={styles.stepText}>{step.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.commitments}>
          <div>
            <h3 className={styles.commitmentsHeading}>Compromissos técnicos</h3>
            <p className={styles.commitmentsLead}>
              O que vale para todo serviço, do portão residencial ao reparo em linha de produção.
            </p>
          </div>
          <div className={styles.commitmentsGrid}>
            {COMMITMENTS.map((item) => (
              <div key={item.title}>
                <div className={styles.commitmentRule} />
                <div className={styles.commitmentTitle}>{item.title}</div>
                <p className={styles.commitmentText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
