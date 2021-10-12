import styled from "styled-components";
import Board from "./Board";
import SideMenu from "./SideMenu";

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const DashContainer = styled.div`
  width: 100vw;
  min-height: 50vh;
  margin-top: 15vh;
  border-top: 2px solid var(--color-blue-light);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  flex-direction: row;
`;

export default function Dashboard() {
  return (
    <MainContainer>
      <DashContainer>
        <SideMenu />
        <Board />
      </DashContainer>
    </MainContainer>
  );
}
