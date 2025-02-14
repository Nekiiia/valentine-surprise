import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, HeartHandshake } from "lucide-react";
import { ValentineButton } from "../components/ui/valentine-button";
import { 
  CelebrationModal } from '../components/ui/celebration-modal';
import Image from "next/image"; 

export default function Home() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const handleYesClick = () => {
    setShowCelebration(true);
  };

  const handleNoHover = () => {
    const newX = Math.random() * 150 - 75;
    const newY = Math.random() * 150 - 75;
    setNoButtonPosition({ x: newX, y: newY });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark p-4">
      {/* Показываем контент, если showCelebration = false */}
      {!showCelebration && (
        <>
          {/* Картинка котиков */}
          <img
            src="/love-cat.gif"
            alt="Cute Cat"
            width="128"
            height="128"
            className="mx-auto mb-4 rounded-lg shadow-lg"
          />

          {/* Заголовок */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Will you be my Valentine?
          </h1>

          {/* Кнопки */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Кнопка "Yes" */}
            <ValentineButton variant="yes" onClick={handleYesClick} className="yes-button">
              Yes
            </ValentineButton>

            {/* Кнопка "No" с анимацией перемещения */}
            <motion.div
              animate={noButtonPosition}
              transition={{ type: "spring", stiffness: 700, damping: 10 }}
            >
              <ValentineButton variant="no" onMouseEnter={handleNoHover} className="no-button">
                No
              </ValentineButton>
            </motion.div>
          </div>
        </>
      )}

      {/* Модальное окно (появляется после нажатия "Yes") */}
      <CelebrationModal open={showCelebration} onClose={() => setShowCelebration(false)} />
    </div>
  );
}