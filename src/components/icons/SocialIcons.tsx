import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaPinterest } from 'react-icons/fa';

export const socialIconMap = {
  Twitter: FaTwitter,
  Facebook: FaFacebook,
  LinkedIn: FaLinkedin,
  Pinterest: FaPinterest,
} as const;

export type SocialPlatformName = keyof typeof socialIconMap;