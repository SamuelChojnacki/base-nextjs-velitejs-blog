import { cva, VariantProps } from "class-variance-authority";
import React, {
  ElementType,
  ComponentPropsWithoutRef,
  PropsWithChildren,
} from "react";

// Définition des variantes de style avec cva
const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-bold tracking-wide lg:text-5xl",
      h2: "text-3xl font-semibold tracking-tight text-secondary-foreground transition-colors dark:text-foreground md:text-3xl",
      h3: "text-2xl font-semibold tracking-tight",
      p: "leading-7 mt-6:first-of-type",
      code: "font-mono text-sm bg-muted px-1 py-0.5 rounded",
      lead: "text-xl text-muted-foreground",
      large: "font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-gray-700 dark:text-gray-200",
      link: "font-medium text-primary hover:underline",
      base: "text-base leading-7 lg:text-lg",
    },
    size: {
      base: "text-base",
      medium: "text-md",
      large : "text-2xl"
    },
  },
  defaultVariants: {
    variant: "base",
    size: "base",
  },
});

// Définition des props polymorphiques
type PolymorphicAsProp<E extends ElementType> = {
  as?: E;
};

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>;

type TypographyProps<E extends ElementType> = PolymorphicProps<E> &
  VariantProps<typeof typographyVariants>;

// Définition de l'élément par défaut
const defaultElement = "p";

// Composant Typography
const Typography = <E extends ElementType = typeof defaultElement>({
  as,
  variant = "base",
  size = "base",
  children,
  ...restProps
}: TypographyProps<E>) => {
  const Component = as || defaultElement;

  return (
    <Component className={typographyVariants({ variant, size })} {...restProps}>
      {children}
    </Component>
  );
};

export default Typography;
