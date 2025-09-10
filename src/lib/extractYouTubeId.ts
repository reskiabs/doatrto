export function extractYouTubeId(htmlString: string): string | null {
  if (!htmlString) return null;
  
  const srcMatch = htmlString.match(/src="([^"]*youtube[^"]*)/);
  if (!srcMatch) return null;
  
  const url = srcMatch[1];
  const videoIdMatch = url.match(/\/embed\/([^?&]+)/);
  
  return videoIdMatch ? videoIdMatch[1] : null;
}