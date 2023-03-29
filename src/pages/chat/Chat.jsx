import React, { useContext, useEffect, useRef, useState } from "react";
import firebase from "firebase/compat/app";
import { context } from "../../context/Context";
import { Spinner } from "../../components/spinner";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Avatar, Button, Container, Grid, TextField } from "@mui/material";
import { IconEnter, IconRect } from "../../assets/images/icons/icons";
import styles from "./chat.module.css";

export const ChatPage = () => {
  const { auth, firestore } = useContext(context);
  const [user] = useAuthState(auth);
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );
  const [value, setValue] = useState("");

  const sendMessage = async () => {
    if (value) {
      firestore.collection("messages").add({
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setValue("");
    }
  };

  const bottom = useRef(null);

  useEffect(() => {
    bottom.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [messages]);

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50, marginTop: 20 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <div className={styles.screen}>
          {loading ? (
            <Spinner />
          ) : (
            messages.map((message) => (
              <div
                className={styles.message}
                ref={bottom}
                key={message.createdAt}
                style={{
                  margin: 20,
                  marginLeft: user.uid === message.uid ? "auto" : "10px",
                  width: "fit-content",
                  padding: 5,
                }}
              >
                <Avatar src={message.photoURL} className={styles.avatar} />
                <div className={styles["message-text"]}>
                  <div className={user.uid === message.uid ? styles.own : styles.alien}>
                    {message.displayName}
                  </div>
                  <div className={styles.text}>{message.text}</div>
                  {IconRect}
                </div>
              </div>
            ))
          )}
        </div>
        <Grid
          container
          style={{ width: "80%" }}
          alignItems={"flex-end"}
          gap={1}
          direction={"column"}
        >
          <div className={styles.composer}>
            <div className={styles["message-compose"]}>
              <TextField
              placeholder="Message"
                className={styles.textField}
                fullWidth
                maxRows={2}
                variant={"outlined"}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              {IconRect}
            </div>
            <Button className={styles.enter} onClick={sendMessage}>
              {IconEnter}
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
