import { useEffect, useState } from "react";

export default function Controller({ audio }: { audio: React.RefObject<HTMLAudioElement> }) {
  const [showPlay, setShowPlay] = useState(true);
  const [currentPorcentage, setCurrentPorcentage] = useState<number>(0);
  useEffect(() => {
    if (audio?.current) {
      audio.current.addEventListener("timeupdate", () => {
        const currentTime = audio.current?.currentTime;
        const duration = audio.current?.duration;
        if (
          duration !== undefined &&
          !isNaN(duration) &&
          currentTime != undefined
        ) {
          const porcentage = (currentTime / duration) * 100;
          setCurrentPorcentage(porcentage);
        }
      });
    }
  });

  const playAudio = () => {
    if (audio.current) {
      audio.current.play();
      setShowPlay(false);
    }
  };

  const pauseAudio = () => {
    if (audio.current) {
      audio.current.pause();
      setShowPlay(true);
    }
  };

  const stopAudio = () => {
    if (audio.current) {
      audio.current.pause();
      audio.current.currentTime = 0;
      setShowPlay(true);
    }
  };

  return (
    <div className="fixed bottom-2 border border-zinc-800 rounded flex justify-center items-center w-[60%] max-w-96 z-50 bg-black bg-opacity-85 animate-showFromBottom">
      <div className="relative w-full">
        <div
          style={{ width: `${currentPorcentage}%` }}
          className={`absolute z-20 top-0 left-0 h-2 min-h-2 bg-green-500 animate-showSlow duration-200`}
        ></div>
        <div
          style={{ width: "100%" }}
          className={`absolute z-10 top-0 left-0 h-2 min-h-2 bg-neutral-900`}
        ></div>
        <div className="flex justify-center items-center pt-2">
          {showPlay ? (
            <div
              onClick={playAudio}
              className="flex flex-col justify-center items-center min-w-14 p-2 cursor-pointer hover:text-green-500 duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36px"
                viewBox="0 -960 960 960"
                width="36px"
                fill="currentColor"
              >
                <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
              <span className="text-sm text-center">Play</span>
            </div>
          ) : (
            <div
              onClick={pauseAudio}
              className="flex flex-col justify-center items-center min-w-14 p-2 cursor-pointer hover:text-green-500 duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36px"
                viewBox="0 -960 960 960"
                width="36px"
                fill="currentColor"
              >
                <path d="M360-320h80v-320h-80v320Zm160 0h80v-320h-80v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
              <span className="text-sm text-center">Pause</span>
            </div>
          )}
          <div
            onClick={stopAudio}
            className="flex flex-col justify-center items-center min-w-14 p-2 cursor-pointer hover:text-green-500 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 -960 960 960"
              width="36px"
              fill="currentColor"
            >
              <path d="M320-320h320v-320H320v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <span className="text-sm text-center">Stop</span>
          </div>
        </div>
      </div>
    </div>
  );
}
