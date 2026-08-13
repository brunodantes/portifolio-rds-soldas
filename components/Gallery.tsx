"use client";

import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";

type Photo = {
  label: string;
  src?: string;
  thumb?: string;
};

const PHOTOS: Photo[] = [
  { label: "Foto de trabalho 1", src: "/trabalho-01.jpeg", thumb: "/thumbs/trabalho-01.jpeg" },
  { label: "Foto de trabalho 2", src: "/trabalho-02.jpeg", thumb: "/thumbs/trabalho-02.jpeg" },
  { label: "Foto de trabalho 3", src: "/trabalho-03.jpeg", thumb: "/thumbs/trabalho-03.jpeg" },
  { label: "Foto de trabalho 4", src: "/trabalho-04.jpeg", thumb: "/thumbs/trabalho-04.jpeg" },
  { label: "Foto de trabalho 5", src: "/trabalho-05.jpeg", thumb: "/thumbs/trabalho-05.jpeg" },
  { label: "Foto de trabalho 6", src: "/trabalho-06.jpeg", thumb: "/thumbs/trabalho-06.jpeg" },
  { label: "Foto de trabalho 7", src: "/trabalho-07.jpeg", thumb: "/thumbs/trabalho-07.jpeg" },
  { label: "Foto de trabalho 8", src: "/trabalho-08.jpeg", thumb: "/thumbs/trabalho-08.jpeg" },
  { label: "Foto de trabalho 9", src: "/trabalho-09.jpeg", thumb: "/thumbs/trabalho-09.jpeg" },
  { label: "Foto de trabalho 10", src: "/trabalho-10.jpeg", thumb: "/thumbs/trabalho-10.jpeg" },
];

function PhotoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h2.5l1.2-2h8.6l1.2 2H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13" r="3.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % PHOTOS.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length));
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  const active = openIndex === null ? null : PHOTOS[openIndex];

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
            Alguns dos trabalhos que já entregamos.
          </p>
        </div>
        <div className={styles.grid}>
          {PHOTOS.map((photo, i) => (
            <button
              key={photo.label}
              type="button"
              className={styles.slot}
              onClick={() => setOpenIndex(i)}
              aria-label={`Ampliar ${photo.label}`}
            >
              {photo.thumb ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo.thumb} alt={photo.label} className={styles.slotImage} loading="lazy" />
              ) : (
                <>
                  <span className={styles.slotIcon}>
                    <PhotoIcon />
                  </span>
                  <span className={styles.slotLabel}>{photo.label}</span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className={styles.lightboxOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            className={styles.lightboxClose}
            aria-label="Fechar"
            onClick={() => setOpenIndex(null)}
          >
            ✕
          </button>

          <button
            type="button"
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            aria-label="Foto anterior"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length));
            }}
          >
            ‹
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            {active.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={active.src} alt={active.label} className={styles.lightboxImage} />
            ) : (
              <div className={styles.lightboxPlaceholder}>
                <PhotoIcon />
              </div>
            )}
            <div className={styles.lightboxCaption}>{active.label}</div>
          </div>

          <button
            type="button"
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            aria-label="Próxima foto"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i === null ? i : (i + 1) % PHOTOS.length));
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
