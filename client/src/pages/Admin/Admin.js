import { Redirect, Route, Switch } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login";

export default function Admin() {
  return (
    <Switch>
      <Route path="/admin" exact>
        <Redirect to="/admin/dashboard" />
      </Route>
      <PublicRoute path="/admin/login" component={Login} />
      <PrivateRoute path="/admin/dashboard" component={Dashboard} />
    </Switch>
  );
}
