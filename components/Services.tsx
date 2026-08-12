import styles from "./Services.module.css";

const FEATURED = [
  {
    title: "Estruturas metálicas",
    text: "Mezaninos, coberturas, escadas e reforços estruturais, do desenho ao chumbamento em obra.",
  },
  {
    title: "Portões e grades",
    text: "Portões basculantes, deslizantes, grades de proteção e portas de serviço sob medida.",
  },
  {
    title: "Corrimãos e guarda-corpos",
    text: "Peças em aço e inox para escadas, sacadas e rampas, com fixação segura e acabamento polido.",
  },
  {
    title: "Solda em inox",
    text: "Bancadas, tubulações e peças que exigem cordão limpo e resistência à corrosão.",
  },
];

const STANDARD = [
  {
    title: "Solda MIG/MAG",
    text: "Produção rápida em aço carbono, ideal para estruturas e reparos de volume.",
  },
  {
    title: "Solda TIG",
    text: "Precisão para peças finas e trabalhos onde o cordão fica aparente.",
  },
  {
    title: "Solda em alumínio",
    text: "Reparos e montagens em alumínio com controle de calor e empenamento.",
  },
  {
    title: "Manutenção industrial",
    text: "Recuperação de equipamentos e estruturas sem parar sua produção mais que o necessário.",
  },
  {
    title: "Serralheria em geral",
    text: "Grades, tampas, suportes, carrinhos e o que mais a sua rotina pedir.",
  },
  {
    title: "Atendimento emergencial",
    text: "Quebrou fora de hora? Chama no WhatsApp que a gente organiza o socorro.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className={styles.section}>
      <div className={styles.texture} />
      <div className={styles.inner}>
        <div className={styles.headingRow}>
          <div>
            <div className={styles.eyebrow}>O QUE FAZEMOS</div>
            <h2 className={styles.heading}>Serviços de solda e serralheria</h2>
          </div>
          <p className={styles.headingText}>
            Se o que você precisa não está na lista, chama no WhatsApp. Boa parte dos trabalhos
            que fazemos é sob medida.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURED.map((item) => (
            <article key={item.title} className={styles.featured}>
              <div className={styles.badge}>DESTAQUE</div>
              <h3 className={styles.featuredTitle}>{item.title}</h3>
              <p className={styles.featuredText}>{item.text}</p>
            </article>
          ))}

          {STANDARD.map((item) => (
            <article key={item.title} className={styles.standard}>
              <h3 className={styles.standardTitle}>{item.title}</h3>
              <p className={styles.standardText}>{item.text}</p>
            </article>
          ))}

          <article className={styles.custom}>
            <h3 className={styles.customTitle}>Projetos sob medida</h3>
            <p className={styles.customText}>
              Traga a ideia, a foto ou o desenho. A gente resolve o resto e volta com uma
              proposta.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
