"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/lib/data";

export function WhyUs() {
  return (
    <section id="nosotros" className="border-y border-surface-border py-28">
      <div className="container-custom">
        <Reveal className="max-w-xl">
          <p className="text-sm font-medium text-accent-light">
            Por qué elegirnos
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            ¿Por qué elegir Boujon Software?
          </h2>
          <p className="mt-4 text-muted">
            Construimos productos con estándares que suelen reservarse para
            empresas de tecnología de primer nivel.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="text-center sm:text-left"
              >
                <p className="text-gradient text-3xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
