import { Button, Paper } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { useAuthServices } from "../pageAuth/hooks/useAuthServices";
import { useCurrentUser } from "../pageAuth/hooks/useCurrentUser";
import { Container, Frame } from "../pageAuth/styles/styledComponents";
import { useUserServices } from "./hooks/useUserServices";

const Profile = () => {
  const currentUser = useCurrentUser();
  const { logout } = useAuthServices();
  const { deleteCurrentUser } = useUserServices();
  const history = useHistory();

  const logOutUser = () => {
    logout();
    //TODO: message a l'utilisateur
    history.push("/");
  };

  const deleteUserAccount = async () => {
    deleteCurrentUser();
    logOutUser();
  };

  return (
    <Container>
      <Frame>
        <Paper>
          <header>
            <h3>
              <strong>{currentUser.username}</strong> Profile
            </h3>
          </header>
          <p>
            <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)}{" "}
            ...{" "}
            {currentUser.accessToken.substr(
              currentUser.accessToken.length - 20
            )}
          </p>
          <p>
            <strong>Id:</strong> {currentUser.id}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
          <strong>Authorities:</strong>
          <ul>
            {currentUser.roles &&
              currentUser.roles.map((role, index) =>
                <li key={index}>{role}</li>
              )}
          </ul>
        </Paper>
        <Button
          variant="contained"
          style={{ margin: "15px 0px" }}
          onClick={logOutUser}
        >
          Déconnexion !
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={deleteUserAccount}
        >
          Supprimer le compte !
        </Button>
      </Frame>
    </Container>
  );
};

export default Profile;
