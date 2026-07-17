import Image from "next/image";
import { Instagram, Linkedin, Github, Mail, MessageCircle } from "lucide-react";
import { socialLinks } from "@/lib/data";

const socials = [
  { icon: Instagram, href: socialLinks.instagram, label: "Instagram" },
  { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: Github, href: socialLinks.github, label: "GitHub" },
  { icon: Mail, href: socialLinks.email, label: "Email" },
  { icon: MessageCircle, href: socialLinks.whatsapp, label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="border-t border-surface-border py-12">
      <div className="container-custom flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="relative h-7 w-7 overflow-hidden rounded-md">
            <Image
              src="/images/logo.jpeg"
              alt="Boujon Software"
              fill
              className="object-cover object-top"
            />
          </span>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Boujon Software. Todos los derechos
            reservados.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-muted transition-colors hover:border-accent/40 hover:text-white"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
