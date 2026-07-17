"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="servicios" className="py-28">
      <div className="container-custom">
        <Reveal className="max-w-xl">
          <p className="text-sm font-medium text-accent-light">Servicios</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Todo lo que tu empresa necesita, en un solo lugar.
          </h2>
          <p className="mt-4 text-muted">
            Cubrimos cada etapa del desarrollo de software, desde la idea
            hasta el mantenimiento a largo plazo.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full rounded-2xl border border-surface-border bg-surface p-6 transition-colors hover:border-accent/40 hover:bg-surface-light"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-surface-light text-accent-light transition-colors group-hover:border-accent/40">
                  <service.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
