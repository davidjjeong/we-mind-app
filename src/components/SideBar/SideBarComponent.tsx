import styles from './sidebar.module.css';
import { Squares2X2Icon, PencilSquareIcon } from '@heroicons/react/24/outline';

const SideBar = () => {
    return(
        <nav className={styles.sidebar}>
            <ul className="flex flex-col justify-center pl-4 gap-y-7">
                <li className="flex items-center text-[#FFF] text-[18px] font-bold
                gap-x-1">
                    <Squares2X2Icon className="size-6" />
                    Dashboard
                </li>
                <li className="flex items-center text-[#FFF] text-[18px] font-bold
                gap-x-1">
                    <PencilSquareIcon className="size-6" />
                    Journal
                </li>
            </ul>
        </nav>
    );
}

export default SideBar;