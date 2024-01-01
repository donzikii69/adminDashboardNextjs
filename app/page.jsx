import Image from "next/image";
import styles from "./ui/homepage.module.css";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <div>
          <Image
            src="/baliklogo.png"
            alt=""
            width={200}
            height={200}
            className={styles.logo}
          />
        </div>
        <h1>Welcome to BalikCoffe</h1>
        <h1>Administration</h1>
        <Link href="/login">
          <button className={styles.button} onClick="">
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
