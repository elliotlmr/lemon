import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  width: 100vw;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FooterLink = styled(Link)`
  margin: 15px;
  font-size: 1rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLink to="/legals">Legal Terms</FooterLink>
      <FooterLink to="/admin">Administration</FooterLink>
    </FooterContainer>
  );
}
