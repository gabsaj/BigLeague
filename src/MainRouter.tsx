import { Routes, Route } from "react-router-dom";
import AddPlayer from "./App/features/pages/AddPlayer";
import LandingPage from "./App/features/pages/LandingPage";
import PlayerPage from "./App/features/pages/PlayerPage";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/AddPlayer" element={<AddPlayer />}></Route>
      <Route path="/PlayerPage/:playerId" element={<PlayerPage />}></Route>
    </Routes>
  );
};

export default MainRouter;
