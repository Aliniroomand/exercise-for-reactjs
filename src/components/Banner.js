import React from 'react';
import styles from "./Banner.module.css";
import bannerImage from "../images/bannerImage.png"

const Banner = () => {
    return (
        <div className={styles.bannerContainer}>
            <img src={bannerImage} className={styles.bannerImage} alt='bannerImage'/>
            <div className={styles.BannerText}>
               <h3> It's my First project in <h1>React</h1>
                Also it's without using </h3>
                <h4>"hooks" and "states"</h4>
            </div>
        </div>
    );
};

export default Banner;