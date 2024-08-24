import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <h1>Ecommerce</h1>
        <Link to='/login'>Ir a Login</Link>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
