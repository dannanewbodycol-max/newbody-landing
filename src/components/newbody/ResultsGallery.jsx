import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import SectionBadge from "./SectionBadge";
import { RESULTS_WOMEN, RESULTS_MEN, NEWBODY } from "@/lib/newbodyAssets";

export default function ResultsGallery() {
  const [gender, setGender] = useState("mujer");
  const scrollerRef = useRef(null);

  const items = gender === "mujer" ? RESULTS_WOMEN : RESULTS_MEN;

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="resultados" className="relative bg-navy py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 nb-grid-bg opacity-25" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="text-center mb-10">
          <SectionBadge>Resultados Reales</SectionBadge>
          <h2 className="nb-section-title text-3xl sm:text-5xl text-white mt-6 mb-4">
            No tienes que imaginar los resultados.
            <br className="hidden sm:block" /> <span className="text-cyan">Puedes conocerlos.</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Casos reales de pacientes que confiaron en NEWBODY. Explora las
            transformaciones por categoría.
          </p>
        </div>

        {/* switcher género */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full border border-cyan/30 bg-navy-deep p-1">
            <ToggleBtn active={gender === "mujer"} onClick={() => setGender("mujer")} ariaLabel="Ver resultados para mujeres">
              Mujer
            </ToggleBtn>
            <ToggleBtn active={gender === "hombre"} onClick={() => setGender("hombre")} ariaLabel="Ver resultados para hombres">
              Hombre
            </ToggleBtn>
          </div>
        </div>

        {/* carrusel */}
        <div className="relative">
          <div
            ref={scrollerRef}
            className="nb-scroll-snap flex gap-5 overflow-x-auto pb-4 -mx-5 px-5">
            
            {items.map((item, i) =>
            <ResultCard key={`${gender}-${i}`} item={item} />
            )}
          </div>

          <NavBtn side="left" onClick={() => scrollBy(-1)} />
          <NavBtn side="right" onClick={() => scrollBy(1)} />
        </div>

        <p className="mt-8 text-center text-white/50 italic max-w-2xl mx-auto text-sm">Los resultados pueden variar de una persona a otra. Cada tratamiento requiere valoración previa.


        </p>
      </div>
    </section>);

}

function ResultCard({ item }) {
  return (
    <div className="nb-snap-item shrink-0 w-[300px] sm:w-[380px] rounded-2xl overflow-hidden nb-card-glass">
      <div className="relative">
        <Image
          src={item.img}
          alt={`Resultado ${item.zone} — ${item.sessions} sesiones`}
          className="w-full aspect-[3/4] bg-navy-deep"
          fittingType="fill" />
        
        <div className="absolute top-3 left-3">
          
        </div>
      </div>
      <div className="p-4">
        <p className="font-montserrat font-semibold text-white text-sm uppercase tracking-wide">
          {item.zone}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {NEWBODY.cities.map((c) =>
          <span key={c} className="text-[10px] font-montserrat font-semibold px-2 py-1 rounded bg-cyan/15 text-cyan border border-cyan/25 hidden">
              {c}
            </span>
          )}
        </div>
        <p className="mt-3 text-[11px] text-white/55 italic">{NEWBODY.compliance}</p>
      </div>
    </div>);

}

function ToggleBtn({ active, onClick, children, ariaLabel }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`px-7 py-2.5 rounded-full font-montserrat font-semibold text-sm transition ${
      active ? "bg-cyan text-navy nb-cyan-glow" : "text-white/70 hover:text-white"}`
      }>
      
      {children}
    </button>);

}

function NavBtn({ side, onClick }) {
  const isLeft = side === "left";
  return (
    <button
      onClick={onClick}
      aria-label={isLeft ? "Anterior" : "Siguiente"}
      className={`hidden sm:flex absolute top-1/2 -translate-y-1/2 ${isLeft ? "-left-3" : "-right-3"} z-10 h-11 w-11 items-center justify-center rounded-full bg-navy-deep border border-cyan/40 text-cyan hover:bg-cyan hover:text-navy transition nb-cyan-glow`}>
      
      {isLeft ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
    </button>);

}