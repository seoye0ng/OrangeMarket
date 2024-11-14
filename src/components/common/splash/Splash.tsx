import { motion } from 'framer-motion';

import Logo from '@/components/icons/Logo';
import LogoFont from '@/components/icons/LogoFont';

interface ISplash {
  onComplete?: () => void;
  isChanged?: boolean;
}

const logoAnimation = {
  initial: { opacity: 0 },
  animate: { y: [-200, 200, 0], opacity: 1 },
  transition: {
    y: {
      times: [0, 0.5, 1],
      type: 'spring',
      damping: 5,
      mass: 1.2,
      bounce: 0.8,
    },
    opacity: { ease: 'linear' },
  },
};

const logoFontAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, delay: 1, ease: 'easeInOut' },
};

export default function Splash({ onComplete, isChanged = false }: ISplash) {
  const logoColor = isChanged ? 'white' : 'primary-100';

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <motion.div {...logoAnimation} onAnimationComplete={onComplete}>
        <Logo color={logoColor} />
      </motion.div>
      <motion.div {...logoFontAnimation}>
        <LogoFont color={logoColor} />
      </motion.div>
    </div>
  );
}
