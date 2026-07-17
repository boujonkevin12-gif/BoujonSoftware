"use client";

import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section id="proceso" className="py-28">
      <div className="container-custom">
        <Reveal className="max-w-xl">
          <p className="text-sm font-medium text-accent-light">Proceso</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            ¿Cómo trabajamos?
          </h2>
          <p className="mt-4 text-muted">
            Un proceso simple y transparente, pensado para que sepas
            exactamente en qué etapa está tu proyecto.
          </p>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-surface-border lg:block" />
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className="relative">
                <span className="text-sm font-mono text-accent-light">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
