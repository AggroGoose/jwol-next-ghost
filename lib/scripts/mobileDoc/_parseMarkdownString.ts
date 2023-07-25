/* This is for use in the _cardObjMD.ts file. Right now the only 'markdown' cards the site uses are for lists and blockquotes, but if the markdown card use cases expand having this in its own file will be beneficial. */

export default function parseMarkdownString(
  markdown: string,
  index: string | number
) {
  const markdownArray = markdown.split("\n");

  // Because a Markdown field could potentially have multiple objects in it, we will actually have the Markdown Object include an Array of Block Objects.

  const identifiedObjects: Array<{
    type: "ol" | "ul" | "blockquote";
    id: number;
    content: { id: number; content: string }[];
  }> = identifyObjects(markdownArray);

  const objectArray: BlockArray = identifiedObjectstoBlocks(identifiedObjects);

  const markupObj: BlockMarkupCard = {
    type: "markup",
    id: index,
    content: objectArray,
  };

  return markupObj;
}

// Due to the size of the identify Objects logic and to make it a bit more modular for future expansions, I split it into its own function below.

function identifyObjects(markdownArray: string[]) {
  const identifiedObjects: Array<{
    type: "ol" | "ul" | "blockquote";
    id: number;
    content: { id: number; content: string }[];
  }> = [];

  // As the for loop iterates over the strings, we will have an array for each type we're collecting in order to group like items. These are 'mutable' objects because once the loop detects we're looking at a new object, we want to push the below arrays to the identified objects array and reset. This is in case we have multiple groups of an object in a markdown string. It's not common behavior for me to write a markdown card with multiple instances of a markup type, but we want to future proof this in case we find more use cases for markdown cards.

  let orderedArray: { id: number; content: string }[] = [];
  let unOrderedArray: { id: number; content: string }[] = [];
  let quoteArray: { id: number; content: string }[] = [];

  // Regex patterns for identifying 'setofnumbers. ' '- ' or '> ' at the start of a string for Ol, Ul, or Quote.

  const olPattern = /^[0-9]*[\.]\s/;
  const ulPattern = /^[-]\s/;
  const quotePattern = /^[>]\s/;

  type TypeIndicator = "ol" | "ul" | "quote" | null;

  let lastType: TypeIndicator = null;

  function typeChange(newType: TypeIndicator) {
    lastType = newType;
    if (quoteArray.length > 0) {
      identifiedObjects.push({
        type: "blockquote",
        id: quoteArray[0].id,
        content: quoteArray,
      });
      quoteArray = [];
    }
    if (orderedArray.length > 0) {
      identifiedObjects.push({
        type: "ol",
        id: orderedArray[0].id,
        content: orderedArray,
      });
      orderedArray = [];
    }
    if (unOrderedArray.length > 0) {
      identifiedObjects.push({
        type: "ul",
        id: unOrderedArray[0].id,
        content: unOrderedArray,
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
      orderedArray.push({ id: i, content: outputString[1] });
      continue;
    }
    if (ulPattern.test(mdString)) {
      if (lastType !== "ul") typeChange("ul");
      const outputString = mdString.split(ulPattern);
      unOrderedArray.push({ id: i, content: outputString[1] });
      continue;
    }
    if (quotePattern.test(mdString)) {
      if (lastType !== "quote") typeChange("quote");
      const outputString = mdString.split(quotePattern);
      quoteArray.push({ id: i, content: outputString[1] });
      continue;
    }
  }

  typeChange(null);

  return identifiedObjects;
}

function identifiedObjectstoBlocks(
  idObjects: Array<{
    type: "ol" | "ul" | "blockquote";
    id: number;
    content: { id: number; content: string }[];
  }>
) {
  const output: BlockArray = [];

  for (let i = 0; i < idObjects.length; i++) {
    const idObject = idObjects[i];
    if (idObject.type === "ol" || idObject.type === "ul") {
      // @ts-ignore
      const objectArray = createListObject(idObject, i);
      output.push(objectArray);
      continue;
    }
    if (idObject.type === "blockquote") {
      // @ts-ignore
      const objectArray = createQuoteObject(idObject, i);
      output.push(objectArray);
      continue;
    }
  }

  return output;
}

function createListObject(
  list: {
    type: "ol" | "ul";
    id: number;
    content: { id: number; content: string }[];
  },
  index: number
) {
  const listObject: BlockListCard = {
    type: list.type,
    id: index,
    content: [],
  };

  for (let i = 0; i < list.content.length; i++) {
    const { content } = list.content[i];
    listObject.content.push(evaluateString(content));
  }

  return listObject;
}

function createQuoteObject(
  quote: {
    type: "blockquote";
    id: number;
    content: { id: number; content: string }[];
  },
  index: number
) {
  const quoteObject: BlockQuoteCard = {
    type: quote.type,
    id: index,
    content: [],
  };

  for (let i = 0; i < quote.content.length; i++) {
    const { content } = quote.content[i];
    quoteObject.content.push(evaluateString(content));
  }

  return quoteObject;
}

//Splits the string into an array of strings, separating * emphasis and (string)[string] link patterns. Then evaluates each object of the array to turn into a rich text object (BlockRichText type).

function evaluateString(string: string) {
  const splitPattern = /([\*]+.*?[\*]+)|(\[.*?\]\(.*?\))/g;
  const splitString = string.split(splitPattern);

  const objectArray: BlockRichTextArr = [];

  for (let i = 0; i < splitString.length; i++) {
    const evalString = splitString[i];
    if (!evalString) continue;

    if (evalString[0] === "*") {
      const { bold, italic, content } = handleEmphasis(evalString);
      objectArray.push({
        content,
        emphasis: {
          bold,
          italic,
          strikethrough: false,
          underline: false,
        },
        link: null,
      });
      continue;
    }

    if (/(\[.*?\]\(.*?\))/.test(evalString)) {
      const { content, link } = handleLink(evalString);
      objectArray.push({
        content,
        emphasis: {
          bold: false,
          italic: false,
          strikethrough: false,
          underline: false,
        },
        link,
      });
      continue;
    }

    objectArray.push({
      content: evalString,
      emphasis: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
      },
      link: null,
    });
  }
  return objectArray;
}

function handleEmphasis(string: string) {
  const starCount = string.length - string.replace(/^[\*]+/, "").length;
  let bold = false;
  let italic = false;

  if (starCount === 1) {
    italic = true;
  } else if (starCount % 2 === 0) {
    bold = true;
  } else {
    bold = true;
    italic = true;
  }

  const content = string.replace(/[\*]+/g, "");

  return { bold, italic, content };
}

function handleLink(string: string) {
  const split = string.split(/[\[\]\(\)]/g);
  // Sometimes split leaves blank objects when using Regex.
  const filter = split.filter((str) => str.length > 0);
  const [content, url] = filter;
  let internal = false;
  if (/(www.noleavesociety)/.test(url)) internal = true;

  return { content, link: { url, internal } };
}
