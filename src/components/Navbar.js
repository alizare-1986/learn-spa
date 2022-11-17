import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Navbar extends Component {
    render() {
        return (
            <div>
                 <ul>
        <li><Link to="/">HomePage</Link></li>
        <li><Link to="/blogs/ali">Blogs</Link></li>
        <li><Link  to="/products">Products</Link ></li>
        <li><Link  to="/aboutus" >About Us</Link></li>
      </ul>
            </div>
        );
    }
}

export default Navbar;