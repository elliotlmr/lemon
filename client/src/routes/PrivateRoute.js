import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem("lemonToken");
  const boolean =
    Number(token?.split("lemonAccess")[1]) + 25000000 - new Date().getTime() >
    0;
  return (
    <Route
      {...rest}
      render={(props) =>
        boolean ? <Component {...props} /> : <Redirect to="/admin/login" />
      }
    />
  );
}

export default PrivateRoute;
