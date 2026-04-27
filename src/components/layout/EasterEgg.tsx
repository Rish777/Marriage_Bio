import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, X, Sparkles } from 'lucide-react';

const EasterEgg: React.FC = () => {
  const [inputSequence, setInputSequence] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const secretCode = 'insta';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key events if the user is typing in an input field
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key.length === 1) {
        setInputSequence((prev) => {
          const newSeq = (prev + e.key.toLowerCase());
          return newSeq.slice(-secretCode.length);
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleUnlockEvent = () => {
      setIsUnlocked(true);
    };

    window.addEventListener('unlock-easter-egg', handleUnlockEvent);
    return () => window.removeEventListener('unlock-easter-egg', handleUnlockEvent);
  }, []);

  useEffect(() => {
    if (inputSequence === secretCode) {
      setIsUnlocked(true);
      setInputSequence(''); // Reset sequence
    }
  }, [inputSequence]);

  return (
    <AnimatePresence>
      {isUnlocked && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-background-primary p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center relative border border-primary-200"
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <button 
              onClick={() => setIsUnlocked(false)}
              className="absolute top-4 right-4 text-text-secondary hover:text-primary-500 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex justify-center mb-4 text-primary-500">
              <Sparkles size={48} className="animate-pulse" />
            </div>
            
            <h2 className="text-2xl font-bold text-text-primary mb-2">You found a secret! 🎉</h2>
            <p className="text-text-secondary mb-6">
              Thanks for exploring my biodata. Let's connect on Instagram!
            </p>

            <a 
              href="https://www.instagram.com/allabout_rish?igsh=MXZyNDI0NnoyMHA4aQ%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 w-full"
              onClick={() => setIsUnlocked(false)}
            >
              <Instagram size={20} />
              <span>Go to Instagram</span>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
