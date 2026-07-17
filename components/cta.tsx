"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";

export function CTA() {
  return (
    <section id="contacto" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="container-custom relative text-center">
        <Reveal>
          <h2 className="text-gradient mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            ¿Listo para llevar tu empresa al siguiente nivel?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-muted">
            Contanos tu idea y te ayudamos a convertirla en un producto real.
          </p>
          <div className="mt-10 flex justify-center">
            <Button
              variant="accent"
              size="lg"
              href={socialLinks.instagramDM}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablemos de tu proyecto
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
