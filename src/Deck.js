import React, { useState, useEffect } from "react";
import axios from "axios";
import './Deck.css'
import Card from '../src/Card'


function Deck({newDeck}) {

    const [cards, setCards] = useState([]);


    
      async function fetchCard() {
        let newCard = await axios.get(`https://deckofcardsapi.com/api/deck/${newDeck.deck_id}/draw/?count=1`);
        
        setCards(cards => [...cards, newCard.data.cards[0]]);
    
      }

      async function shuffleDeck(){

        await axios.get(`https://deckofcardsapi.com/api/deck/${newDeck.deck_id}/shuffle/`)

        setCards([])


      }



    return(
    <>
    <div className="deck">

        {cards ? cards.map(card => (<Card key={card.id} name={card.name} image={card.image} />)) : <i>(No Cards...)</i>}

        
       
    
    </div>

        <button className="drawcard" onClick={fetchCard}>Draw a Card </button>
        <button className="shuffleDeck" onClick={shuffleDeck}>Shuffle </button>
    </>
    )
}


export default Deck;