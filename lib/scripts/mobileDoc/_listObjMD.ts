import { parseRichTextArray } from "./_textObjMD";

export default function mdListtoBlock(
  listObject: MDSectionList,
  i: number,
  markupArray: MDMarkupArray
) {
  const [indicator, type, children] = listObject;

  // Rather than indicating '<li>s' directly in lists, they are simply indicated as arrays of arrays of rich text objects. We'll be storing them in a similar fashion in the exported list object.

  const content: Array<BlockRichTextArr> = [];

  //Due to rich text parsing logic already being built out in the _textObjMD.ts file, we are going to go ahead and reuse that function to make our life easy.

  for (let i = 0; i < children.length; i++) {
    const subChildren = children[i];
    const textArray: BlockRichTextArr = parseRichTextArray(
      subChildren,
      markupArray
    );
    content.push(textArray);
  }

  const blockListObject: BlockListCard = {
    id: i,
    type,
    content,
  };

  return blockListObject;
}
