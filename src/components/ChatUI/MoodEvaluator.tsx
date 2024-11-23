import { useState } from 'react';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import Button from '../Buttons/CustomButtonComponent';
import Image from 'next/image';

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
                    <div className="flex flex-col items-center text-[#ff7488] mt-4">
                        <Image src="/emojis/starstruck.png" height={90} width={90} alt="Starstruck" />
                        <h3 className="text-[#000] mt-4">Your estimated mood score is...</h3>
                        <h1>{generation}<span className="text-[#000] text-[24px]">/ 100</span></h1>
                    </div>
                ) : (Number(generation) >= 60) ? (
                    <div className="flex flex-col items-center text-[#E8719C] mt-4">
                        <Image src="/emojis/smile.png" height={90} width={90} alt="Smile" />
                        <h3 className="text-[#000] mt-4">Your estimated mood score is...</h3>
                        <h1>{generation}<span className="text-[#000] text-[24px]">/ 100</span></h1>
                    </div>
                ) : (Number(generation) >= 40) ? (
                    <div className="flex flex-col items-center text-[#D26EB1] mt-4">
                        <Image src="/emojis/normal.png" height={90} width={90} alt="Normal" />
                        <h3 className="text-[#000] mt-4">Your estimated mood score is...</h3>
                        <h1>{generation}<span className="text-[#000] text-[24px]">/ 100</span></h1>
                    </div>
                ) : (Number(generation) >= 20) ? (
                    <div className="flex flex-col items-center text-[#BB6AC5] mt-4">
                        <Image src="/emojis/sad.png" height={90} width={90} alt="Sad" />
                        <h3 className="text-[#000] mt-4">Your estimated mood score is...</h3>
                        <h1>{generation}<span className="text-[#000] text-[24px]">/ 100</span></h1>
                    </div>
                ) : (
                    <div className="flex flex-col items-center text-[#A467D9] mt-4">
                        <Image src="/emojis/very_sad.png" height={90} width={90} alt="Very Sad" />
                        <h3 className="text-[#000] mt-4">Your estimated mood score is...</h3>
                        <h1>{generation}<span className="text-[#000] text-[24px]">/ 100</span></h1>
                    </div>
                )
            )}
            <div className="flex grow text-center items-center justify-center w-[100%]">
                {generation == "" && 
                <div className="flex flex-row justify-evenly w-[100%] my-[20px]">
                    <div className="opacity-50 hover:opacity-100">
                        <Image src="/emojis/starstruck.png" height={90} width={90} alt="Starstruck" />
                        <h3>Happy</h3>
                    </div>
                    <div className="opacity-50 hover:opacity-100">
                        <Image src="/emojis/very_sad.png" height={90} width={90} alt="Very Sad" />
                        <h3>Sad</h3>
                    </div>
                    <div className="opacity-50 hover:opacity-100">
                        <Image src="/emojis/angry.png" height={90} width={90} alt="Angry" />
                        <h3>Angry</h3>
                    </div>
                </div>
                }
            </div>
            <div className="w-[100%]">
                <input
                    className="bg-[#F7F7F7] h-[50px] w-[100%] rounded-full
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