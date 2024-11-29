import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaPinterest } from 'react-icons/fa';
import clsx from 'clsx';
import { SocialPlatform } from '../types/social';
import { toast } from 'react-hot-toast';

interface SocialShareButtonProps {
  platform: SocialPlatform;
  shareUrl: string;
  className?: string;
}

const iconMap = {
  Twitter: FaTwitter,
  Facebook: FaFacebook,
  LinkedIn: FaLinkedin,
  Pinterest: FaPinterest,
};

export const SocialShareButton: React.FC<SocialShareButtonProps> = ({
  platform,
  shareUrl,
  className,
}) => {
  const Icon = iconMap[platform.name as keyof typeof iconMap];

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(shareUrl, '_blank', 'width=600,height=400');
    toast.success(`Sharing on ${platform.name}`);
  };

  return (
    <button
      onClick={handleShare}
      className={clsx(
        'p-3 rounded-full text-white transition-colors duration-200',
        platform.color,
        platform.hoverColor,
        className
      )}
      aria-label={`Share on ${platform.name}`}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};