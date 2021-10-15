import styled from "styled-components";
import Board from "./Board";
import SideMenu from "./SideMenu";

const MainContainer = styled.div`
  width: 100vw;
  height: 100%;
`;

const DashContainer = styled.div`
  width: 100vw;
  height: 100%;
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
