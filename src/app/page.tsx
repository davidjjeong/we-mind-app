import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Buttons/CustomButtonComponent";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Image
        src="/wemind-new-logo.svg"
        height={300}
        width={300}
        alt="Logo"
      />
      <h1 className="mt-5">WeMind.</h1>
      <h2>
        Your personalized assistant designed to take care of your&nbsp;
        <span className="text-[#FF9FAD]">mind.</span>
      </h2>
      <Link className="mt-[60px]" href="/login">
        <Button
          id="loginBtn"
          height="60px"
          width="150px"
          radius="20px"
          bgColor="#BF94E4"
          fontColor="#FFF"
          fontSize="24px"
          children="Sign in"
        />
      </Link>
      <h3 className="mt-3">
        Don't have an account?&nbsp;
        <Link className="text-[#BF94E4]" href="/register">Sign Up</Link>
      </h3>
    </div>
  );
}
