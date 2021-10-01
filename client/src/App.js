import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loading from "./pages/Loading";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5500);
  }, []);

  return (
    <>
      {!loaded ? (
        <Loading />
      ) : (
        <Router>
          <Switch>
            <Route path="/" component={Homepage} />
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
