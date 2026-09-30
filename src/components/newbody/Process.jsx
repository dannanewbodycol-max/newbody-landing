import React from "react";
import { CheckCircle2, Phone, ClipboardList } from "lucide-react";
import SectionBadge from "./SectionBadge";

const STEPS = [
{
  icon: CheckCircle2,
  state: "Completado",
  title: "Ya enviaste tu solicitud",
  text: "Recibimos tus datos y tus objetivos iniciales",
  done: true
},
{
  icon: Phone,
  state: "En curso",
  title: "Hablaremos contigo",
  text: "Uno de nuestros especialistas se pondr\xE1 en contacto contigo",
  active: true
},
{
  icon: ClipboardList,
  state: "Siguiente",
  title: "Valoraci\xF3n",
  text: "Determinaremos qu\xE9 alternativas se adaptars mejor a tus objetivos."
}];


export default function Process() {
  return (
    <section className="relative bg-navy-deep py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 nb-grid-bg opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-5">
        <div className="text-center mb-12">
          <SectionBadge>Tu Proceso</SectionBadge>
          <h2 className="nb-section-title text-3xl sm:text-5xl text-white mt-6">
            Tu proceso comienza <span className="text-cyan">entendiendo tu cuerpo.</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-6 items-center text-center">
          {/* Fila 1: logos / iconos */}
          {STEPS.map((s, i) =>
            <div key={`icon-${i}`} className="flex justify-center">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full border-2 ${
                s.done ?
                "bg-cyan border-cyan text-navy nb-cyan-glow" :
                s.active ?
                "border-cyan text-cyan bg-cyan/10 nb-cyan-glow" :
                "border-white/25 text-white/50 bg-navy"}`
                }>
                <s.icon className="h-7 w-7" strokeWidth={2} />
              </div>
            </div>
          )}

          {/* Fila 2: estado */}
          {STEPS.map((s, i) =>
            <div key={`state-${i}`} className="flex justify-center">
              <span
                className={`inline-block text-xs font-montserrat font-semibold uppercase tracking-wide px-3 py-1 rounded-full ${
                s.done ? "bg-cyan text-navy" : s.active ? "bg-cyan/15 text-cyan border border-cyan/30" : "text-white/40 border border-white/15"}`
                }>
                {s.state}
              </span>
            </div>
          )}

          {/* Fila 3: título */}
          {STEPS.map((s, i) =>
            <h3 key={`title-${i}`} className="font-montserrat font-bold text-white text-lg">
              {s.title}
            </h3>
          )}

          {/* Fila 4: texto */}
          {STEPS.map((s, i) =>
            <p key={`text-${i}`} className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">
              {s.text}
            </p>
          )}
        </div>
      </div>
    </section>);

}