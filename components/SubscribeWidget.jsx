import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React, { useEffect, useState } from "react";
//
import styles from "../styles/SubscribeWidget.module.css";

// Firebase function to handle database
import { app, database } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
//
import Confetti from "react-confetti";
//

const SubscribeWidget = () => {
  //
  const dB = collection(database, "launch_subscriptions");
  //

  //******** */
  const [email, setemail] = useState("");

  const updateEmail = (event) => {
    setemail(event.target.value);
  };

  const [working, setworking] = useState(false);
  const saveEmail = async () => {
    try {
      setworking(true);
      await addDoc(dB, { created: Date.now(), email: email });
      setsubscribed(true);
    } catch (error) {
      alert("Error Adding");
    }
    setworking(false);
  };

  const [subscribed, setsubscribed] = useState(false);

  var fieldhtml = (
    <>
      <p>Inscríbete para más información</p>
      <Box p={1} />
      <form>
        <TextField
          required
          disabled={working}
          color={"secondary"}
          variant={"filled"}
          fullWidth
          size={"small"}
          placeholder={"me@email.com"}
          autoFocus={true}
          type={"email"}
          value={email}
          onChange={updateEmail}
          onSubmit={saveEmail}
        />
        <Box p={0.5} />
        <div style={{ textAlign: "right" }}>
          <LoadingButton
            loading={working}
            disabled={email === ""}
            color={"secondary"}
            variant={"outlined"}
            size={"small"}
            onClick={saveEmail}
          >
            Vamos!
          </LoadingButton>
        </div>
      </form>
    </>
  );

  var width = 1080;
  var height = 1080;
  useEffect(() => {
    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
    });
  }, []);
  var subscribedhtml = (
    <>
      <Confetti
        className={styles.confetti}
        width={width}
        height={height}
        numberOfPieces={100}
        initialVelocityY={5}
      />
      <div className={styles.listo} sx={{ textAlign: "center" }}>
        Listo! Estas en nuestra lista VIP!
      </div>
    </>
  );

  return subscribed ? subscribedhtml : fieldhtml;
};

export default SubscribeWidget;
