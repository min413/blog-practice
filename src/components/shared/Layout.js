import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import SimpleMenu from './SimpleMenu';
import { useState } from 'react';

const Layout = ({children, activeMenu}) => {
    const [menuflag, setMenuflag] = useState(true);

    function onClickSwitch(){
        setMenuflag(!menuflag);
    }

    return (
        <div className={styles.container}>
            <Header onClick={onClickSwitch}/>
            <div className={styles.layout}>
                {menuflag ? <Menu activeMenu={activeMenu}/> : <SimpleMenu activeMenu={activeMenu}/>}
                <div className={menuflag ? styles.contents : styles.hideMenu}>{children}</div>
            </div>
        </div>
    )
}

export default Layout;