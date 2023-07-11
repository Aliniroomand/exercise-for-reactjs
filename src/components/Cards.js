import React, { Component } from 'react';

import Card from './Card';
import styles from "../components/Cards.module.css"

import phone1 from "../images/phone1.png"
import phone2 from "../images/phone2.png"
import phone3 from "../images/phone3.png"
import phone4 from "../images/phone4.png"

class Cards extends Component {
    render() {

        return (
            <div className={styles.container}>
                <Card image={phone1} name="phone1" price="300$" />
                <Card image={phone2} name="phone2" price="400$" />
                <Card image={phone3} name="phone3" price="500$" />
                <Card image={phone4} name="phone4" price="600$" />
                
            </div>
        );
    }
}

export default Cards;