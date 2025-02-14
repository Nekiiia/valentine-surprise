import { motion } from "framer-motion";
import { Button } from "@radix-ui/themes";

interface ValentineButtonProps {
  children: React.ReactNode;
  variant: "yes" | "no"; // Выбор стиля кнопки
  [key: string]: any;
}

export function ValentineButton({ children, variant, ...props }: ValentineButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          {...props}
          className={`px-6 py-3 text-lg font-semibold text-white rounded-full shadow-lg transition 
            ${variant === "yes" ? "yes-button" : "no-button"}`}
        >

        {children}
      </Button>
    </motion.div>
  );
}
