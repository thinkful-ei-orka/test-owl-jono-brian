import React from 'react'
import participantsList from './participantsList'
import AllParticipants from './AllParticipants'

export default function inSessionList(props){
    const inSession  = props.participants.filter(prop => prop.inSession === true && prop.onStage === false);
    
    //const inSession  = props.participants.filter(prop => prop.onStage === true);
    const inSessionElement = inSession.map(element => (
        <AllParticipants key={element.id} name={element.name} avatar={element.avatar} onstage={element.onStage} inSession={element.inSession} />
    ));
    
    return (
        <section className='person-in-session'>
            {inSessionElement}
        </section>
    )
};