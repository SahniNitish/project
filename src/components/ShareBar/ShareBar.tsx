import React from 'react';
import { motion } from 'framer-motion';
import { ShareConfig } from '../../types/social';
import { socialPlatforms } from '../../utils/socialPlatforms';
import { ShareButton } from '../ShareButton/ShareButton';

interface ShareBarProps {
  config: ShareConfig;
  className?: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    }
  },
};

export const ShareBar: React.FC<ShareBarProps> = ({ config, className }) => {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className={`flex gap-4 ${className}`}
    >
      {socialPlatforms.map((platform) => (
        <motion.div key={platform.name} variants={item}>
          <ShareButton
            platformName={platform.name as any}
            shareUrl={platform.getShareUrl(config)}
            color={platform.color}
            hoverColor={platform.hoverColor}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};