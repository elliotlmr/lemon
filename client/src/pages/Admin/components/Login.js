import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

const Card = styled.div`
  height: 60%;
  width: 40%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-yellow-light);
`;

export default function Login() {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  function handleSubmit() {
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
        // 5 h === 18 000 000 ms
        localStorage.clear();
        const date = new Date().getTime();
        console.log(res.data);
        localStorage.setItem("lemonToken", res.data.access + date);
        setToken(res.data.token);
        setTimeout(() => {
          history.push("/admin/dashboard");
        }, 200);
      });
  }

  return (
    <Card>
      <form>
        <input
          type="email"
          placeholder="Email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSubmit} />
      </form>
    </Card>
  );
}
