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
    <div className="block_audio">
      <div className={`block_audio_thumbnail ${imgSrc ? "" : "placeholder"}`}>
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={`Audio clip thumbnail for ${audioTitle}`}
            className="block_audio_thumbnail"
            priority={true}
            width={80}
            height={80}
          />
        ) : (
          <AudioPlaceholderThumb />
        )}
      </div>

      <div className="block_audio_player-container" ref={audioContainer}>
        <audio src={audioSrc} ref={audioRef} preload="metadata" />
        <div className="block_audio_title">{audioTitle}</div>

        <AudioControls
          audioContainer={audioContainer}
          audioRef={audioRef}
          audioMaxDuration={audioDuration}
        />
      </div>
    </div>
  );
}
