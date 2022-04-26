import { Route, Routes } from "react-router-dom";
import "./App.css";
import Volunteers from "./Pages/Home/Volunteers/Volunteers";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Volunteers />} />
      </Routes>
    </div>
  );
}

export default App;
