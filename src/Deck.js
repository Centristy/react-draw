import React, { useState, useEffect } from "react";
import axios from "axios";
import './Deck.css'
import Card from '../src/Card'


function Deck() {

    const [cards, setCards] = useState([]);
    const [isShuffling, setIsShuffling] = useState(false);
    const [newDeck, setNewDeck] = useState(null);

    useEffect(function fetchUserWhenMounted() {
      async function fetchDeck() {
        const newDeck = await axios.get(
          "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
        setNewDeck(newDeck.data);
      }
      fetchDeck();}, []);
    
      async function fetchCard() {
        try{
        let newCard = await axios.get(`https://deckofcardsapi.com/api/deck/${newDeck.deck_id}/draw/?count=1`);
        
        if(newCard.data.remaing === 0) throw new Error ("No more cards in deck!")


        setCards(cards => [...cards, newCard.data.cards[0]]);

      } catch (err) {
        alert(err);
      }
    }
    
      

      async function shuffleDeck(){

        setIsShuffling(true);

        try{

        await axios.get(`https://deckofcardsapi.com/api/deck/${newDeck.deck_id}/shuffle/`)
        setCards([])
        } catch (err) {
          alert(err)
        } finally {
          setIsShuffling(false)
        }

      }



    return(
    <>
    <div className="deck">{

        cards.map(card => (<Card key={card.id} name={card.name} image={card.image} />
        
        ))}

    
    </div>

        <button className="drawcard"  disabled={isShuffling} onClick={fetchCard}>Draw a Card </button>
        <button className="shuffleDeck" onClick={shuffleDeck}>Shuffle </button>
    </>
    )
}


export default Deck;