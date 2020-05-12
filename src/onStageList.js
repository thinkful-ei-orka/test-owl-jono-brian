import React from 'react'
import AllParticipants from './AllParticipants'
import StageParticipant from './stageParticipant'

export default function onStageList(props){
    //console.log(props);
    const onStage  = props.participants.filter(prop => prop.onStage === true);
    const onStageElement = onStage.map(element => (
        <AllParticipants key={element.id} name={element.name} avatar={element.avatar} onstage={element.onStage} inSession={element.inSession}/>
    ));
    
    return (
        <section className='person-on-stage'>
            {onStageElement}
        </section>
    )
};

