import styles from './Header.module.css';
import youtube_logo from '../../data/youtube_logo.png';
import { FiMenu } from 'react-icons/fi';
import { PiAlienBold } from "react-icons/pi";
import {BiBriefcaseAlt2} from "react-icons/bi"
import { IoSearchOutline } from 'react-icons/io5';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import nike from '../../data/nike.png';

const Header = ({onClick}) => {
    return (
        <div className={styles.header}>
            <div className={styles.tab}>
                <FiMenu className={styles.icon} onClick={onClick}/>
                <BiBriefcaseAlt2 className={styles.iconMain}/>
            </div>
            
            <div className={styles.tab}>
                <BsGrid3X3Gap className={styles.icon}/>
                <HiOutlineDotsVertical className={styles.icon}/>
            </div>  
        </div>
    )
}

export default Header;