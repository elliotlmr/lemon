import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "./auth";

function PublicRoute({ component: Component, restricted, ...rest }) {
  useEffect(() => {
    console.log("public route");
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}

export default PublicRoute;
