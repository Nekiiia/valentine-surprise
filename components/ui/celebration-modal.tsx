import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface CelebrationModalProps {
  open: boolean;
  onClose: () => void;
}

export function CelebrationModal({ open, onClose }: CelebrationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="max-w-md border-none rounded-lg shadow-lg p-6 text-center overflow-hidden"
        style={{
          background:
            "radial-gradient(circle, rgba(192,189,194,1) 4%, rgba(152,126,134,1) 38%, rgba(90,123,162,1) 82%)",
          animation: "gradientAnimation 5s infinite alternate",
        }}
      >
        {/* 🔥 Исправлено: Добавлен импортированный DialogTitle */}
        <DialogTitle className="text-lg font-bold text-white">
          Valentine&rsquo;s Surprise 🎉
        </DialogTitle>

        <AnimatePresence>
          {open && (
            <motion.div
              className="text-center py-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              {/* Анимированное сердечко */}
              <motion.div
                className="flex justify-center mb-4"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Heart
                  className="w-16 h-16"
                  style={{
                    fill: "rgb(152,126,134)",
                    filter: "drop-shadow(0 0 10px rgba(90,123,162,0.8))",
                  }}
                />
              </motion.div>

              {/* Заголовок */}
              <h2 className="text-2xl font-bold text-white mb-4">
                Yay! You mean so much to me! ☀️
              </h2>

              {/* Описание */}
              <p className="text-white mb-6">
                Thank you for making my Valentine&rsquo;s Day special!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}