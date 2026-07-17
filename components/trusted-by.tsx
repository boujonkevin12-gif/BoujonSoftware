"use client";

import { Reveal } from "@/components/ui/reveal";
import { trustedCompanies } from "@/lib/data";

export function TrustedBy() {
  return (
    <section className="border-y border-surface-border py-14">
      <div className="container-custom">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Empresas que confiarán en nosotros
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 grayscale">
          {trustedCompanies.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold tracking-tight text-white/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
