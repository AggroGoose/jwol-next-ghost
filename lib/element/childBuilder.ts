import { ReactNode, createElement } from "react";
import { Fragment } from "react";

export default function childBuilder(
  children: (ParseText | ParseElement)[]
): Array<ReactNode> {
  if (!children) return [];
  const constArr: Array<ReactNode> = [];

  children.forEach((elem) => {
    if (elem.name === "text") {
      const textElem = elem as ParseText;
      const content = textElem.data;
      constArr.push(createElement(Fragment, { key: textElem.id }, content));
    } else {
      const htmlElem = elem as ParseElement;
      const childContent: Array<ReactNode> = childBuilder(htmlElem.children);

      switch (htmlElem.name) {
        case "text":
          constArr.push(
            createElement(Fragment, { key: htmlElem.id }, ...childContent)
          );
          break;
        case "strong":
        case "em":
          constArr.push(
            createElement(htmlElem.name, { key: htmlElem.id }, ...childContent)
          );
          break;
        case "a":
        case "span":
        case "p":
        case "button":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "div":
          const obj = htmlElem.attributes
            ? { ...htmlElem.attributes, key: htmlElem.id }
            : { key: htmlElem.id };

          constArr.push(createElement(htmlElem.name, obj, ...childContent));
          break;
      }
    }
  });
  return constArr;
}
