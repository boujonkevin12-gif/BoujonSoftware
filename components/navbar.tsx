"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-surface-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-custom flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="relative h-8 w-8 overflow-hidden rounded-md">
            <Image
              src="/images/logo.jpeg"
              alt="Boujon Software"
              fill
              className="object-cover object-top"
            />
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-white">
            Boujon<span className="text-accent">.</span>Software
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button size="sm" variant="accent" className="hidden sm:inline-flex">
          Hablemos
        </Button>
      </div>
    </motion.header>
  );
}
