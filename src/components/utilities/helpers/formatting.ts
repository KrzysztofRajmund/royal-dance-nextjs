export const stringFormatting = (
  content: string,
  current: string,
  exchanger: string
) => {
  if (current === '-') {
    const capitalizeFirstLetter = content.slice(0, 1).toUpperCase();

    return `${capitalizeFirstLetter}${content.slice(1, content.length)?.replaceAll(current, exchanger)}`;
  }
  return content?.replaceAll(current, exchanger);
};
