import React, {useState, useEffect} from "react"



function Card ({image, name}){

    let angle = Math.random() * 90 - 45;
    let randomX = Math.random() * 40 - 20;
    let randomY = Math.random() * 40 - 20;
    const style = { 
        transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)` 
    };
 

 
    return(

    <img className="card" src={image} alt={name} style={style}></img>)


}

export default Card