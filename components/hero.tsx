"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48">
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-fade" />

      <div className="container-custom relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-4 py-1.5 text-xs text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Disponibles para nuevos proyectos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gradient text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Creamos software que impulsa empresas.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
          >
            En Boujon Software diseñamos páginas web, aplicaciones y sistemas
            personalizados para negocios que buscan crecer mediante
            tecnología.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button variant="accent" size="lg" href="#portfolio" className="group">
              Ver proyectos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button variant="outline" size="lg" href="#contacto">
              Solicitar presupuesto
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-lg">
      <div className="absolute -inset-8 rounded-[2rem] bg-accent/10 blur-3xl" />
      <div className="relative rounded-2xl border border-surface-border bg-surface p-3 shadow-card">
        <div className="mb-3 flex items-center gap-1.5 px-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>
        <div className="rounded-xl border border-surface-border bg-surface-light p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-muted">Ingresos totales</p>
              <p className="mt-1 text-2xl font-semibold text-white">$482,190</p>
            </div>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs text-accent-light">
              +18.2%
            </span>
          </div>

          <div className="mb-6 flex h-32 items-end gap-2">
            {[40, 65, 45, 80, 60, 95, 70, 100, 85, 55, 90, 75].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className={`flex-1 rounded-t-sm ${
                  i === 7 ? "bg-accent" : "bg-white/10"
                }`}
              />
            ))}
          </div>

          <div className="space-y-3">
            {[
              { label: "Usuarios activos", value: "12,940" },
              { label: "Conversión", value: "4.8%" },
              { label: "Tiempo de carga", value: "0.6s" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between border-t border-surface-border pt-3 text-sm"
              >
                <span className="text-muted">{row.label}</span>
                <span className="font-medium text-white">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
