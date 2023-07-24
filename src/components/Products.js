import React, { Component } from 'react';
import styles from "./Products.module.css"

import axios from "axios"
import Card from './Card';


class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : [],
            isError : false,
        }
    }

    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
                .then(response => this.setState({
                    products : response.data
                }))
                .catch(error => this.setState({
                    isError:true})
                )
                
    }
    render() {
        return (
            <> 
            <h1 className={styles.titleOfPage}>our OTHER products  are:</h1>
                    {this.state.isError ? <h1 className={styles.error}>unfotunally an error occured<br></br>please try again later</h1> :
                    <div className={styles.container}>
                    {this.state.products.length 
                        ? this.state.products.map(products => <Card  key={products.id} title={products.title} image ={products.image} price={products.price} name={products.name}/>) 
                        : <h2>loading ...</h2>
                    }
                </div>
                    }
            </>
        );
    }
}

export default Products;