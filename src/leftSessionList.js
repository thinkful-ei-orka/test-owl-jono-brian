import React from 'react'
import AllParticipants from './AllParticipants'

export default function leftSessionList(props){
    //const leftSession  = props.filter(prop => prop.inSession === false);
    //    const inSessionElement = inSession.map(element => (
//        <AllParticipants key={element.id} name={element.name} avatar={element.avatar} onstage={element.onStage} inSession={element.inSession} />

    const leftSession  = props.participants.filter(prop => prop.inSession === false);
    const leftSessionElement = leftSession.map(element => (
        <AllParticipants key={element.id} name={element.name} avatar={element.avatar} onstage={element.onstage} inSession={element.inSession} />
    ));
    
    return (
        <section className='person-left-stage'>
            {leftSessionElement}
        </section>
    )
};