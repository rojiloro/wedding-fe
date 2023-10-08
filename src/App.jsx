import Hero from "./components/hero";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing";
import MusicPlayer from "./components/musicPlayer";
import kunAnta from "./assets/music/X2Download.app - Komang - Raim Laode (Saxophone Cover by Desmond Amos) (128 kbps).mp3";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
      <MusicPlayer src={kunAnta} />
    </>
  );
}

export default App;
