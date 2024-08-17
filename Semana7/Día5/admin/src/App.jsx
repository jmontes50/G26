import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
//import "./assets/tuCSS.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App