import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

export type SectionLayoutProps = {
  /**
   * The section size.
   * sm = 896px
   * base = 1024px
   * lg = 1152px
   */
  size?: "sm" | "base" | "lg";
  /**
   * The variant of the section.
   * default = default background and foreground
   * card = card background and card foreground
   * primary = primary background and primary foreground
   * invert = foreground background and background foreground
   * image = background image with foreground text. The background image will be blured.
   */
  variant?: "default" | "card" | "primary" | "invert" | "image";
  /**
   * The class name of the div that contains colors.
   */
  containerClassName?: string;
  /**
   * The element type of the section.
   * article or main
   */
  elementType?: "article" | "main" | "div";
} & ComponentPropsWithoutRef<"div">;

export const SectionLayout = ({
  size = "base",
  variant = "default",
  className,
  containerClassName,
  elementType = "div",
  children,
  ...props
}: SectionLayoutProps) => {
  const Element = elementType === "article" ? "article" : "main";

  return (
    <Element
      className={cn(
        {
          "text-foreground": variant === "default",
          "bg-card text-card-foreground": variant === "card",
          "bg-primary text-primary-foreground": variant === "primary",
          "bg-foreground text-background": variant === "invert",
          "text-foreground backdrop-blur-sm backdrop-brightness-75":
            variant === "image",
        },
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "m-auto px-4 py-20 lg:py-28",
          {
            "max-w-4xl": size === "sm",
            "max-w-5xl": size === "base",
            "max-w-7xl": size === "lg",
          },
          className
        )}
      >
        {children}
      </div>
    </Element>
  );
};
