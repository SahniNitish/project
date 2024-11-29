export const encodeShareParams = (params: Record<string, string>) => {
  return Object.entries(params)
    .filter(([_, value]) => value)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
};