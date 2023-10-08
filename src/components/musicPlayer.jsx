import React, { useRef, useState, useEffect } from "react";

function MusicPlayer(props) {
  //   const audioRef = useRef(null);
  //   const [isPlaying, setIsPlaying] = useState(false);

  //   const togglePlay = () => {
  //     const audio = audioRef.current;

  //     if (isPlaying) {
  //       audio.pause();
  //     } else {
  //       audio.play();
  //     }

  //     setIsPlaying(!isPlaying);
  //   };

  //   useEffect(() => {
  //     if (isPlaying) {
  //       audioRef.current.play();
  //     } else {
  //       audioRef.current.pause();
  //     }
  //   }, [isPlaying]);

  return (
    <>
      <div>
        <audio autoPlay>
          <source src={props.src} type="audio/mp3" />
        </audio>
        {/* <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button> */}
      </div>
    </>
  );
}

export default MusicPlayer;
