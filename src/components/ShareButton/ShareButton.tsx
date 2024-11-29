import React from 'react';
import clsx from 'clsx';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { socialIconMap, SocialPlatformName } from '../icons/SocialIcons';

interface ShareButtonProps {
  platformName: SocialPlatformName;
  shareUrl: string;
  color: string;
  hoverColor: string;
  className?: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({
  platformName,
  shareUrl,
  color,
  hoverColor,
  className,
}) => {
  const Icon = socialIconMap[platformName];

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(shareUrl, '_blank', 'width=600,height=400');
    toast.success(`Sharing on ${platformName}`, {
      icon: '✨',
    });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95, rotate: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      onClick={handleShare}
      className={clsx(
        'p-4 rounded-2xl text-white shadow-lg transition-all duration-300',
        'hover:shadow-xl hover:-translate-y-1',
        color,
        hoverColor,
        className
      )}
      aria-label={`Share on ${platformName}`}
    >
      <Icon className="w-6 h-6" />
    </motion.button>
  );
};