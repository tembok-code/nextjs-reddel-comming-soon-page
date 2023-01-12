import styles from "../../styles/Layout.module.css";
import LeftPanel from "../panels/LeftPanel";
import RightPanel from "../panels/RightPanel";

export const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <LeftPanel />
      </div>
      <div className={styles.item}>
        <RightPanel />
      </div>
    </div>
  );
};
