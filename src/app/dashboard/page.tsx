"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import SideBar from "@/components/SideBar/SideBarComponent";
import styles from "./dashboard.module.css";

export default function Dashboard() {
    const { data:session, status } = useSession();
    const user_first_name = session?.user?.name?.split(" ")[0]

    const [response, setResponse] = useState<string>("Hi there! How can I assist you?");
    const [value, setValue] = useState<string>("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)
    
    const handleSubmit = async (event:React.KeyboardEvent) => {
        if(event.key === "Enter"){
            await fetch("/api/chat", {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({userInput: value}),
            }).then((response) => response.json())
            .then((result: any) => {
                setResponse(result?.data?.choices[0]?.text);
            })
        }
    };

    if(status == "authenticated"){
        return(
            <div className={styles.dashboard}>
                <SideBar />
                <div className={styles.dashboardMain}>
                    <h1 className="mt-4 ml-10 text-[56px]">Hello, {user_first_name}! 👋</h1>
                    <input
                        className="mt-4 ml-10 border-2"
                        type="text"
                        value={value}
                        onChange={onChange}
                        onKeyDown={(e) => handleSubmit(e)}
                    />
                    <h3>{response}</h3>
                </div>
            </div>
        );
    }
}