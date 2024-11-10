"use client";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { register } from "@/actions/register";
import styles from "./register.module.css";
import Button from "@/components/Buttons/CustomButtonComponent";
import Popup from "@/components/Popup/PopupComponent";


export default function Register() {
  const [error, setError] = useState<string>();
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const r = await register({
        email: formData.get("email"),
        password: formData.get("password"),
        name: formData.get("name")    
    });
    ref.current?.reset();
    if(r?.error){
        setError(r.error);
    } else {
        return router.push("/login");
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
        <section className={styles.loginSection}>
          <Image
            src="/wemind-new-logo.svg"
            height={150}
            width={150}
            alt="Logo"
          />
          <h1 className="text-[56px]">Join WeMind.</h1>
          <h3 className="text-[18px]">
            Take a moment for yourself today.&nbsp;
            <Link className="text-[#FF9FAD]" href="/login">
              Already our member?
            </Link>
          </h3>
          <form 
            className="w-[100%] h-[100%] flex flex-col mt-5"
            ref={ref}
            action={handleSubmit}>
            <label className="text-[24px] mb-3">Full Name</label>
            <input
              className="userInfo mb-5"
              name="name"
              type="text"
              placeholder="John Doe"
            />
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
              children="Sign up"
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