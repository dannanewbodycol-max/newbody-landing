import React from "react";
import { Cpu, UserCheck, ShieldCheck, HeartHandshake, Award, BadgeDollarSign } from "lucide-react";
import SectionBadge from "./SectionBadge";

const PILLARS = [
{ icon: Cpu, title: "Tecnología Avanzada", text: "Tratamientos corporales con tecnologías especializadas y no invasivas." },
{ icon: UserCheck, title: "Tratamientos Personalizados", text: "Cada cuerpo y cada objetivo son diferentes. El tratamiento comienza con una valoración." },
{ icon: ShieldCheck, title: "Procedimientos No Invasivos", text: "Alternativas enfocadas en transformación corporal sin procedimientos quirúrgicos." },
{ icon: HeartHandshake, title: "Acompañamiento", text: "Un equipo acompaña al paciente durante todo su proceso." },
{ icon: Award, title: "Experiencia", text: "Estructura profesional y sedes en las principales ciudades de Colombia." },
{ icon: BadgeDollarSign, title: "Precios Competitivos", text: "Al ser una clínica estética que cuenta con más de 120 equipos, podemos ofrecer mejores precios." }];


export default function WhyNewbody() {
  return (
    <section className="relative bg-navy-deep py-16 sm:py-24 overflow-hidden">
      
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="text-center mb-12">
          <SectionBadge>¿Por qué NEWBODY?</SectionBadge>
          <h2 className="nb-section-title text-3xl sm:text-5xl text-white mt-6">
            En el transcurso de 12 años hemos ayudado a más de <span className="text-cyan">150.000 personas</span>
          </h2>
          <p className="font-montserrat font-semibold text-lg sm:text-xl text-white/90 mt-4">
            Conoce por qué tantos nos <span className="text-cyan">eligen</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((p, i) =>
          <div
            key={i}
            className="group nb-card-glass rounded-2xl p-6 transition hover:border-cyan/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]">
            
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 border border-cyan/30 text-cyan mb-4 group-hover:bg-cyan group-hover:text-navy transition">
                <p.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="font-montserrat font-bold text-white text-lg mb-2">{p.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{p.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}