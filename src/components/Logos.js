import React from 'react';
import styles from './Logos.module.css'

import apple from '../images/apple-logo.png'
import samsung from '../images/samsung-logo.png'
import xiaomi from '../images/xiaomi-logo.png'

const Logos = () => {
    return (
        <div className={styles.container}>
            <h1>
                Who supports Us
            </h1>
            <div className={styles.containerOfLogos}>
            <img src={apple} alt='apple-logo'/>
            <img src={samsung} alt='samsung-logo'/>
            <img src={xiaomi} alt='xiaomi-logo'/>
            </div>
        </div>
    );
};

export default Logos;