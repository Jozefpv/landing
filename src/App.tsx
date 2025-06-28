import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Legal from "./Legal";
import Privacity from "./Privacity";
import Terms from "./Terms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacity" element={<Privacity />} />
      <Route path="/legal" element={<Legal />} />
    </Routes>
  );
}

export default App;
