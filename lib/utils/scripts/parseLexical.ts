import { parseMarkdownString } from "./lexical";

export function parseLexical(lexicalObject: LexicalRoot) {
  const blockArray: LexicalContentArray = lexicalObject.children;
  // const headArray: BlockTOCArray = [];

  for (let i = 0; i < blockArray.length; i++) {
    if (blockArray[i].type === "markdown") {
      const block = blockArray[i] as LexicalMarkdown;
      const parsedMarkdown = parseMarkdownString(block.markdown);

      blockArray[i] = parsedMarkdown;
    }
  }

  return blockArray;
}
