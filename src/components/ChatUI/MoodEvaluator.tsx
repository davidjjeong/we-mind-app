import { useState } from 'react';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import Button from '../Buttons/CustomButtonComponent';

const MoodEvaluator = () => {
    const [prompt, setPrompt] = useState<string>('');
    const [generation, setGeneration] = useState<string>('');

    return(
        <div className="flex flex-col items-center h-[100%]">
            <h1 className="text-[36px]">
                How do you feel today?
            </h1>
            {generation != "" && (
                (Number(generation) >= 80) ? (
                    <div className="flex flex-col items-center text-[#ff7488]">
                        <h1>😍</h1>
                        <h3 className="text-[#000]">Your estimated mood score is...</h3>
                        <h1>{generation}<span className="text-[#000] text-[24px]">/ 100</span></h1>
                    </div>
                ) : (Number(generation) >= 60) ? (
                    <div className="flex flex-col items-center text-[#E8719C]">
                        <h1>🙂</h1>
                        <h3 className="text-[#000]">Your estimated mood score is...</h3>
                        <h1>{generation}<span className="text-[#000] text-[24px]">/ 100</span></h1>
                    </div>
                ) : (Number(generation) >= 40) ? (
                    <div className="flex flex-col items-center text-[#D26EB1]">
                        <h1>😐</h1>
                        <h3 className="text-[#000]">Your estimated mood score is...</h3>
                        <h1>{generation}<span className="text-[#000] text-[24px]">/ 100</span></h1>
                    </div>
                ) : (Number(generation) >= 20) ? (
                    <div className="flex flex-col items-center text-[#BB6AC5]">
                        <h1>🥹</h1>
                        <h3 className="text-[#000]">Your estimated mood score is...</h3>
                        <h1>{generation}<span className="text-[#000] text-[24px]">/ 100</span></h1>
                    </div>
                ) : (
                    <div className="flex flex-col items-center text-[#A467D9]">
                        <h1>😭</h1>
                        <h3 className="text-[#000]">Your estimated mood score is...</h3>
                        <h1>{generation}<span className="text-[#000] text-[24px]">/ 100</span></h1>
                    </div>
                )
            )}
            <div className="grow" />
            <div>
                <input
                    className="bg-[#F7F7F7] h-[50px] w-[100%] max-w-[400px] rounded-full
                    pl-[12px] pr-[48px] outline-0"
                    placeholder="How do you feel today?"
                    value={prompt}
                    onChange={e => setPrompt(e.target.value)}
                />
                <Button
                    onClick={async () => {
                        await fetch("/api/chat/eval", {
                            method: "POST",
                            body: JSON.stringify({
                                prompt: prompt,
                            }),
                        }).then(response => {
                            response.json().then(json => {
                                setGeneration(json.text);
                            });
                        });
                    }}  
                    children={<ArrowUpCircleIcon className="inline-flex size-10 ml-[-50px] fill-[#FF7488]
                                                            hover:opacity-[0.8]" />} 
                />
            </div>
        </div>
    );
}

export default MoodEvaluator;