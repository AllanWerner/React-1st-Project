import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/accueil";
import NosEntrees from "./pages/entree";
import Carte from "./pages/carte";
import Dessert from "./pages/dessert";
import Nosplats from "./pages/plats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carte" element={<Carte />} />
        <Route path="/entree" element={<NosEntrees />} />
        <Route path="/plat" element={<Nosplats />} />
        <Route path="/dessert" element={<Dessert />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
