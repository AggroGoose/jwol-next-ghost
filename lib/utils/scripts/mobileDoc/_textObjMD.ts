import headerDataParse from "./_headerParse";

export default function mdTexttoBlock(
  textObject: MDSectionText,
  i: number,
  markupArray: MDMarkupArray
) {
  const [indicator, type, children] = textObject;

  const content = parseRichTextArray(children, markupArray);

  let textObj: BlockTextCard | BlockHeadCard;
  let headObj: BlockTOCObject | null = null;

  if (type === "p") {
    textObj = {
      type,
      content,
      id: i,
    };
  } else {
    const { tag, plainText } = headerDataParse(content);
    textObj = {
      type,
      content,
      tag,
      id: i,
    };
    if (type === "h2") {
      headObj = {
        id: i,
        tag,
        title: plainText,
      };
    }
  }

  return { headObj, textObj };
}

//Separated this section into its own exported function because mobiledoc List objects also contain Rich Text Arrays.

export function parseRichTextArray(
  children: MDRichTextArray,
  markupArray: MDMarkupArray
) {
  //Iterates over Rich Text child array-objects to identify markup tags and builds

  const content: BlockRichTextArr = [];
  for (let i = 0; i < children.length; i++) {
    /* marks array indicates what markups and how many markup html tags are opened, whereas closedMarks represents the number of markup html tags that were closed. Example '<a href='#'><b>Sup</b> Dude</a>' would generate 'two' rich text objects. The first would have the 'open' tags for <a> and <b> but would stop at the close </b> tag. The second rich text object would not have an open tag, but would have a closed tag. 
    
    I will eventually want to build functionality for this, but at the moment I don't frequently mix markup tags in the middle of other markup tags when writing, but it definitely 'could' be something I would do in the future. */

    const [typeIndicator, marks, closedMarks, text] = children[i];

    const richTextObject: BlockRichText = {
      content: text,
      emphasis: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
      },
      link: null,
    };
    if (marks.length > 0) {
      const { emphasis, link } = findMarks(marks, markupArray);
      richTextObject.emphasis = emphasis;
      richTextObject.link = link;
    }

    content.push(richTextObject);
  }

  return content;
}

/* The second item in a RichTextObject array (array[1]) for mobiledoc is always the 'markup' relation array. Each number in the array refers to the 'Markups' array index. The first item in a Markup array item (array[0]) indicates the 'type' of markup. 

The findMarks function takes those markup types to convert them into emphasis and link objects. */

function findMarks(markers: number[], markups: MDMarkupArray) {
  const emphasis = {
    bold: false,
    italic: false,
    strikethrough: false,
    underline: false,
  };
  let link: { url: string; internal: boolean } | null = null;

  for (let i = 0; i < markers.length; i++) {
    const mark = markups[markers[i]];

    /* An 'a' type markup is the only markup that would include a secondary item in the array object. This secondary item is an array of attributes. Every even numbered index attribute (a[0], a[2], etc...) is the attribute label, while the odd numbered index attributes are the value. 
    
    Ghost runs only two attributes in blog posts, href and rel: ['href', 'www.website.com', 'rel', 'noopener noreferrer'] */

    if (mark[0] === "a") {
      const objUrl = mark[1][1];
      link = { url: objUrl, internal: false };
      if (/(www.noleavesociety)/.test(objUrl)) {
        link.internal = true;
        link.url = objUrl.replace("https://www.noleavesociety.com", "");
      }
      if (/^\#/.test(objUrl)) link.internal = true;
      continue;
    }
    if (mark[0] === "b" || mark[0] === "strong") {
      emphasis.bold = true;
      continue;
    }
    if (mark[0] === "i" || mark[0] === "em") {
      emphasis.italic = true;
      continue;
    }
    if (mark[0] === "u") {
      emphasis.underline = true;
      continue;
    }
    if (mark[0] === "s") {
      emphasis.strikethrough = true;
    }
  }

  return { emphasis, link };
}
