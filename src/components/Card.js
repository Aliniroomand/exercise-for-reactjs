import React, { Component, createElement } from 'react';
import styles from "../components/Card.module.css";
import up from "../images/up.png";
import down from "../images/down.png";

const sum= 0;

class Card extends Component {
constructor() {
    super();
    this.state={
        counter:0,
        
    }    
}
downHandler = () =>{
    if(this.state.counter >= 1) {
    this.setState(prevState => ({
        counter:prevState.counter -1,

}))}}
upHandler = ()=>{
    this.setState( prevState=>({
        counter:prevState.counter + 1,
    })

    )
}

    render() {
        const {image,name,price,title}=this.props;
        const{counter}=this.state;
        return (
            <div>
                <div className={styles.container}>
                    <img src={image} className={styles.productImage} onClick={this.explainAboutProduct}alt="product-image" />
                    <h3>{name}</h3>
                    <h3>{title}</h3>
                </div>
                
                <div className={styles.counter}>
                    <p>{price} 
                    { counter ? ` * ${counter} = ${counter *parseInt(price)} $` : ""}
                    </p>
                        <span className={styles.counterHandler}>
                        <img src={down} className={ !counter && styles.deactive} alt='down' onClick={this.downHandler}/>
                        <span>{counter}</span>
                        <img src={up}alt='up'  onClick={this.upHandler}/>
                        </span>
                </div>
                </div>
        );
    }
}

export default Card;
