import React from 'react';
import styles from './Search.module.css';

const Search = () => {
    return (
        <div className={styles.container}>
            <label >Search what do you want:</label>
            <input placeholder='Write There '/>
        </div>
    );
};

export default Search;