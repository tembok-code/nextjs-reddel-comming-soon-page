import dynamic from "next/dynamic";
import Script from "next/script";
import { useEffect } from "react";
import styles from "../styles/AnimatedIcons.module.css";


export default function AnimatedIcons() {
  return (
    <>
      <div id="iconsParent" className={styles.iconscontainer}></div>
    </>
  );
}
