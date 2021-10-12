import { Redirect } from "react-router";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login";

export default function Admin() {
  return (
    <>
      <PrivateRoute path="/admin" exact>
        <Redirect to="/admin/dashboard" />
      </PrivateRoute>
      <PublicRoute path="/admin/login" component={Login} />
      <PrivateRoute path="/admin/dashboard" component={Dashboard} />
    </>
  );
}
