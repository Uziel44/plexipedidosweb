import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils.js";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-body font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-teal text-paper hover:bg-teal-dark",
        gold: "bg-gold text-ink hover:bg-gold-dark",
        outline: "border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/5 bg-transparent",
        ghost: "text-ink hover:bg-ink/5",
      },
      size: {
        default: "h-11 px-5 text-[15px] rounded-full",
        sm: "h-9 px-4 text-sm rounded-full",
        lg: "h-12 px-6 text-base rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
