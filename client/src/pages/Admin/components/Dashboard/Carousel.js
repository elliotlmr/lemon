import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Preview = styled.img`
  transition: all 0.3s ease-in-out;
  z-index: 2;
  position: absolute;
  inset: 0;
  margin: auto;
  max-width: 50%;
  max-height: 50%;
  height: auto;
  width: auto;
  border-radius: 10px;
  filter: drop-shadow(0 0 1px var(--color-dark));
  transform: translateX(0);
  opacity: 0.2;
  &#focused-preview {
    z-index: 3;
    max-width: 80%;
    max-height: 80%;
    height: auto;
    width: auto;
    opacity: 1;
  }
  &#previous-preview {
    opacity: 0.2;
    max-width: 60%;
    max-height: 60%;
    height: auto;
    width: auto;
    transform: translateX(-8vw);
  }
  &#next-preview {
    opacity: 0.2;
    max-width: 60%;
    max-height: 60%;
    height: auto;
    width: auto;
    transform: translateX(8vw);
  }
`;

const SwitchBtn = styled.button`
  z-index: 5;
  cursor: pointer;
  height: 150px;
  width: 75px;
  position: absolute;
  top: calc(50% - 75px);
  border: none;
  border-radius: 10px;
  background: none;
  color: var(--color-warm);
  filter: drop-shadow(0 0 2px var(--color-dark));
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.2);
  }
  &.previous-btn {
    left: 1%;
  }
  &.next-btn {
    right: 1%;
  }
`;

export default function Carousel(props) {
  const links = props.links;
  const [index, setIndex] = useState(links.length - 1);
  const previews = document.getElementsByClassName("preview-img");
  let focused = [...previews][index] || [...previews][0];
  let previous =
    index - 1 === -1
      ? [...previews][[...previews].length - 1]
      : [...previews][index - 1];
  let next =
    index + 1 > [...previews].length - 1
      ? [...previews][0]
      : [...previews][index + 1];

  useEffect(() => {
    if ([...previews].length === 1) {
      focused.id = "focused-preview";
    }
    if ([...previews].length === 2) {
      focused.id = "focused-preview";
      previous.id = "previous-preview";
    }
    if ([...previews].length > 2) {
      if (focused !== undefined) focused.id = "focused-preview";
      if (previous !== undefined) previous.id = "previous-preview";
      if (next !== undefined) next.id = "next-preview";
    }

    console.log(focused, previous, next);
  }, [previews, focused, previous, next]);

  function handlePrevious() {
    if (focused) focused.id = "";
    if (previous) previous.id = "";
    if (next) next.id = "";
    setIndex(index - 1 === -1 ? [...previews].length - 1 : index - 1);
  }

  function handleNext() {
    if (focused) focused.id = "";
    if (previous) previous.id = "";
    if (next) next.id = "";
    setIndex(index + 1 > [...previews].length - 1 ? 0 : index + 1);
  }

  return (
    <Container>
      {links.map((link, i) => (
        <Preview key={i} src={link} className="preview-img" />
      ))}
      {links.length > 1 && (
        <>
          <SwitchBtn className="previous-btn" onClick={handlePrevious}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-chevron-compact-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
              />
            </svg>
          </SwitchBtn>
          <SwitchBtn className="next-btn" onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-chevron-compact-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
              />
            </svg>
          </SwitchBtn>
        </>
      )}
    </Container>
  );
}
