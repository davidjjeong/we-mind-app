"use client";
import { useSession } from "next-auth/react";
import { useChat } from "ai/react";
import SideBar from "@/components/SideBar/SideBarComponent";
import Widget from "@/components/Widgets/Widget";
import { MoodChart } from "@/components/Charts/MoodChart";
import styles from "./dashboard.module.css";
import MoodEvaluator from "@/components/ChatUI/MoodEvaluator";

export default function Dashboard() {
    const { data:session, status } = useSession();
    const user_first_name = session?.user?.name?.split(" ")[0]

    const {messages, input, handleInputChange, handleSubmit} = useChat({
        api: "api/chat/talk",
    });

    if(status == "authenticated"){
        return(
            <div className={styles.dashboard}>
                <SideBar />
                <div className={styles.dashboardMain}>
                    <h1 className="text-[56px] mb-5">Hello, {user_first_name}! 👋</h1>
                    <div className="flex flex-row gap-x-2">
                        <Widget textColor="#000" bgColor="#FFF"
                            heading="Weekly Mood" headingSize="36px" children={<MoodChart />} 
                        />
                        <Widget textColor="#000" bgColor="#FFF"
                            children={<MoodEvaluator />}
                        />
                    </div>
                    {messages.map((message) =>
                    message.role === 'assistant' ? (
                        <div key={message.id}>
                            {message.content}
                        </div>
                    ) : (
                        <div key={message.id}>
                            {message.content}
                        </div>
                    )
                    )}
                    <form onSubmit={handleSubmit}>
                        <input
                        placeholder="Type in your mood today..."
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={(e) => handleSubmit(e)}
                        />
                    </form>
                </div>
            </div>
        );
    }
}