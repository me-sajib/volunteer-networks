import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddEvent from "./Pages/Dashboard/AddEvent/AddEvent";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Events from "./Pages/Dashboard/Events";
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

        <Route
          path="/event"
          element={
            <RequireAuth>
              <Events />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/add"
          element={
            <RequireAuth>
              <AddEvent />
            </RequireAuth>
          }
        />

        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
