import Welcome from "@/components/welcome";
import Home from "@/screen/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Player = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Player;
