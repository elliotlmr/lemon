import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  width: 45%;
  min-height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  position: relative;
  margin-left: 30px;
  padding: 0 10px;
  top: 8px;
  width: max-content;
  background-color: var(--color-white);
  color: var(--color-blue);
  font-family: "Quick-Bold", Arial, Helvetica, sans-serif;
  font-size: 1rem;
`;

const Input = styled.input`
  height: 40px;
  width: 80%;
  border: 2px solid var(--color-blue-light);
  border-radius: 25px;
  background-color: var(--color-white);
  padding-left: 15px;
  &:active,
  :focus {
    outline: initial;
  }
`;

const Textarea = styled.textarea`
  min-width: 80%;
  max-width: 100%;
  border: 2px solid var(--color-blue-light);
  border-radius: 25px;
  background-color: var(--color-white);
  padding-left: 15px;
  &:active,
  :focus {
    outline: initial;
  }
`;

const LinkContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AddLink = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 25px;
  border: 2px solid var(--color-blue-light);
  align-self: flex-end;
  padding: 0;
  position: absolute;
  bottom: 0;
  right: 1%;
  background-color: var(--color-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  &:hover {
    color: var(--color-blue-light);
  }
`;

const OneLink = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  & p {
    margin: 7px 5px 2px;
    font-size: 0.8rem;
  }
  & button {
    width: 20px;
    height: 20px;
    border-radius: 25px;
    border: 2px solid var(--color-blue-light);
    align-self: flex-end;
    padding: 0;
    right: 13%;
    background-color: var(--color-warm);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-white);
    &:hover {
      color: var(--color-blue-light);
    }
  }
`;

const Preview = styled.img`
  max-width: 80%;
  max-height: 80%;
  height: auto;
  width: auto;
`;

const SwitchBtn = styled.button`
  height: 100px;
  width: 100px;
  position: absolute;
  top: calc(50% - 50px);
`;

export default function Creator() {
  let history = useHistory();
  let path = history.location.pathname.split("/")[3];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [material, setMaterial] = useState("");
  const [links, setLink] = useState([]);

  function handleSubmit() {
    axios
      .post(
        `/${path}`,
        {
          title,
          description,
          material,
          links,
        }
        // {
        //   headers: { 'Authorization':  }
        // }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLink(e) {
    let inputValue = document.getElementById("link-input").value;
    e.preventDefault();
    setLink((links) => [...links, inputValue]);
    console.log("links", links);
  }

  return (
    <>
      <Container>
        <Form>
          <Label>Title :</Label>
          <Input
            type="text"
            placeholder="..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Label>Description :</Label>
          <Textarea
            name="description"
            placeholder="..."
            rows="4"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <Label>Materials :</Label>
          <Input
            type="text"
            placeholder="..."
            value={material}
            onChange={(e) => {
              setMaterial(e.target.value);
            }}
          />
          <LinkContainer>
            <Label>Links :</Label>
            <Input type="url" placeholder="..." id="link-input" />
            <AddLink onClick={handleLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
              </svg>
            </AddLink>
          </LinkContainer>
          {links.map((link, i) => (
            <OneLink key={i}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setLink(links.filter((array) => array !== link));
                  console.log(
                    Number(
                      localStorage.getItem("lemonToken").split("lemonAccess")[1]
                    ) + 18000000,
                    typeof new Date().getTime(),
                    Number(
                      localStorage.getItem("lemonToken").split("lemonAccess")[1]
                    ) +
                      18000000 -
                      new Date().getTime()
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                </svg>
              </button>
              <p>{link.length > 50 ? link.slice(0, 60) + "[...]" : link}</p>
            </OneLink>
          ))}
        </Form>
      </Container>
      <Container>
        {links.map((link, i) => (
          <Preview
            key={i}
            src={link}
            className={link === links[0] && "focused-preview"}
          />
        ))}
      </Container>
    </>
  );
}
