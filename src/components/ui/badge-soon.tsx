import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export interface SoonBadgeProps {
  variant?: "default" | "outline" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SoonBadge = React.forwardRef<HTMLDivElement, SoonBadgeProps>(
  ({ className, variant = "default", size = "sm" }, ref) => {
    const { t } = useTranslation();

    const variants = {
      default: "bg-gradient-to-r from-neon-purple to-neon-blue text-white border-0",
      outline: "border border-primary/30 text-primary bg-background/50",
      secondary: "bg-muted text-muted-foreground border-0"
    };

    const sizes = {
      sm: "text-xs px-2 py-1",
      md: "text-sm px-3 py-1.5", 
      lg: "text-base px-4 py-2"
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full font-medium transition-all duration-300",
          "shadow-lg hover:shadow-xl backdrop-blur-sm",
          variants[variant],
          sizes[size],
          className
        )}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.span
          animate={{ 
            opacity: [1, 0.7, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {t('product.airscout.badge')}
        </motion.span>
      </motion.div>
    );
  }
);

SoonBadge.displayName = "SoonBadge";

export { SoonBadge };