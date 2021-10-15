import styled from "styled-components";
import PrivateRoute from "../../../../routes/PrivateRoute";
import Creator from "./Creator";
import Manager from "./Manager";
import Expired from "./Expired";
import { useHistory, withRouter } from "react-router-dom";

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  overflow-y: scroll;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  font-family: "Quick-Bold", Arial, Helvetica, sans-serif;
  font-size: 2rem;
  color: var(--color-warm);
  justify-self: flex-start;
  margin: 25px 50px;
  position: absolute;
  top: 0;
  left: 0;
`;

function Board() {
  let history = useHistory();
  let contentType = history.location.pathname.split("/")[3];
  let toolType = history.location.pathname.split("/")[4];

  return (
    <Container>
      <Title>
        {toolType && toolType === "create"
          ? `Create ${contentType}`
          : toolType === "manage"
          ? `Manage ${contentType}`
          : `What's up ?`}
      </Title>
      <PrivateRoute
        path={[
          "/admin/dashboard/artworks/create",
          "/admin/dashboard/comics/create",
        ]}
        component={Creator}
        exact
      />
      <PrivateRoute
        path={[
          "/admin/dashboard/artworks/manage",
          "/admin/dashboard/comics/manage",
        ]}
        component={Manager}
        exact
      />
      <PrivateRoute path="admin/dashboard/expired" component={Expired} exact />
    </Container>
  );
}

export default withRouter(Board);
