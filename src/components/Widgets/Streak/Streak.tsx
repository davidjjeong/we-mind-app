import { FireIcon } from "@heroicons/react/24/solid";

const Streak = () => {
    return(
        <div className="flex flex-row items-center gap-x-1">
            <FireIcon className="size-12" />
            <h1 className="text-[36px]">400</h1>
        </div>
    );
}

export default Streak;