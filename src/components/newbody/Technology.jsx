import React, { useState, useRef, useEffect } from "react";
import { Image } from "@/components/ui/image";
import SectionBadge from "./SectionBadge";
import { TECHNOLOGY } from "@/lib/newbodyAssets";

// Orden solicitado: EXILIS | HYPERSCULPT | VANQUISH | X-WAVE
const ORDER = ["EXILIS", "HYPERSCULPT", "VANQUISH", "X-WAVE"];
const ORDERED = ORDER.map((name) => TECHNOLOGY.find((t) => t.equipo === name)).filter(Boolean);

export default function Technology() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative bg-navy py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 nb-hex-bg opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="text-center mb-12">
          <SectionBadge>Nuestra Tecnología</SectionBadge>
          <h2 className="nb-section-title text-3xl sm:text-5xl text-white mt-6 mb-4">
            Tecnología diseñada para <span className="text-cyan">diferentes objetivos</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Conoce las tecnologías que utilizamos para trabajar diferentes
            objetivos corporales de manera personalizada.
          </p>
        </div>

        {/* Acordeón horizontal — una sola fila con cuatro equipos */}
        <div
          className="flex h-[460px] sm:h-[500px] gap-2 sm:gap-3"
          onMouseLeave={() => setActive(null)}
        >
          {ORDERED.map((t, i) => (
            <TechCard
              key={t.equipo}
              t={t}
              isActive={active === i}
              anyActive={active !== null}
              onEnter={() => setActive(i)}
              onToggle={() => setActive(active === i ? null : i)}
            />
          ))}
        </div>

        <p className="mt-6 text-center text-white/45 text-sm sm:hidden">
          Toca una tarjeta para conocer el equipo
        </p>
      </div>
    </section>
  );
}

function TechCard({ t, isActive, anyActive, onEnter, onToggle }) {
  const videoRef = useRef(null);

  // Control del video de Vanquish: reproduce desde el inicio al expandir,
  // pausa y reinicia al contraer.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isActive) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div
      className="relative basis-0 overflow-hidden rounded-2xl border border-cyan/15 cursor-pointer select-none transition-[flex-grow] duration-500 ease-out"
      style={{ flexGrow: isActive ? 7 : anyActive ? 1 : 1 }}
      onMouseEnter={onEnter}
      onClick={onToggle}
    >
      {/* Fondo: fotografía del equipo (+ video para Vanquish al expandir) */}
      <div className="absolute inset-0 bg-navy-deep">
        {t.video && (
          <video
            ref={videoRef}
            src={t.video}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        <Image
          src={t.img}
          alt={t.equipo}
          fittingType="fill"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out ${
            isActive && t.video ? "opacity-0 scale-105" : isActive ? "scale-105" : "scale-100"
          }`}
        />
      </div>

      {/* Overlay / gradiente oscuro */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isActive
            ? "bg-gradient-to-r from-navy-deep/90 via-navy-deep/55 to-navy-deep/20 opacity-100"
            : "bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-100"
        }`}
        aria-hidden
      />

      {/* Etiqueta colapsada (vertical) */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="font-display text-xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] [writing-mode:vertical-rl] rotate-180 tracking-wide">
          {t.equipo}
        </span>
      </div>

      {/* Contenido expandido */}
      <div
        className={`absolute inset-0 flex flex-col justify-center p-6 sm:p-8 transition-all duration-500 ease-out ${
          isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <span className="inline-block w-fit rounded-full border border-cyan/40 bg-navy-deep/60 px-3 py-1 font-montserrat text-[11px] font-semibold uppercase tracking-wider text-cyan">
          {t.equipo}
        </span>
        <h3 className="font-display text-2xl sm:text-3xl leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] mt-3">
          {t.objective}
        </h3>

        <div className="mt-4 max-w-md">
          <InfoLine label="¿Qué hace?" text={t.que} />
          <InfoLine label="¿Cómo funciona?" text={t.como} />

          <div className="mt-3">
            <p className="font-montserrat text-[11px] font-bold uppercase tracking-wider text-white/55">
              Ideal para:
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {t.ideal.map((o) => (
                <span
                  key={o}
                  className="rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-0.5 text-[11px] font-semibold text-cyan"
                >
                  {o}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoLine({ label, text }) {
  return (
    <div className="mb-1.5">
      <p className="font-montserrat text-[11px] font-bold uppercase tracking-wider text-white/55">
        {label}
      </p>
      <p className="text-[12.5px] leading-snug text-white/85">{text}</p>
    </div>
  );
}