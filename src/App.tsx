import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import SingleArticle from "./pages/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:aid" element={<SingleArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
