import Link from "next/link";
import { whatsappLink } from "@/lib/constants";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#padrao", label: "Como trabalhamos" },
  { href: "#galeria", label: "Trabalhos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="#topo" className={styles.brand}>
          <div className={styles.logo}>
            <span>RDR</span>
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>SOLDAS</span>
            <span className={styles.brandSubtitle}>E SERVIÇOS</span>
          </div>
        </Link>
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink("Olá! Gostaria de pedir um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            <span className={styles.ctaSheen} />
            <span className={styles.ctaLabel}>PEDIR ORÇAMENTO</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
