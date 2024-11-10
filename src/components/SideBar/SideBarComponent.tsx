import styles from './sidebar.module.css';
import { Squares2X2Icon, PencilSquareIcon } from '@heroicons/react/24/outline';

const SideBar = () => {
    return(
        <nav className={styles.sidebar}>
            <ul className="w-[90%] ml-[5%] flex flex-col justify-center">
                <li className={`${styles.navLink}`}>
                    <Squares2X2Icon className="size-6" />
                    Dashboard
                </li>
                <li className={`${styles.navLink}`}>
                    <PencilSquareIcon className="size-6" />
                    Journal
                </li>
            </ul>
        </nav>
    );
}

export default SideBar;