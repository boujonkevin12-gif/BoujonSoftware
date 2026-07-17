"use client";

import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="border-y border-surface-border py-28">
      <div className="container-custom">
        <Reveal className="max-w-xl">
          <p className="text-sm font-medium text-accent-light">Testimonios</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Empresas que confiaron en nosotros.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-surface-border bg-surface p-6">
                <Quote className="h-5 w-5 text-accent-light" />
                <p className="mt-4 text-sm leading-relaxed text-white/90">
                  “{t.quote}”
                </p>
                <div className="mt-6 border-t border-surface-border pt-4">
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
