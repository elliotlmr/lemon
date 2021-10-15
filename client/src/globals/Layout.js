import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Main = styled.main`
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
