import { generateText } from "ai";
import { google } from "@ai-sdk/google";

export const maxDuration = 30;

export async function POST(req: Request){
    const { prompt } : { prompt: string } = await req.json();

    const { text } = await generateText({
        model: google("models/gemini-1.5-flash-latest"),
        system: "You are WeMi, a helpful assistant that will analyze \
        the prompt, which represents the user's current mood, and \
        give a score on a scale of 0 to 100. 0 is a score of the worst \
        mood, while 100 is a score of the best mood.",
        prompt
    });

    return Response.json({ text });
}