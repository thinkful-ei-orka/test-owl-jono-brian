import React from 'react';

function AllParticipant(props) {
    console.log(props);
    let statusText = ""
    if (props.onstage === true){
       statusText = 'on stage';
    } else if (props.inSession === true && props.onstage === false){
       statusText = 'in session';
    } else if (props.inSession === false) {
        statusText = 'left session';
    }
    console.log(statusText);
    return (
        <div>
            <img src={props.avatar} alt="Avatar"></img>
            <h2>{props.name}</h2>
            <h4>{statusText}</h4>
        </div>
    )
};

export default AllParticipant;