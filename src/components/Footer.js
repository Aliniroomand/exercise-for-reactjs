import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <p style={{textAlign:"center",backgroundColor:"gray",minWidth:"100vw",position:"fixed",bottom:"0",zIndex:"10"}}>All Rights Reserved 2023</p>
            </div>
        );
    }
}

export default Footer;