import styles from "./Embers.module.css";

type Ember = {
  left: string;
  size: number;
  color: string;
  glow: string;
  duration: number;
  delay: number;
};

const PRESETS: Ember[][] = [
  [
    { left: "6%", size: 3, color: "#ff8a3d", glow: "rgba(255,110,40,.7)", duration: 11, delay: 0 },
    { left: "14%", size: 2, color: "#ffb066", glow: "rgba(255,140,60,.6)", duration: 14, delay: 2.4 },
    { left: "23%", size: 3, color: "#ff6a2a", glow: "rgba(255,90,30,.65)", duration: 12.5, delay: 5.1 },
    { left: "35%", size: 2, color: "#ffc98a", glow: "rgba(255,160,80,.55)", duration: 15, delay: 1.2 },
    { left: "46%", size: 3, color: "#ff8a3d", glow: "rgba(255,110,40,.6)", duration: 13, delay: 7.3 },
    { left: "58%", size: 2, color: "#ffb066", glow: "rgba(255,140,60,.55)", duration: 16, delay: 3.8 },
    { left: "69%", size: 3, color: "#ff6a2a", glow: "rgba(255,90,30,.6)", duration: 12, delay: 6.4 },
    { left: "80%", size: 2, color: "#ffc98a", glow: "rgba(255,160,80,.5)", duration: 14.5, delay: 9.1 },
    { left: "90%", size: 3, color: "#ff8a3d", glow: "rgba(255,110,40,.55)", duration: 13.5, delay: 4.6 },
  ],
  [
    { left: "10%", size: 2, color: "#ff9a4d", glow: "rgba(255,120,40,.55)", duration: 15, delay: 1.6 },
    { left: "34%", size: 3, color: "#ff7a30", glow: "rgba(255,100,30,.5)", duration: 13, delay: 5.9 },
    { left: "62%", size: 2, color: "#ffc08a", glow: "rgba(255,150,70,.45)", duration: 16, delay: 3.2 },
    { left: "86%", size: 3, color: "#ff8a3d", glow: "rgba(255,110,40,.5)", duration: 14, delay: 8.4 },
  ],
  [
    { left: "8%", size: 3, color: "#ff8a3d", glow: "rgba(255,110,40,.6)", duration: 12.5, delay: 0.8 },
    { left: "28%", size: 2, color: "#ffb066", glow: "rgba(255,140,60,.5)", duration: 15.5, delay: 4.3 },
    { left: "52%", size: 3, color: "#ff6a2a", glow: "rgba(255,90,30,.55)", duration: 13.5, delay: 7.7 },
    { left: "74%", size: 2, color: "#ffc98a", glow: "rgba(255,160,80,.45)", duration: 16.5, delay: 2.1 },
    { left: "92%", size: 3, color: "#ff8a3d", glow: "rgba(255,110,40,.5)", duration: 14, delay: 9.6 },
  ],
];

export default function Embers({ preset = 0 }: { preset?: 0 | 1 | 2 }) {
  const embers = PRESETS[preset];
  return (
    <div className={styles.field} aria-hidden="true">
      {embers.map((e, i) => (
        <div
          key={i}
          className={styles.ember}
          style={
            {
              left: e.left,
              width: e.size,
              height: e.size,
              background: e.color,
              boxShadow: `0 0 ${e.size === 3 ? 9 : 7}px 2px ${e.glow}`,
              animationDuration: `${e.duration}s`,
              animationDelay: `${e.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
