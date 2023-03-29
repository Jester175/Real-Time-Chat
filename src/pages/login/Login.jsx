import React, { useContext } from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import { context } from "../../context/Context";
import firebase from "firebase/compat/app";

export const LoginPage = () => {
  const { auth } = useContext(context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          container
          style={{ width: 400 }}
          alignItems={"center"}
          direction={"column"}
        >
          <Box p={5}>
            <Button
              onClick={login}
              style={{
                color: "rgb(101, 73, 212)",
                border: "1px solid rgb(101, 73, 212)",
              }}
            >
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
