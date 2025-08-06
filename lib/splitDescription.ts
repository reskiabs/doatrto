export const splitDescription = (html: string) => {
  const paragraphs = html.split(/<br\s*\/?>\s*<br\s*\/?>/i);

  if (paragraphs.length === 0) {
    return {
      short: html,
      remaining: "",
    };
  }

  const short = paragraphs[0];
  const remaining = paragraphs.slice(1).join("<br><br>");

  return {
    short,
    remaining,
  };
};
