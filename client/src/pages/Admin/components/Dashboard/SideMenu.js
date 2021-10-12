import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.div`
  width: 20vw;
  min-width: 50px;
  height: 100%;
  min-height: 50vh;
  border-top-left-radius: 25px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, var(--color-blue), transparent);
  @media (max-width: 800px) {
    width: 10vw;
  }
`;

const ButtonGroup = styled.div`
  transition: all 0.3s ease-in-out;
  width: 20vw;
  min-width: 48px;
  height: 50px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;
  & a {
    text-decoration: none;
  }
  &.active {
    border-bottom: 1px solid var(--color-blue-light);
    height: 150px;
  }
  @media (max-width: 800px) {
    width: 10vw;
  }
`;

const DashButton = styled.button`
  transition: all 0.3s ease-in-out;
  position: relative;
  font-family: "Quick-Bold", Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  padding: 0;
  color: var(--color-blue);
  cursor: pointer;
  height: 50px;
  width: 18vw;
  min-width: 48px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  & svg {
    margin: 0 15px;
  }
  &.dash-content {
    color: var(--color-white);
    background: none;
    border: none;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    &.active {
      color: var(--color-blue);
      border: 2px solid var(--color-blue-light);
      border-right: none;
      background-color: var(--color-white);
    }
  }
  &.dash-crud {
    border: none;
    background: none;
    color: var(--color-blue-light);
    font-size: 0.8rem;
    text-align: left;
    &.active {
      color: var(--color-white);
    }
  }
  @media (max-width: 800px) {
    width: 9.5vw;
    justify-content: center;
    & svg {
      margin: 0 4px;
    }
    & p {
      display: none;
    }
  }
`;

const Disconnect = styled.button`
  height: 50px;
  width: max-content;
  min-width: 50px;
  border: 2px solid var(--color-warm);
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: flex-end;
  margin-top: 50vh;
  background-color: var(--color-white);
  color: var(--color-warm);
  font-size: 1.5rem;
  font-family: "Quick-Bold", Arial, Helvetica, sans-serif;
  & svg {
    margin: 0 0 0 15px;
  }
  & p {
    margin: 0 15px;
  }
  @media (max-width: 800px) {
    width: 9.5vw;
    justify-content: center;
    & svg {
      margin: 0 4px;
    }
    & p {
      display: none;
    }
  }
`;

export default function SideMenu() {
  const history = useHistory();

  function handleDisconnect() {
    localStorage.clear();
    history.push("/admin/login");
  }

  return (
    <Menu>
      <ButtonGroup
        className={
          history.location.pathname === `/admin/dashboard/artworks` ||
          history.location.pathname === `/admin/dashboard/artworks/create` ||
          history.location.pathname === `/admin/dashboard/artworks/manage`
            ? "active"
            : ""
        }
      >
        <Link to={`/admin/dashboard/artworks`}>
          <DashButton
            className={
              history.location.pathname === `/admin/dashboard/artworks` ||
              history.location.pathname ===
                `/admin/dashboard/artworks/create` ||
              history.location.pathname === `/admin/dashboard/artworks/manage`
                ? "active dash-content"
                : "dash-content"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-palette"
              viewBox="0 0 16 16"
            >
              <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
            </svg>
            <p>Artworks</p>
          </DashButton>
        </Link>
        <Link to={`/admin/dashboard/artworks/create`}>
          <DashButton
            className={
              history.location.pathname === `/admin/dashboard/artworks/create`
                ? "active dash-crud"
                : "dash-crud"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
            <p>Create</p>
          </DashButton>
        </Link>
        <Link to={`/admin/dashboard/artworks/manage`}>
          <DashButton
            className={
              history.location.pathname === `/admin/dashboard/artworks/manage`
                ? "active dash-crud"
                : "dash-crud"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-wrench"
              viewBox="0 0 16 16"
            >
              <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z" />
            </svg>
            <p>Manage</p>
          </DashButton>
        </Link>
      </ButtonGroup>
      <ButtonGroup
        className={
          history.location.pathname === `/admin/dashboard/comics` ||
          history.location.pathname === `/admin/dashboard/comics/create` ||
          history.location.pathname === `/admin/dashboard/comics/manage`
            ? "active"
            : ""
        }
      >
        <Link to={`/admin/dashboard/comics`}>
          <DashButton
            className={
              history.location.pathname === `/admin/dashboard/comics` ||
              history.location.pathname === `/admin/dashboard/comics/create` ||
              history.location.pathname === `/admin/dashboard/comics/manage`
                ? "active dash-content"
                : "dash-content"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-grid-1x2"
              viewBox="0 0 16 16"
            >
              <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z" />
            </svg>
            <p>Comics</p>
          </DashButton>
        </Link>
        <Link to={`/admin/dashboard/comics/create`}>
          <DashButton
            className={
              history.location.pathname === `/admin/dashboard/comics/create`
                ? "active dash-crud"
                : "dash-crud"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
            <p>Create</p>
          </DashButton>
        </Link>
        <Link to={`/admin/dashboard/comics/manage`}>
          <DashButton
            className={
              history.location.pathname === `/admin/dashboard/comics/manage`
                ? "active dash-crud"
                : "dash-crud"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-wrench"
              viewBox="0 0 16 16"
            >
              <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z" />
            </svg>
            <p>Manage</p>
          </DashButton>
        </Link>
      </ButtonGroup>
      <Disconnect type="button" onClick={handleDisconnect}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-lock"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
        </svg>
        <p>Disconnect</p>
      </Disconnect>
    </Menu>
  );
}
