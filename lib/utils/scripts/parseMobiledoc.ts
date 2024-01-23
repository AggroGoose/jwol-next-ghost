//Parses the MobileDoc object to convert it into an array of "Block Array" objects (defined under blocks.d.ts) which will be easily fed to React Elements.

import { mdCardtoBlock, mdListtoBlock, mdTexttoBlock } from "./mobileDoc";

export function parseMD(mobileDocObject: MDObject) {
  const { atoms, cards, markups, sections } = mobileDocObject;
  const blockArray: BlockArray = [];
  const headArray: BlockTOCArray = [];

  //The sections array contains all the text objects like p, h tags, and blockquotes, list objects, and then placeholder objects for objects in the card section. To build our block array, we will parse over this array.

  for (let i = 0; i < sections.length; i++) {
    const object = sections[i];

    //May eventually integrate 'BlockQuote' functionality in its own condition, but presently Blockquotes are generated via markdown cards.

    if (object[0] === 1 && object[1] !== "blockquote") {
      const data = mdTexttoBlock(object, i, markups);
      const { textObj, headObj } = data;
      blockArray.push(textObj);
      if (headObj) headArray.push(headObj);
      continue;
    }
    if (object[0] === 3) {
      const listObj = mdListtoBlock(object, i, markups);
      blockArray.push(listObj);
      continue;
    }
    if (object[0] === 10) {
      const n = object[1];
      // Uses the 2nd item in the section object (n) to match the mobiledoc card array and return a card object.
      const cardObj = mdCardtoBlock(cards, n, i);
      if (!cardObj) continue;
      blockArray.push(cardObj);
      continue;
    }
  }

  const blockObject: BlockObject = {
    content: blockArray,
    toc: headArray,
  };

  return blockObject;
}
