"use client";

import { useEffect, useState } from "react";

// Cumprimentos em vários idiomas, estilo tela de setup da Apple.
// `lang` seleciona uma fonte específica (jp = Kosugi Maru, kr = Gaegu).
const GREETINGS: { text: string; lang?: "jp" | "kr" }[] = [
  { text: "Olá" },
  { text: "Hello" },
  { text: "Hola" },
  { text: "Bonjour" },
  { text: "Ciao" },
  { text: "こんにちは", lang: "jp" },
  { text: "안녕하세요", lang: "kr" },
  { text: "Hello" },
];

const FIRST_MS = 2000; // primeiro cumprimento fica 2 segundos na tela
const FAST_MS = 180; // os demais trocam rapidamente

// O primeiro fica parado 2s; depois tudo muda rápido (160ms).
function stepDuration(i: number) {
  return i === 0 ? FIRST_MS : FAST_MS;
}

export function HelloIntro() {
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timers: ReturnType<typeof setTimeout>[] = [];
    let elapsed = 0;

    // Agenda a troca de cada idioma com duração decrescente.
    for (let i = 1; i < GREETINGS.length; i++) {
      elapsed += stepDuration(i - 1);
      const at = elapsed;
      timers.push(setTimeout(() => setIndex(i), at));
    }

    // Começa a sumir logo depois do último idioma.
    const totalMs = elapsed + stepDuration(GREETINGS.length - 1) + 300;
    timers.push(setTimeout(() => setLeaving(true), totalMs));
    timers.push(
      setTimeout(() => {
        setShow(false);
        document.body.style.overflow = "";
      }, totalMs + 800),
    );

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  const skip = () => setLeaving(true);

  if (!show) return null;

  return (
    <div
      className={`hello-intro ${leaving ? "hello-intro--leaving" : ""}`}
      aria-hidden="true"
      onClick={skip}
    >
      <div className="hello-intro__stage">
        <span
          key={index}
          className={`hello-intro__word${
            GREETINGS[index].lang ? ` hello-intro__word--${GREETINGS[index].lang}` : ""
          }`}
        >
          {GREETINGS[index].text}
        </span>

      </div>
    </div>
  );
}
