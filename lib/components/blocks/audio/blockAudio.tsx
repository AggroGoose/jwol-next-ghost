"use client";

import { useRef } from "react";
import Image from "next/image";

import AudioControls from "./audioControls";

export default function BlockAudio({ elem }: { elem: BlockAudioCard }) {
  const audioContainer = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const imgSrc = "/images/NoLeaveFallback.png";
  const audioSrc = elem.src;
  const audioTitle = elem.title;
  const audioDuration = elem.duration;

  return (
    <div
      className="blmain flex w-full max-w-[fit-content] mx-auto items-center [--audio-image:108px] min-h-[--audio-image] relative md:[--audio-image:160px] lg:blmin"
      ref={audioContainer}
    >
      <div className="w-[--audio-image] absolute aspect-square overflow-hidden rounded-full cshadow-primary">
        <Image
          src={imgSrc}
          alt={`Audio clip thumbnail for ${audioTitle}`}
          className="object-cover"
          fill={true}
          sizes="160px"
        />
      </div>
      <div
        className="flex flex-col gap-4 bg-primary-900 py-4 ml:py-6 pr-4 ml:pr-6 pl-[calc(var(--audio-image)+12px)]
      md:pl-[--audio-image] md:ml-6 rounded-r-xl rounded-l-3xl cshadow-primary grungeBack"
      >
        <p className="leading-none text-xs font-semibold text-always-light">
          {audioTitle}
        </p>

        <audio src={audioSrc} ref={audioRef} preload="metadata" />

        <AudioControls
          audioContainer={audioContainer}
          audioRef={audioRef}
          audioMaxDuration={audioDuration}
        />
      </div>
    </div>
  );
}
