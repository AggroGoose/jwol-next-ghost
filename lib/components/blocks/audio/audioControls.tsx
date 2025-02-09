import { useEffect, useRef, useState } from "react";
import { AudioVolume } from "./audioVolume";
import calculateTime from "./helpers/calculateTime";

import {
  AudioPauseIcon,
  AudioPlayIcon,
  AudioForward30Icon,
  AudioReplay30Icon,
} from "./SVG";

export default function AudioControls({
  audioRef,
  audioContainer,
  audioMaxDuration,
}: {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  audioContainer: React.RefObject<HTMLDivElement | null>;
  audioMaxDuration: number;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  const audioSeekBar = useRef<HTMLInputElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const seconds = audioMaxDuration;
    setAudioDuration(seconds);
    audioSeekBar.current!.max = seconds.toString();
  }, [audioRef, audioSeekBar]);

  function togglePlayPause() {
    if (isPlaying) {
      cancelAnimationFrame(animationRef.current);
      audioRef.current!.pause();
      setIsPlaying(false);
    } else {
      animationRef.current = requestAnimationFrame(whilePlaying);
      audioRef.current!.play();
      setIsPlaying(true);
    }
  }

  function whilePlaying() {
    audioSeekBar.current!.value = audioRef.current!.currentTime.toString();
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  function seekChangeHandler() {
    audioRef.current!.currentTime = +audioSeekBar.current!.value;
    changePlayerCurrentTime();
  }

  function forward30Seconds() {
    audioRef.current!.currentTime += 30;
    changePlayerCurrentTime();
  }

  function backward30Seconds() {
    audioRef.current!.currentTime -= 30;
    changePlayerCurrentTime();
  }

  function changePlayerCurrentTime() {
    audioContainer.current!.style.setProperty(
      "--seek-before-width",
      `${(+audioSeekBar.current!.value / audioDuration) * 100}%`
    );
    audioContainer.current!.style.setProperty(
      "--buffered-width",
      `${
        (audioRef.current!.buffered.end(audioRef.current!.buffered.length - 1) /
          audioDuration) *
        100
      }%`
    );
    setCurrentTime(+audioSeekBar.current!.value);
  }

  return (
    <>
      <div className="flex flex-col">
        <input
          type="range"
          className="range-h-1.5 thumb-h-4 cursor-pointer w-full bg-primary-dark wk-width-[--seek-before-width] progress-primary-500 thumb:gradient-conic-silver thumb:cshadow-rd-primary z-[1]"
          ref={audioSeekBar}
          defaultValue={currentTime}
          onChange={seekChangeHandler}
        />
      </div>
      <div className="flex items-center justify-between w-full max-w-[160px] mx-auto">
        <button className="leading-0" onClick={backward30Seconds}>
          <AudioReplay30Icon className="w-7 h-7 fill-always-light hover:fill-primary-300 transition-all duration-500 ease-in-out" />
        </button>
        <button
          className="leading-0"
          aria-label={isPlaying ? "Pause" : "Play"}
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <AudioPauseIcon className="w-7 h-7 fill-always-light" />
          ) : (
            <AudioPlayIcon className="w-7 h-7 fill-always-light" />
          )}
        </button>
        <button className="leading-0" onClick={forward30Seconds}>
          <AudioForward30Icon className="w-7 h-7 fill-always-light hover:fill-primary-300 transition-all duration-500 ease-in-out" />
        </button>
      </div>
      {/* <AudioVolume audioRef={audioRef} audioContainer={audioContainer} /> */}
    </>
  );
}
