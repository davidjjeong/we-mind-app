import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Image
        src="/we-mind-logo.svg"
        height={300}
        width={300}
        alt="Logo"
      />
      <h1 className="mt-5">WeMind.</h1>
      <h2>
        Your personalized assistant designed to take care of your mind.
      </h2>
    </div>
  );
}
