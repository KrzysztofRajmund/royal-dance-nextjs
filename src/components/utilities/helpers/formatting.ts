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

export const polishLettersFormatting = (inputString) => {
  // mapping for characters
  const mapping = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  return (
    inputString
      // split the string into an array
      .split("")
      .map(
        (char) =>
          // check if mapping has a key with the current character
          Object.keys(mapping).includes(char)
            ? mapping[char] // if yes, return its replacement
            : char // if not, return it unchanged
      )
      // join the array to a string
      .join("")
  );
}


export const urlFormatting = (subtitle: string) =>{
  const string = polishLettersFormatting(subtitle)
  return  stringFormatting(string, " ", "-").replace("-Szczecin", "").toLowerCase()
}