import React from 'react';

function stageParticipant(props) {
    return (
        <div>
            <div>{props.name}</div>
            <img src={props.avatar} alt="Avatar"></img>
        </div>
    )
};

export default stageParticipant;