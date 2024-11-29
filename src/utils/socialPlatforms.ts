import { SocialPlatform } from '../types/social';
import { PLATFORM_COLORS } from '../constants/socialPlatformColors';
import {
  buildTwitterShareUrl,
  buildFacebookShareUrl,
  buildLinkedInShareUrl,
  buildPinterestShareUrl,
} from './shareUrlBuilders';

export const socialPlatforms: SocialPlatform[] = [
  {
    name: 'Twitter',
    color: PLATFORM_COLORS.TWITTER.base,
    hoverColor: PLATFORM_COLORS.TWITTER.hover,
    getShareUrl: buildTwitterShareUrl,
  },
  {
    name: 'Facebook',
    color: PLATFORM_COLORS.FACEBOOK.base,
    hoverColor: PLATFORM_COLORS.FACEBOOK.hover,
    getShareUrl: buildFacebookShareUrl,
  },
  {
    name: 'LinkedIn',
    color: PLATFORM_COLORS.LINKEDIN.base,
    hoverColor: PLATFORM_COLORS.LINKEDIN.hover,
    getShareUrl: buildLinkedInShareUrl,
  },
  {
    name: 'Pinterest',
    color: PLATFORM_COLORS.PINTEREST.base,
    hoverColor: PLATFORM_COLORS.PINTEREST.hover,
    getShareUrl: buildPinterestShareUrl,
  },
];