import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Error from "./pages/Error";
import { useAuth } from "./contexts/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      {/* <PrivateRoute path="/" element={<Home />} /> */}

      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/signin" />}
        />
        <Route
          path="/about"
          element={isAuthenticated ? <About /> : <Navigate to="/signin" />}
        />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
