import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../../styles/LeftPanel.module.css";

const AnimatedIcons = dynamic(() => import("../AnimatedIcons"), {
  ssr: false,
});

const LeftPanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.reddellogo}>
        <Image
          src="/reddel_logo_outlined_white.png"
          alt=""
          width={50}
          height={50}
        ></Image>
        <p>Mavi Reddel</p>
      </div>
      <div className={styles.tembokcodelogo}>
        <a href="https://tembok.maviweb.app">
          <Image
            src="/tembok_code_white.png"
            alt="Developed by TEMBOK Code"
            title="Developed by TEMBOK Code"
            width={100}
            height={25}
          ></Image>
        </a>
      </div>
      <AnimatedIcons />
  </div>
  );
};

export default LeftPanel;
