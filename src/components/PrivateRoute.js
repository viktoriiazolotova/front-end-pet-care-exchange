import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return (
    // <Route
    //   {...rest}
    //   render={(props) => {
    //     return currentUser ? (
    //       <Component {...props} />
    //     ) : (
    //       <Navigate to="/signin" />
    //     );
    //   }}
    // ></Route>
    currentUser ? children : <Navigate to="/signin" />
  );
};
export default PrivateRoute;
