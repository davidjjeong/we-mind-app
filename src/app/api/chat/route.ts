import { type CoreMessage, streamText } from "ai";
import { google } from "@ai-sdk/google";

export const maxDuration = 30;

export async function POST(req: Request){
    const {messages} : {messages: CoreMessage[]} = await req.json();

    const result = await streamText({
        model: google("models/gemini-1.5-flash-latest"),
        system: "You are WeMi, a helpful assistant that \
        will analyze user input and determine the user's \
        mood and current mental state. You will give a \
        personalized advice and suggestion with a heart-warming tone.",
        messages
    });

    return result.toAIStreamResponse();
}