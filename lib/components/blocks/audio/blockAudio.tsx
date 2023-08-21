"use client";

import { useRef } from "react";
import Image from "next/image";

import AudioControls from "./audioControls";
import { AudioPlaceholderThumb } from "./SVG";

export default function BlockAudio({ elem }: { elem: BlockAudioCard }) {
  const audioContainer = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const imgSrc = null;
  const audioSrc = elem.src;
  const audioTitle = elem.title;
  const audioDuration = elem.duration;

  return (
    <div className="blmain flex w-full min-h-[96px] rounded-lg shadow-smd">
      <div
        className={`flex justify-center items-center w-[80px] m-2 rounded-md relative ${
          imgSrc ? "bg-transparent" : "bg-secondary"
        }`}
      >
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={`Audio clip thumbnail for ${audioTitle}`}
            className="object-cover"
            fill={true}
            sizes="80px"
          />
        ) : (
          <AudioPlaceholderThumb className="aspect-[22.5/24] w-7 fill-white" />
        )}
      </div>

      <div
        className="relative flex flex-col justify-between w-full audio-var"
        ref={audioContainer}
      >
        <audio src={audioSrc} ref={audioRef} preload="metadata" />
        <div className="w-full mt-2 py-2 px-3 text-lg font-bold leading-none">
          {audioTitle}
        </div>

        <AudioControls
          audioContainer={audioContainer}
          audioRef={audioRef}
          audioMaxDuration={audioDuration}
        />
      </div>
    </div>
  );
}
