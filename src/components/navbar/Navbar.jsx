import React, { useContext } from "react";
import { AppBar, Toolbar, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/consts";
import { context } from "../../context/Context";
import { useAuthState } from "react-firebase-hooks/auth";

import styles from './navbar.module.css'

export const Navbar = () => {
  const {auth} = useContext(context);
  const [user] = useAuthState(auth);
  return (
    <AppBar color="transparent" position="static" className={styles.navbar}>
      <Toolbar>
        <Grid container justifyContent={"flex-end"} gap="10px">
          {user ? (
            <Button variant="outlined" onClick={() => auth.signOut()}>Exit</Button>
          ) : (
            <Link to={LOGIN_ROUTE}>
              <Button variant="outlined" color="success">
                Login
              </Button>
            </Link>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
