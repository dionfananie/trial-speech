const sanitizeHtml = (text: string) => {
  const docs = new DOMParser().parseFromString(text, "text/html");
  const doc = docs.querySelectorAll("p");
  const textParsed: string[] = [];
  doc.forEach((item) => {
    textParsed.push(item.innerText);
  });

  return textParsed;
};

export default sanitizeHtml;
