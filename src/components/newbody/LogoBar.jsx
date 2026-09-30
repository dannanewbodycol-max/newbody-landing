import React from "react";
import { NEWBODY } from "@/lib/newbodyAssets";
import { Image } from "@/components/ui/image";

export default function LogoBar() {
  return (
    <header className="relative bg-navy border-b border-cyan/15">
      <div className="mx-auto flex max-w-3xl items-center justify-center px-5 py-5">
        <Image
          src={NEWBODY.logo}
          alt="NEWBODY — Club de Antienvejecimiento"
          fittingType="fit"
          className="h-20 w-56 sm:h-24 sm:w-72 object-contain"
          style={{ mixBlendMode: "lighten" }}
        />
      </div>
    </header>
  );
}