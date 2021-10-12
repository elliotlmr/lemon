import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Card = styled.div`
  height: 400px;
  min-width: 400px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-blue);
  border-radius: 25px;
  box-shadow: 0 1px 5px var(--color-dark);
`;

const Title = styled.h1`
  font-family: "Quick-Bold", Arial, Helvetica, sans-serif;
  font-size: 2rem;
  color: var(--color-white);
`;

const Input = styled.input`
  height: 45px;
  min-width: 300px;
  width: 50%;
  max-width: 600px;
  border: 2px solid var(--color-blue-light);
  border-radius: 25px;
  margin-top: 25px;
  padding-left: 15px;
  &:active,
  :focus {
    outline: 2px solid var(--color-yellow);
  }
`;

const Button = styled.button`
  height: 45px;
  min-width: 300px;
  width: 50%;
  max-width: 600px;
  background-color: var(--color-yellow);
  border: 2px solid var(--color-white);
  border-radius: 25px;
  margin-top: 50px;
  color: var(--color-blue);
  font-family: "Quick-Bold", Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  &:hover,
  :focus {
    background-color: var(--color-yellow-light);
  }
`;

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:1331/api/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        localStorage.removeItem("lemonToken");
        // 5 h === 18 000 000 ms
        const date = new Date().getTime();
        console.log(res.data);
        localStorage.setItem("lemonToken", res.data.access + date);
        setTimeout(() => {
          history.push("/admin/dashboard");
        }, 200);
      });
  }

  return (
    <Card>
      <Form autoComplete="on" id="auth-form">
        <Title>Administration :</Title>
        <Input
          type="email"
          autoComplete="on"
          placeholder="Email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          form="auth-form"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          Connexion
        </Button>
      </Form>
    </Card>
  );
}
