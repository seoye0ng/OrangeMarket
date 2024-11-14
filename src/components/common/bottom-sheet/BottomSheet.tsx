import classNames from 'classnames';
import { motion } from 'framer-motion';

interface IBottomSheet {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

const bottomSheetAnimation = {
  initial: { y: '100%' },
  animate: { y: 0 },
  exit: { opacity: 0, y: '100%' },
};

export default function BottomSheet({
  children,
  className,
  duration: timeDuration = 1,
}: IBottomSheet) {
  return (
    <motion.div
      {...bottomSheetAnimation}
      transition={{ duration: timeDuration, ease: 'easeInOut' }}
      className={classNames('fixed bottom-0 left-0 z-10 w-full', className)}
    >
      {children}
    </motion.div>
  );
}
