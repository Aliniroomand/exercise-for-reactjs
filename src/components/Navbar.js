import React from 'react';
import exampleLogo from '../images/exampleLogo.JPG'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <header className={styles.containerOfHeader}>
                <div>
                    <ul className={styles.listContainer}>
                        <li><Link to="/">Home page</Link></li>
                        <li><Link to="/Products">products</Link></li>
                        <li><Link to="/AboutUs">about Us</Link></li>
                    </ul>
                </div>
                <img className={styles.logo} src={exampleLogo} alt='logo'/>
            </header>
        </div>
    );
};

export default Navbar;