import styled from "styled-components";
import PrivateRoute from "../../../../routes/PrivateRoute";
import Creator from "./Creator";
import Manager from "./Manager";
import Expired from "./Expired";

const Container = styled.div`
  height: 100%;
  min-height: 50vh;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
`;

export default function Board() {
  return (
    <Container>
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
