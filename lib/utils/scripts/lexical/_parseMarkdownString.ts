/* Right now the only 'markdown' cards the site uses are for lists and blockquotes, but if the markdown card use cases expand having this in its own file will be beneficial. */

export default function parseMarkdownString(markdown: string) {
  const markdownArray = markdown.split("\n");

  // Because a Markdown field could potentially have multiple objects in it, we will actually have the Markdown Object include an Array of Block Objects.

  const identifiedObjects: Array<LexicalMarkdownQuote | LexicalList> =
    identifyObjects(markdownArray);

  // const objectArray: BlockArray = identifiedObjectstoBlocks(identifiedObjects);

  const markupObj: LexicalMarkdownParsed = {
    type: "markdownParsed",
    version: 1,
    children: identifiedObjects,
  };

  return markupObj;
}

// Due to the size of the identify Objects logic and to make it a bit more modular for future expansions, I split it into its own function below.

function identifyObjects(markdownArray: string[]) {
  const identifiedObjects: Array<LexicalMarkdownQuote | LexicalList> = [];

  // As the for loop iterates over the strings, we will have an array for each type we're collecting in order to group like items. These are 'mutable' objects because once the loop detects we're looking at a new object, we want to push the below arrays to the identified objects array and reset. This is in case we have multiple groups of an object in a markdown string. It's not common behavior for me to write a markdown card with multiple instances of a markup type, but we want to future proof this in case we find more use cases for markdown cards.

  let orderedArray: Array<LexicalListItem> = [];
  let unOrderedArray: Array<LexicalListItem> = [];
  let quoteArray: Array<LexicalPara> = [];
  let author: string | null;

  // Regex patterns for identifying 'setofnumbers. ' '- ' or '> ' at the start of a string for Ol, Ul, or Quote.

  const olPattern = /^[0-9]*[\.]\s/;
  const ulPattern = /^[-]\s/;
  const quotePattern = /^[>]\s/;
  const authorPattern = /^[>]{2}\s/;

  type TypeIndicator = "ol" | "ul" | "quote" | null;

  let lastType: TypeIndicator = null;

  function typeChange(newType: TypeIndicator) {
    lastType = newType;
    if (quoteArray.length > 0) {
      const quoteObj: LexicalMarkdownQuote = {
        type: "markdownQuote",
        version: 1,
        children: quoteArray,
      };
      if (author) quoteObj.author = author;
      identifiedObjects.push(quoteObj);
      quoteArray = [];
      author = null;
    }
    if (orderedArray.length > 0) {
      identifiedObjects.push({
        type: "ol",
        children: orderedArray,
        direction: "ltr",
        format: "",
        indent: 0,
        version: 0,
      });
      orderedArray = [];
    }
    if (unOrderedArray.length > 0) {
      identifiedObjects.push({
        type: "ul",
        children: unOrderedArray,
        direction: "ltr",
        format: "",
        indent: 0,
        version: 0,
      });
      unOrderedArray = [];
    }
  }

  for (let i = 0; i < markdownArray.length; i++) {
    const mdString = markdownArray[i];
    // Determine if first characters of the line are a string of numbers followed by a '.' - I.e. '13.' This is the marker for a
    if (olPattern.test(mdString)) {
      if (lastType !== "ol") typeChange("ol");
      const outputString = mdString.split(olPattern);
      const children = evaluateString(outputString[1]);
      orderedArray.push({ type: "li", children, id: i });
      continue;
    }
    if (ulPattern.test(mdString)) {
      if (lastType !== "ul") typeChange("ul");
      const outputString = mdString.split(ulPattern);
      const children = evaluateString(outputString[1]);
      unOrderedArray.push({ type: "li", children, id: i });
      continue;
    }
    if (quotePattern.test(mdString) || authorPattern.test(mdString)) {
      if (lastType !== "quote") typeChange("quote");
      if (quotePattern.test(mdString)) {
        const outputString = mdString.split(quotePattern);
        const children = evaluateString(outputString[1]);
        quoteArray.push({
          type: "paragraph",
          children,
          direction: "ltr",
          format: "",
          indent: 0,
          version: 1,
        });
      } else if (authorPattern.test(mdString)) {
        const outputString = mdString.split(authorPattern);
        author = outputString[1];
      }
      continue;
    }
  }

  typeChange(null);

  return identifiedObjects;
}

//Splits the string into an array of strings, separating * emphasis and (string)[string] link patterns. Then evaluates each object of the array to turn into a rich text object (BlockRichText type).

function evaluateString(string: string) {
  const splitPattern = /([\*]+.*?[\*]+)|(\[.*?\]\(.*?\))/g;
  const splitString = string.split(splitPattern);

  const textArray: Array<LexicalText | LexicalLink> = [];

  for (let i = 0; i < splitString.length; i++) {
    const evalString = splitString[i];
    if (!evalString) continue;

    if (evalString[0] === "*") {
      const { emphasis, content } = handleEmphasis(evalString);
      textArray.push({
        type: "extended-text",
        detail: 0,
        format: emphasis,
        mode: "normal",
        style: "",
        text: content,
        version: 1,
      });
      continue;
    }

    if (/(\[.*?\]\(.*?\))/.test(evalString)) {
      const { content, link } = handleLink(evalString);
      textArray.push({
        type: "link",
        children: [
          {
            type: "extended-text",
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: content,
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
        rel: null,
        target: null,
        title: null,
        url: link,
      });
      continue;
    }

    textArray.push({
      type: "extended-text",
      detail: 0,
      format: 0,
      mode: "normal",
      style: "",
      text: evalString,
      version: 1,
    });
  }
  return textArray;
}

function handleEmphasis(string: string) {
  const starCount = string.length - string.replace(/^[\*]+/, "").length;
  let emphasis = 0;

  if (starCount === 1) {
    emphasis = 2;
  } else if (starCount % 2 === 0) {
    emphasis = 1;
  } else {
    emphasis = 3;
  }

  const content = string.replace(/[\*]+/g, "");

  return { emphasis, content };
}

function handleLink(string: string) {
  const split = string.split(/[\[\]\(\)]/g);
  // Sometimes split leaves blank objects when using Regex.
  const filter = split.filter((str) => str.length > 0);
  const [content, url] = filter;

  return { content, link: url };
}
