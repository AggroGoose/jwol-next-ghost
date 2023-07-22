"use client";

import genElements from "@/lib/element/genElems";
import parseHTML from "@/lib/html/parseHTML";
import { useState } from "react";

export default function PostContent({ content }: { content: string }) {
  const [firstPara, setFirstPara] = useState(false);

  const contentParse = parseHTML(content);

  return (
    <div className="article__content post-grid">
      {contentParse.map((elem) => {
        if (firstPara && elem.name === "p") {
          setFirstPara(false);
          return genElements(elem, true);
        }
        return genElements(elem);
      })}
    </div>
  );
}
