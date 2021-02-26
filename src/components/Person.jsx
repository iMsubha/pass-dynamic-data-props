import React from 'react';

function Person(props) {
    const displayStyle ={
        backgroundColor: "yellow",
        color: "red"
    }
    return (
            <div style={displayStyle}>
                <h3>Name:{props.name}</h3>
                <h4>Job:{props.job}</h4>
            </div>
    );
}

export default Person;