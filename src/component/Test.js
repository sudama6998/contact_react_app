import React, { Component } from "react";

class Test extends Component {
    
    state={
        array:["string1","string2"],
        array1:["String3", "String4"]
    }
    // Concate Two Array -Sudama[01/06/2020]
    bindArray=(a1,a2)=>{
        var finalArray = a1.concat(a2);
        return <p>{finalArray}</p>
    }
    render() {
        const { array, array1 } = this.state
        return (
            <div>
                {this.bindArray(array, array1)}
            </div>
        );
    }
}

export default Test;