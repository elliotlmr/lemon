import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Container = styled.div``;

export default function Manager() {
  let history = useHistory();
  let path = history.location.pathname.split("/")[3];

  useEffect(() => {
    axios
      .get(
        `http://localhost:1331/api/${path}`
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
  }, [path]);

  return <Container></Container>;
}
