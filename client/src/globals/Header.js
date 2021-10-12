import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  z-index: 10;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 15vh;
  width: 100vw;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Button = styled(NavLink)`
  font-family: "Alex-brush", Arial, Helvetica, sans-serif;
  font-size: 3rem;
  color: var(--color-blue);
  text-decoration: none;
  margin: 0 25px;
`;

const NavSquare = styled.div`
  transition: all 0.3s ease-in-out;
  transform-origin: center;
  width: 25px;
  height: 25px;
  filter: drop-shadow(0 0 1px var(--color-blue-light));
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    opacity: 0;
  }
  &:hover {
    width: 75px;
    height: 75px;
    & p {
      opacity: 1;
    }
  }
  &.home-square {
    background-color: var(--color-yellow);
  }
  &.about-square {
    background-color: var(--color-yellow-dark);
  }
  &.artworks-square {
    background-color: var(--color-yellow-light);
  }
  &.comics-square {
    background-color: var(--color-yellow-soft);
  }
`;

const SquareText = styled.p`
  transition: all 0.4s ease-in-out;
  font-family: "Alex-brush", Arial, Helvetica, sans-serif;
  font-size: 2rem;
  color: var(--color-blue);
`;

const Sun = styled.img`
  height: 15vh;
  width: 15vh;
  margin-top: 10px;
  filter: drop-shadow(0 0 1px var(--color-blue-light));
  &:hover {
    filter: drop-shadow(0 0 5px var(--color-yellow-light));
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Navigation>
        <Button to="/">
          <NavSquare className="home-square">
            <SquareText>home</SquareText>
          </NavSquare>
        </Button>
        <Button to="/about">
          <NavSquare className="about-square">
            <SquareText>about</SquareText>
          </NavSquare>
        </Button>
        <Button to="/">
          <Sun src="/assets/sun.png" />
        </Button>
        <Button to="/artworks">
          <NavSquare className="artworks-square">
            <SquareText>arts</SquareText>
          </NavSquare>
        </Button>
        <Button to="/comics">
          <NavSquare className="comics-square">
            <SquareText>comics</SquareText>
          </NavSquare>
        </Button>
      </Navigation>
    </HeaderContainer>
  );
}
