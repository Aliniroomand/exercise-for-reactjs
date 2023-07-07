import React from 'react';
import exampleLogo from '../images/exampleLogo.JPG'
import styles from "./Navbar.module.css"


const Navbar = () => {
    return (
        <div>
            <header className={styles.containerOfHeader}>
                <div>
                    <ul className={styles.listContainer}>
                        <li>Home page</li>
                        <li>products</li>
                        <li>contact Us</li>
                    </ul>
                </div>
                <img className={styles.logo} src={exampleLogo} alt='logo'/>
            </header>
        </div>
    );
};

export default Navbar;