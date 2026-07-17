"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/data";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28">
      <div className="container-custom">
        <Reveal className="max-w-xl">
          <p className="text-sm font-medium text-accent-light">Portfolio</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Proyectos que hablan por sí solos.
          </h2>
          <p className="mt-4 text-muted">
            Una selección de productos que diseñamos y desarrollamos de
            principio a fin.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.06}>
              <motion.a
                href={project.href}
                target={project.href !== "#" ? "_blank" : undefined}
                rel={project.href !== "#" ? "noopener noreferrer" : undefined}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group block overflow-hidden rounded-2xl border border-surface-border bg-surface transition-colors hover:border-accent/40"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-white">
                      {project.name}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-light" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-surface-border bg-surface-light px-3 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
