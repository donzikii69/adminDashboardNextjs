import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src={"/astronaut.png"} alt="" fill className={styles.bg} />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}> Available Now</span>
          <h3 className={styles.title}>
            How to use a new version of the admin dashboard
          </h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            cupiditate asperiores ea dicta nemo aliquid praesentium delectus
            illo nesciunt adipisci facilis laborum, temporibus ipsam consequatur
            molestias accusamus nostrum deserunt eveniet.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
