import { createElement } from "react";

export default function OtherEmbed({ elem }: { elem: ParseElement }) {
  const iFrame = elem.children?.find(
    (child) => child.name == "iframe"
  ) as ParseElement;
  if (!iFrame) return <></>;
  return (
    <figure className="kg-card kg-embed-card">
      {createElement("iframe", { ...iFrame.attributes })}
    </figure>
  );
}
