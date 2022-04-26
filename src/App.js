import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Pages/Home/Checkout/Checkout";
import Volunteers from "./Pages/Home/Volunteers/Volunteers";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Login/Registration";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Volunteers />} />
        <Route
          path="/checkout/:donationId"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
