import { useEffect, useRef, useState } from "react";
import AudioPBSelector from "./audioPBSelector";
import { AudioVolume } from "./audioVolume";
import calculateTime from "./helpers/calculateTime";

import { AudioPauseIcon, AudioPlayIcon } from "./SVG";

export default function AudioControls({
  audioRef,
  audioContainer,
  audioMaxDuration,
}: {
  audioRef: React.RefObject<HTMLAudioElement>;
  audioContainer: React.RefObject<HTMLDivElement>;
  audioMaxDuration: number;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  const audioSeekBar = useRef<HTMLInputElement>(null);
  const animationRef = useRef<number>(0);

  function timeIsNumber(num: any) {
    if (num && !isNaN(num)) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    const seconds = audioMaxDuration;
    setAudioDuration(seconds);
    if (!audioSeekBar?.current?.max) {
      return;
    }
    audioSeekBar.current.max = seconds.toString();
  }, [audioRef, audioSeekBar]);

  function togglePlayPause() {
    if (isPlaying) {
      cancelAnimationFrame(animationRef.current);
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      animationRef.current = requestAnimationFrame(whilePlaying);
      audioRef.current?.play();
      setIsPlaying(true);
    }
  }

  function whilePlaying() {
    if (!audioSeekBar?.current) return;
    audioSeekBar.current.value =
      audioRef.current?.currentTime.toString() || "0";
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  function seekChangeHandler() {
    if (!audioSeekBar?.current || !audioRef.current) return;
    audioRef.current.currentTime = +audioSeekBar.current.value;
    changePlayerCurrentTime();
  }

  function changePlayerCurrentTime() {
    if (!audioContainer.current || !audioRef.current) return;
    audioContainer.current.style.setProperty(
      "--seek-before-width",
      `${
        audioSeekBar?.current
          ? (+audioSeekBar.current.value / audioDuration) * 100
          : 0
      }%`
    );
    audioContainer.current.style.setProperty(
      "--buffered-width",
      `${
        (audioRef.current.buffered.end(audioRef.current.buffered.length - 1) /
          audioDuration) *
        100
      }%`
    );
    audioSeekBar?.current
      ? setCurrentTime(+audioSeekBar.current.value)
      : setCurrentTime(0);
  }

  return (
    <div className="flex grow items-center px-2 py-3">
      <button
        className="relative bottom-[-1px] pb-1 leading-[0] mr-1"
        aria-label={isPlaying ? "Pause" : "Play"}
        onClick={togglePlayPause}
      >
        {isPlaying ? (
          <AudioPauseIcon className="w-4 h-4 fill-secondary" />
        ) : (
          <AudioPlayIcon className="w-4 h-4 fill-secondary" />
        )}
      </button>

      <span className="text-xs font-semibold px-1 py-1 whitespace-nowrap">
        {timeIsNumber(currentTime) ? calculateTime(currentTime) : `0:00`}
      </span>
      <div className="opacity-80 text-xs font-medium whitespace-nowrap">
        /
        <span className="px-1">
          {timeIsNumber(audioDuration) ? calculateTime(audioDuration) : `0:00`}
        </span>
      </div>

      <input
        type="range"
        className="h-2 rounded-lg cursor-pointer accent-secondary grow"
        ref={audioSeekBar}
        defaultValue={currentTime}
        onChange={seekChangeHandler}
      />

      <AudioPBSelector audioRef={audioRef} />

      <AudioVolume audioRef={audioRef} audioContainer={audioContainer} />
    </div>
  );
}
