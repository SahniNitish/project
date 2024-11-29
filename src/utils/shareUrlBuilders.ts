import { ShareConfig } from '../types/social';
import { encodeShareParams } from './urlHelpers';

export const buildTwitterShareUrl = ({ url, title }: ShareConfig): string => {
  const params = encodeShareParams({
    url,
    text: title,
  });
  return `https://twitter.com/intent/tweet?${params}`;
};

export const buildFacebookShareUrl = ({ url }: ShareConfig): string => {
  const params = encodeShareParams({ u: url });
  return `https://www.facebook.com/sharer/sharer.php?${params}`;
};

export const buildLinkedInShareUrl = ({ url, title, description }: ShareConfig): string => {
  const params = encodeShareParams({
    mini: 'true',
    url,
    title,
    summary: description || '',
  });
  return `https://www.linkedin.com/shareArticle?${params}`;
};

export const buildPinterestShareUrl = ({ url, title, image }: ShareConfig): string => {
  const params = encodeShareParams({
    url,
    description: title,
    media: image || '',
  });
  return `https://pinterest.com/pin/create/button/?${params}`;
};