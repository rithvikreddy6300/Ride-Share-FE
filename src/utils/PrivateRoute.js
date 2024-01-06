import React from "react";
import { Routes, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  console.log("Private log bro!");
  console.log(children);
  return (
    <Routes>
      <Route {...rest}>{children}</Route>
    </Routes>
  );
};

export default PrivateRoute;
