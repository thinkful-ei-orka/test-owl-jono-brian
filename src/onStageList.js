import React from 'react'

import StageParticipant from './stageParticipant'

export default function onStageList(props){
    console.log(props);
    const onStage  = props.participants.filter(prop => prop.onStage === true);
    const onStageElement = onStage.map(element => (
        <StageParticipant key={element.id} name={element.name} avatar={element.avatar} onstage={element.onStage} />
    ));
    // let onStageElement = [];
    // for (let i = 0; onStage.length; i++) {
    //     onStageElement.push();
    // };
    console.log(onStage)
    console.log(onStageElement)
    return (
        <section className='person-on-stage'>
            {onStageElement}
        </section>
    )
};

