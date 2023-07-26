export default function headerIdParse(array: BlockRichTextArr) {
  if (array.length === 0) return "";
  if (array.length === 1) {
    const initialString = array[0].content;
    const parsedString = initialString
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\W/g, "-");
    return parsedString;
  }

  const stringArray: string[] = [];

  array.forEach((object) => stringArray.push(object.content));
  const combinedString = stringArray.join("");
  const parsedString = combinedString
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\W/g, "-");

  return parsedString;
}
