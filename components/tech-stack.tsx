"use client";

import { Reveal } from "@/components/ui/reveal";
import { techStack } from "@/lib/data";

export function TechStack() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="py-28">
      <div className="container-custom">
        <Reveal className="max-w-xl">
          <p className="text-sm font-medium text-accent-light">Tecnologías</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Construido con herramientas de nivel profesional.
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {doubled.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-surface-border bg-surface text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-white"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
