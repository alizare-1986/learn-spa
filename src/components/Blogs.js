import React, { Component } from 'react';
import queryString from "query-string";


class Blogs extends Component {
    parseQuery = ()=>{
const result = queryString.parse(this.props.location.search)
console.log(result)
    }
    render() {
        return (
            <div>
                <h1>Blogs</h1>
                <p>the author is {this.props.match.params.author}</p>
               <button onClick={this.parseQuery} >show query</button>
            </div>
        );
    }
}

export default Blogs;