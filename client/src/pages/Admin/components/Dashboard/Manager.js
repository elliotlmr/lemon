import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

export default function Manager() {
  const history = useHistory();
  let path = history.location.pathname.split("/")[3];

  useEffect(() => {
    axios
      .get(`http://localhost:1331/api/${path}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        //history.push("/admin/dashboard/expired");
      });
  }, [path, history]);

  return <Container></Container>;
}
