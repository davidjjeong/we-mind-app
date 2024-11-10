"use client";
import { useSession } from "next-auth/react";
import SideBar from "@/components/SideBar/SideBarComponent";
import styles from "./dashboard.module.css";

export default function Dashboard() {
    const { data:session, status } = useSession();
    const user_first_name = session?.user?.name?.split(" ")[0]

    if(status == "authenticated"){
        return(
            <div className={styles.dashboard}>
                <SideBar />
                <div className={styles.dashboardMain}>
                    <h1 className="mt-4 ml-10 text-[56px]">Hello, {user_first_name}! 👋</h1>
                </div>
            </div>
        );
    }
}