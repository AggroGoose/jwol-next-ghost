import cheerio from "cheerio";

export default function parseHTML(post: string) {
  const $ = cheerio.load(post);
  const a = $("body").contents().toArray();

  const contentArray = parseHtmlObject(a as unknown as CheerioElem[]);

  return contentArray;
}

const parseHtmlObject = (htmlArray: CheerioElem[]) => {
  const outputArray: ParseElement[] = [];

  htmlArray.forEach((element, i) => {
    if (element.type === "tag") {
      const elementObject: ParseElement = {
        id: i,
        name: element.name,
        attributes: {},
        children: [],
      };

      if (Object.keys(element.attribs).length > 0)
        elementObject.attributes = element.attribs;

      if (element.children.length > 0) {
        elementObject.children = parseHtmlChildren(element.children);
        outputArray.push(elementObject);
      } else {
        outputArray.push(elementObject);
      }
    }
  });

  return outputArray;
};

const parseHtmlChildren = (
  elementArray: CheerioElem[]
): Array<ParseElement | ParseText> => {
  const childArray: Array<ParseElement | ParseText> = [];
  elementArray.forEach((element, i) => {
    if (element.type === "text" && element.data) {
      const textObject: ParseText = {
        id: i,
        name: "text",
        data: element.data,
      };
      childArray.push(textObject);
    } else if (element.type === "tag") {
      const elementObject: ParseElement = {
        id: i,
        name: element.name,
        attributes: {},
        children: [],
      };

      if (Object.keys(element.attribs).length > 0)
        elementObject.attributes = element.attribs;

      if (element.children.length > 0) {
        elementObject.children = parseHtmlChildren(element.children);
        childArray.push(elementObject);
      } else {
        childArray.push(elementObject);
      }
    }
  });

  return childArray;
};
