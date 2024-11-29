import React from 'react';
import { ShareConfig } from '../types/social';
import { socialPlatforms } from '../utils/socialPlatforms';
import { SocialShareButton } from './SocialShareButton';

interface SocialShareBarProps {
  config: ShareConfig;
  className?: string;
}

export const SocialShareBar: React.FC<SocialShareBarProps> = ({ config, className }) => {
  return (
    <div className={`flex gap-3 ${className}`}>
      {socialPlatforms.map((platform) => (
        <SocialShareButton
          key={platform.name}
          platform={platform}
          shareUrl={platform.getShareUrl(config)}
        />
      ))}
    </div>
  );
};