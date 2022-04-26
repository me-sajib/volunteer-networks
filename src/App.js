import { Route, Routes } from "react-router-dom";
import "./App.css";
import Volunteers from "./Pages/Home/Volunteers/Volunteers";
import Registration from "./Pages/Login/Registration";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Volunteers />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
