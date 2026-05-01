import React from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { getWhatsAppLink } from "../../lib/whatsapp";

interface GoldButtonProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  href?: string;
  to?: string;
  onClick?: (e: React.MouseEvent) => void;
  as?: "a" | "button" | "div" | "span";
}

export const GoldButton = ({ 
  children, 
  className = "", 
  fullWidth = false, 
  href, 
  to,
  onClick,
  as
}: GoldButtonProps) => {
  const location = useLocation();
  const styles = `inline-flex flex-shrink-0 items-center justify-center gap-2 bg-gradient-to-r from-accent-gold-light to-accent-gold-dark text-primary-deep font-bold py-4 px-8 rounded-[4px] shadow-[0_4px_15px_rgba(230,201,121,0.3)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(230,201,121,0.4)] ${fullWidth ? 'w-full' : ''} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    className: styles,
    onClick
  };

  if (to) {
    return (
      <Link to={to} className="contents">
        <motion.div {...motionProps}>
          {children}
        </motion.div>
      </Link>
    );
  }

  if (as === "div" || as === "span") {
    const Component = as === "div" ? motion.div : motion.span;
    return (
      <Component {...motionProps}>
        {children}
      </Component>
    );
  }

  if (as === "button" || (!href && onClick)) {
    return (
      <motion.button type="button" {...motionProps}>
        {children}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href || getWhatsAppLink(location.pathname)}
      target="_blank"
      rel="noopener noreferrer"
      {...motionProps}
    >
      {children}
    </motion.a>
  );
};
