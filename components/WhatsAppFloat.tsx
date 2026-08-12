import { whatsappLink } from "@/lib/constants";
import styles from "./WhatsAppFloat.module.css";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Olá! Gostaria de pedir um orçamento.")}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Falar no WhatsApp"
    >
      WHATSAPP
    </a>
  );
}
