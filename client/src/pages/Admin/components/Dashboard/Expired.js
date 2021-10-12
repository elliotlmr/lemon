import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h1`
  font-family: "Quick-Bold", Arial, Helvetica, sans-serif;
  font-size: 2.5rem;
  color: var(--color-warm);
`;

const HomeLink = styled(Link)`
  font-family: "Quick", Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--color-warm);
`;

export default function Expired() {
  return (
    <Container>
      <Title>Session expired !</Title>
      {/* <HomeLink to="/admin/login">Who are you ?</HomeLink> */}
    </Container>
  );
}
