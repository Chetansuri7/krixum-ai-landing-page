import React from "react";
import { Button } from "~/components/ui/button";

type GradientButtonProps = React.ComponentProps<typeof Button>;

/**
 * GradientButton - A reusable button with a consistent gradient style.
 * Accepts all props of the base Button component.
 */
export function GradientButton({ className = "", ...props }: GradientButtonProps) {
  return (
    <Button
      {...props}
      className={`bg-gradient-to-r from-[#FB923C] to-[#F472B6] hover:from-[#FB923C]/90 hover:to-[#F472B6]/90 text-white shadow-lg ${className}`}
    />
  );
}