const sanitizeText = (text: string) => {
  const parser = new DOMParser().parseFromString(text, "text/html");
  const tags = parser.querySelectorAll("p");
  const textParsed: string[] = [];
  tags.forEach((item) => {
    textParsed.push(item.innerText);
  });
  console.log(textParsed);

  return textParsed;
};

export default sanitizeText;
