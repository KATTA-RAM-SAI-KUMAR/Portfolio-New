import { useTheme } from "../context/ThemeContext";
import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const { musicOn } = useTheme();
  const audioRef = useRef(null);

  useEffect(() => {
    if (musicOn) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [musicOn]);

  return (
    <audio ref={audioRef} loop>
      <source src="/music.mp3" type="audio/mpeg" />
    </audio>
  );
}