export interface ShareConfig {
  url: string;
  title: string;
  description?: string;
  image?: string;
}

export interface SocialPlatform {
  name: string;
  color: string;
  hoverColor: string;
  getShareUrl: (config: ShareConfig) => string;
}