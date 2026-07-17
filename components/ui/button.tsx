"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-black hover:bg-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
        accent: "bg-accent text-white hover:bg-accent-light shadow-glow",
        outline:
          "border border-surface-border bg-transparent text-white hover:bg-white/5",
        ghost: "bg-transparent text-white hover:bg-white/5",
      },
      size: {
        default: "h-11 px-6",
        lg: "h-14 px-8 text-base",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref">,
    VariantProps<typeof buttonVariants> {
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, href, ...props }, ref) => {
    const motionProps = {
      whileHover: { scale: 1.03 },
      whileTap: { scale: 0.97 },
      transition: { type: "spring" as const, stiffness: 400, damping: 20 },
      className: cn(buttonVariants({ variant, size }), className),
    };

    if (href) {
      return (
        <motion.a href={href} {...motionProps} {...(props as any)}>
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button ref={ref} {...motionProps} {...props}>
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
