'use client';

import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { useState } from 'react';

import BottomSheet from '@/components/common/bottom-sheet/BottomSheet';
import Splash from '@/components/common/splash/Splash';
import SocialLogin from '@/components/login/SocialLogin';

export default function RequiredLogin() {
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  return (
    <motion.div
      animate={{
        backgroundColor: showBottomSheet ? ' --primary-100' : 'white',
      }}
      className="relative h-screen"
    >
      <motion.div
        initial={{ y: 0, scale: 1 }}
        animate={showBottomSheet ? { y: -150, scale: 0.7 } : { y: 0, scale: 1 }}
        transition={{
          ease: easeInOut,
          duration: 1,
        }}
      >
        <Splash
          onComplete={() => setShowBottomSheet(true)}
          isChanged={showBottomSheet}
        />
      </motion.div>
      {/* BottomSheet */}
      <AnimatePresence>
        {showBottomSheet && (
          <BottomSheet className="rounded-t-[20px] bg-white px-8 pb-20 pt-12">
            <SocialLogin />
          </BottomSheet>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
