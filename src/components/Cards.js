import React, { Component } from 'react';

import Card from './Card';
import styles from "../components/Cards.module.css"

import phone1 from "../images/phone1.png"
import phone2 from "../images/phone2.png"
import phone3 from "../images/phone3.png"
import phone4 from "../images/phone4.png"

class Cards extends Component {
   constructor(){
    super();
    this.state= {
        // we think these information comes from server
        phoneData : [
            {id:1 , image: phone1 , name: "phone1", price:"100$"},
            {id:2 , image: phone2 , name: "phone2", price:"200$"},
            {id:3 , image: phone3 , name: "phone3", price:"300$"},
            {id:4 , image: phone4 , name: "phone4", price:"400$"},
        ]
    }
   }
   
    render() {

        return (
            <div className={styles.container}>
                {this.state.phoneData.map( phone =>
                    <Card key={phone.id} image={phone.image} name={phone.name} price={phone.price}/>)}
            </div>
        );
    }
}

export default Cards;