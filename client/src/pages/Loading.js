import styled, { keyframes } from "styled-components";

const LoadAnimation = keyframes`
  from {
    width: 0;
  }
  20% {
    width: 40%;
  }
  40% {
    width: 60%;
  }
  to {
    width: 100%;
  }
`;

const FromTop = keyframes`
  from {
    transform: translateY(-100%) scale(1.5);
  }
  40% {
    transform: translateY(40%) scale(1.5);
  }
  80% {
    transform: translateY(40%) scale(1.5);
  }
  to {
    transform: translatey(0) scale(1);
  }
`;

const FromBot = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translatey(0);
    opacity: 1;
  }
`;

const FromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  
  to {
    transform: translateX(0);
  }
`;

const FromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  
  to {
    transform: translateX(0);
  }
`;

const FadeOut = keyframes`
  to {
    opacity: 0;
  }
`;

const MainContainer = styled.div`
  z-index: 100;
  //animation: ${FadeOut} 0.5s ease-in-out both 5s;
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-white);
`;

const Asset = styled.img`
  position: absolute;
  filter: drop-shadow(0 0 2px var(--color-blue));
  &.asset-sun {
    animation: ${FromTop} 2s ease-in-out;
    height: 15vh;
    width: 15vh;
    top: 2vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  &.asset-left-bush {
    animation: ${FromLeft} 1s ease-in-out;
    z-index: 5;
    bottom: 0;
    left: 0;
    height: 75vh;
  }
  &.asset-right-bush {
    animation: ${FromRight} 1s ease-in-out;
    z-index: 5;
    bottom: 0;
    right: 0;
    height: 75vh;
  }
  &.asset-lemons {
    animation: ${FromBot} 1.5s ease-in-out;
    bottom: 0;
    height: 50vh;
  }
  &.asset-one-lemon {
    position: relative;
    height: 50px;
    transform: scale(1.5);
  }
`;

const LoaderBar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  top: 40vh;
  width: 40%;
  height: 5px;
  background-color: var(--color-yellow-light);
  border-radius: 5px;
`;

const Loader = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: var(--color-blue);
  transform-origin: left;
  animation: ${LoadAnimation} 3s ease-in-out both;
  border-radius: 5px;
`;

export default function Loading() {
  return (
    <MainContainer>
      <Asset src="/assets/sun.png" className="asset-sun" />
      <Asset src="/assets/left-bush.png" className="asset-left-bush" />
      <Asset src="/assets/right-bush.png" className="asset-right-bush" />
      <Asset src="/assets/lemons.png" className="asset-lemons" />
      <LoaderBar>
        <Loader />
        <Asset src="/assets/one-lemon.png" className="asset-one-lemon" />
      </LoaderBar>
    </MainContainer>
  );
}
