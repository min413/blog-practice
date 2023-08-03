import styles from './Menu.module.css';
import {Link} from 'react-router-dom';
import { TiHome } from 'react-icons/ti';
import { BiCheckDouble } from 'react-icons/bi';
import { MdSubscriptions } from 'react-icons/md';
import { FaFilter } from "react-icons/fa6";

const Menu = ({activeMenu}) => {
    return (
        <div className={styles.menu}>
            <Link to='/' 
            className={activeMenu === 'home' ? styles.focused : styles.link}>
                <TiHome className={styles.icon}/>
                <div className={styles.text}>홈</div>
            </Link>
{/*
            <Link to='/explore' 
            className={activeMenu === 'explore' ? styles.focused : styles.link}>
                <BiCheckDouble className={styles.icon}/>
                <div className={styles.text}>To Do List</div>
            </Link>

            <Link to='/subscription' 
            className={activeMenu === 'subscription' ? styles.focused : styles.link}>
                <MdSubscriptions className={styles.icon}/>
                <div className={styles.text}>구독</div>
            </Link>
    */}
            <Link to='/filterproject'
            className={activeMenu === 'filterproject' ? styles.focused : styles.link}>
                <FaFilter className={styles.icon}/>
                <div className={styles.text}>Filtering</div>
            </Link>
        </div>
    )
}

export default Menu;