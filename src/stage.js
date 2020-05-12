import React from 'react'

import StageParticipant from './stageParticipant'

export default function onStageList(props){
    //console.log(props);
    const onStage  = props.participants.filter(prop => prop.onStage === true);
    const onStageElement = onStage.map(element => (
        <StageParticipant key={element.id} name={element.name} avatar={element.avatar} onstage={element.onStage} />
    ));
    
    return (
        <section className='person-on-stage'>
            {onStageElement}
        </section>
    )
};
