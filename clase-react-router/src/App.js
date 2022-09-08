import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Expenses } from "./components/Expenses";
import { Inovation } from "./components/Inovation";
import { LinkRouter } from "./components/LinkRouter";
import { Profile } from "./components/Profile";
import { Dashboard } from "./components/Dashboard";

function App() {
  // let { userId } = useParams();

  return (
    <div className="App">
      <h1>Clase de react router</h1>
      <BrowserRouter>
        <LinkRouter />
        <Routes>
          <Route path="expenses" element={<Expenses />} />
          <Route path="inovation" element={<Inovation />} />
          <Route path="/user" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user/:idUsuario" element={<Profile />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
