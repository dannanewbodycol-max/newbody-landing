import React from "react";
import { NEWBODY } from "@/lib/newbodyAssets";
import { Image } from "@/components/ui/image";

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-cyan/15 py-10">
      <div className="mx-auto max-w-6xl px-5 flex flex-col items-center gap-6 text-center">
        <Image src={NEWBODY.logo} alt="NEWBODY" className="h-12 w-auto object-contain" fittingType="fit" />
        <div className="flex flex-wrap justify-center gap-2">
          {NEWBODY.cities.map((c) => (
            <span key={c} className="text-xs font-montserrat font-semibold px-3 py-1.5 rounded-full bg-cyan/15 text-cyan border border-cyan/25">
              {c}
            </span>
          ))}
        </div>
        <p className="text-white/45 text-xs max-w-md">{NEWBODY.compliance}</p>
        <p className="text-white/35 text-xs">
          © {new Date().getFullYear()} NEWBODY — Club de Antienvejecimiento. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}