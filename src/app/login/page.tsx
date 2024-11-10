"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./login.module.css";
import Button from "@/components/Buttons/CustomButtonComponent";
import Popup from "@/components/Popup/PopupComponent";

export default function Login() {
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const res = await signIn("credentials", {
          email: formData.get("email"),
          password: formData.get("password"),
          redirect: false,
        });
        if (res?.error) {
          setError(res.error as string);
        }
        if (res?.ok) {
          return router.push("/dashboard");
        }
    };

    return(
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <section className={styles.loginSection}>
          <Image
            src="/wemind-new-logo.svg"
            height={150}
            width={150}
            alt="Logo"
          />
          <h1 className="text-[56px]">Welcome Back</h1>
          <h3 className="text-[18px]">
            New to WeMind?&nbsp;
            <Link className="text-[#FF9FAD]" href="/register">
              Embark on Your Journey
            </Link>
          </h3>
          <form className="w-[100%] h-[100%] flex flex-col mt-5" onSubmit={handleSubmit}>
            <label className="text-[24px] mb-3">Email</label>
            <input
              className="userInfo mb-5"
              name="email"
              type="email"
              placeholder="wemind@gmail.com"
            />
            <label className="text-[24px] mb-3">Password</label>
            <input
              className="userInfo mb-5"
              name="password"
              type="password"
              placeholder="Password"
            />
            <Button
              id="loginBtn"
              type="submit"
              height="60px"
              width="150px"
              radius="20px"
              bgColor="#BF94E4"
              fontColor="#FFF"
              fontSize="24px"
              children="Log in"
            />
          </form>
        </section>
        <Popup
          className={error ? `${styles.errorTrue} ${styles.errorFalse}` : `${styles.errorFalse}`}
          popupType="error"
          children={error}
        />
      </div>
    );
}