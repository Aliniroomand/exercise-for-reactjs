import React, { Component } from 'react';
import styles from './Search.module.css';

class Search extends Component {
    constructor(){
        super();
        this.state={
            Text:""
        }
    }
    
    changeHandler = event => {
        this.setState ({
            Text : event.target.value,
        })
    }

    render(){
    return (
        <div className={styles.container}>
            <label >Search what do you want:</label>
            <input type="text" placeholder='-->search there<--'  value={this.state.Text} onChange={this.changeHandler}/>
        </div>
    );}
};

export default Search;