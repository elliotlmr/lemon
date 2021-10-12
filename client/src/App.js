import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loading from "./pages/Loading";
import Admin from "./pages/Admin/Admin";
import Layout from "./globals/Layout";
import PublicRoute from "./routes/PublicRoute";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, [loaded]);

  return (
    <>
      <Router>
        <Layout>
          <Switch>
            {!loaded ? (
              <PublicRoute
                restricted={false}
                exact
                path="/"
                component={Loading}
              />
            ) : (
              <PublicRoute
                restricted={false}
                exact
                path="/"
                component={Homepage}
              />
            )}
            <PublicRoute restricted={false} path="/admin" component={Admin} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
