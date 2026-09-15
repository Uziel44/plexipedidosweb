import * as React from "react";
import { cn } from "../../lib/utils.js";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border border-line bg-white/60 rounded-2xl shadow-sm transition-shadow duration-150 hover:shadow-md",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
