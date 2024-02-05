import "./App.css";
import FrameFour from "./pages/FrameFour";
import FrameOne from "./pages/FrameOne";
import FrameThree from "./pages/FrameThree";
import FrameTwo from "./pages/FrameTwo";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="main_container">
      <Routes>
        <Route path="/" element={<FrameOne />} />
        <Route path="f2" element={<FrameTwo />} />
        <Route path="f3" element={<FrameThree />} />
        <Route path="f4" element={<FrameFour />} />
      </Routes>
    </div>
  );
};

export default App;
