export default function headerDataParse(array: BlockRichTextArr) {
  if (array.length === 0) return { tag: "", plainText: "" };
  if (array.length === 1) {
    const initialString = array[0].content;
    const parsedString = initialString
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\W/g, "-");
    return { tag: parsedString, plainText: initialString };
  }

  const stringArray: string[] = [];

  array.forEach((object) => stringArray.push(object.content));
  const combinedString = stringArray.join("");
  const parsedString = combinedString
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\W/g, "-");

  return { tag: parsedString, plainText: combinedString };
}
