import React from 'react'
import participantsList from './participantsList'

export default function leftSessionList(props){
    const leftSession  = props.filter(prop => prop.inSession === false);
    
    console.log (leftSession);
};