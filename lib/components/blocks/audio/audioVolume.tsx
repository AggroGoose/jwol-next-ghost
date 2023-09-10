import { useState, useRef } from "react";
import { AudioMutedIcon, AudioActiveIcon } from "./SVG";

export const AudioVolume = ({
  audioRef,
  audioContainer,
}: {
  audioRef: React.RefObject<HTMLAudioElement>;
  audioContainer: React.RefObject<HTMLDivElement>;
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(100);

  const volumeBar = useRef<HTMLInputElement>(null);

  function toggleMute() {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  }

  function volumeChangeHandler() {
    if (!audioRef.current || !audioContainer.current) return;
    if (!volumeBar?.current) return;
    const newValue = +volumeBar.current.value;
    const parsedValue = newValue / 100;
    audioRef.current.volume = parsedValue;
    audioContainer.current.style.setProperty(
      "--volume-before-width",
      `${newValue}%`
    );
    setVolumeLevel(newValue);
  }

  return (
    <div className="col-start-3 flex items-center justify-self-end">
      <button
        className="leading-[0]"
        aria-label={isMuted ? "Unmute" : "Mute"}
        onClick={toggleMute}
      >
        {isMuted ? (
          <AudioMutedIcon className="fill-always-light w-6 h-6 hover:fill-primary-300 transition-all duration-500 ease-in-out" />
        ) : (
          <AudioActiveIcon className="fill-always-light w-6 h-6 hover:fill-primary-300 transition-all duration-500 ease-in-out" />
        )}
      </button>

      <input
        type="range"
        className="range-h-1.5 thumb-h-3 bg-primary-800 wk-width-[--volume-before-width] progress-primary-500 track:rounded-l-lg thumb:gradient-conic-silver thumb:cshadow-rd-primary rounded-lg cursor-pointer w-[80px]"
        ref={volumeBar}
        defaultValue={volumeLevel}
        onChange={volumeChangeHandler}
      />
    </div>
  );
};
