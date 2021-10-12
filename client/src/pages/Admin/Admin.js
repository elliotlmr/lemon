import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login";

export default function Admin() {
  // let history = useHistory();
  // useEffect(() => {
  //   let access = localStorage.getItem("lemonToken");
  //   access ? history.push("/admin/dashboard") : history.push("/admin/login");
  // }, [history]);

  return (
    <>
      <PrivateRoute path="/admin/dashboard" component={Dashboard} />
      <PublicRoute path="/admin/login" component={Login} />
    </>
  );
}
