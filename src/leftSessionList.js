// import React from 'react'


export default function leftSessionList(props){
    const leftSession  = props.filter(prop => prop.inSession === false);
    
    console.log (leftSession);
};