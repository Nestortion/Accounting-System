import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

export const text = cva(["w-fit"], {
  variants: {
    variant: {
      heading1: ["font-spinnaker", "text-3xl"],
      heading1bold: ["font-spinnaker", "text-3xl", "font-bold"],
      heading1semibold: ["font-spinnaker", "text-3xl", "font-semibold"],
      heading2: ["font-spinnaker", "text-2xl"],
      heading2bold: ["font-spinnaker", "text-2xl", "font-bold"],
      heading2ghost: ["font-spinnaker", "text-2xl", "opacity-50"],
      heading2semibold: ["font-spinnaker", "text-2xl", "font-semibold"],
      heading3bold: ["font-spinnaker", "text-xl", "font-bold"],
      heading3ghost: ["font-spinnaker", "text-xl", "opacity-80"],
      heading4bold: ["font-spinnaker", "text-lg", "font-bold"],
      heading4ghost: ["font-spinnaker", "text-lg", "opacity-50"],
      body: ["font-galdeano", "text-lg"],
      bodybold: ["font-galdeano", "text-lg"],
      label: ["font-galdeano", "opacity-50"],
      footer: ["font-spinnaker", "font-bold", "text-xs"],
    },
    style: {
      underline: [
        "relative",
        "after:absolute",
        "after:bottom-0",
        "after:left-0",
        "after:content-['']",
        "after:border-b-2",
        "after:border-rose-300",
        "after:w-0",
        "after:duration-300",
        "hover:after:w-full",
        "hover:cursor-pointer",
      ],
    },
    defaultVariants: {
      size: "body",
    },
  },
});

export type TextProps = ComponentProps<"div"> & VariantProps<typeof text>;

export const Text = ({
  className,
  variant,
  style,
  children,
  ...props
}: TextProps) => {
  return (
    <div className={cn(text({ variant, className, style }))} {...props}>
      {children}
    </div>
  );
};
