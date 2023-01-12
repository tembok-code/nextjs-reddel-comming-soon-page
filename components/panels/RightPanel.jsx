import { Box, Button, TextField, Typography } from "@mui/material";
import styles from "../../styles/RightPanel.module.css";
import SubscribeWidget from "../SubscribeWidget";

export default function RightPanel() {


  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Typography variant={"h1"}>
          Muy
          <br />
          Pronto!
        </Typography>
        <Box p={1} />
        <div className={styles.subtitle}>
          <p>
            La forma sencilla de <strong>Gestionar tus Proyectos</strong>
          </p>
        </div>
      </div>
      <div className={styles.item}>
        <p>
          Nos encontramos en etapa de prueba antes de lanzar{" "}
          <strong>Reddel™</strong> al mundo
        </p>
        <Box p={2} />
        <SubscribeWidget />
      </div>
    </div>
  );
}
