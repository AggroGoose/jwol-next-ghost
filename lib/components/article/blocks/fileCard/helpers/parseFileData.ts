export default function parseFileData(children: ParseElement[] | undefined) {
  const returnObj = {
    fileSource: "",
    fileName: "",
    fileTitle: "",
    fileSize: "",
  };

  if (!children) return returnObj;

  const childA = children.find((child) => child.name == "a") as ParseElement;
  const childAChildren = childA.children as ParseElement[];
  const childB = childAChildren?.find((child) =>
    child.attributes?.class?.includes("file-card-contents")
  ) as ParseElement;
  const childBChildren = childB.children as ParseElement[];
  const childC = childBChildren?.find((child) =>
    child.attributes?.class?.includes("file-card-metadata")
  ) as ParseElement;
  const childCChildren = childC.children as ParseElement[];

  if (!childA || !childB || !childC) return returnObj;
  const fileSource = childA.attributes.href || "";
  const fileTitleChild = childBChildren?.find((child) =>
    child.attributes?.class?.includes("file-card-title")
  )?.children[0] as ParseText;
  const fileNameChild = childCChildren?.find((child) =>
    child.attributes?.class?.includes("file-card-filename")
  )?.children[0] as ParseText;
  const fileSizeChild = childCChildren?.find((child) =>
    child.attributes?.class?.includes("file-card-filesize")
  )?.children[0] as ParseText;

  returnObj.fileSource = fileSource;
  returnObj.fileTitle = fileTitleChild.data;
  returnObj.fileName = fileNameChild.data;
  returnObj.fileSize = fileSizeChild.data;

  return returnObj;
}
