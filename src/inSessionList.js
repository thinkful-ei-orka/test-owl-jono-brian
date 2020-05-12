import React from 'react'
import participantsList from './participantsList'

export default function inSessionList(props){
    const inSession  = props.filter(prop => prop.inSession === true);
    
    //console.log (inSession);
};