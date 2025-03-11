import { useState, useEffect } from "react";
import keroppi from "../images/keroppi.png";
import cinamoroll from "../images/cinamoroll.png";
import badzt from "../images/badzt.png";
import kuromi from "../images/kuromi.png";
import pochacco from "../images/pochacco.png";
import melody from "../images/mymelody.png";
import Card from "./Card";

export default function Cards(){
  
  const [cards, setCards] = useState(
    [
      { id: 1, img: keroppi, flipped: true, matched: false },
      { id: 1, img: keroppi, flipped: true, matched: false },
      { id: 2, img: cinamoroll, flipped: true, matched: false },
      { id: 2, img: cinamoroll, flipped: true, matched: false },
      { id: 3, img: badzt, flipped: true, matched: false },
      { id: 3, img: badzt, flipped: true, matched: false },
      { id: 4, img: kuromi, flipped: true, matched: false },
      { id: 4, img: kuromi, flipped: true, matched: false },
      { id: 5, img: pochacco, flipped: true, matched: false },
      { id: 5, img: pochacco, flipped: true, matched: false },
      { id: 6, img: melody, flipped: true, matched: false },
      { id: 6, img: melody, flipped: true, matched: false },
    ].sort(() => Math.random() - 0.5)
  );

  useEffect(() => {
      setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) => ({ ...card, flipped: false }))
        );
    }, 5000);
  }, []);

    const [selected, setSelected] = useState([]);
    const [moves, setMoves] = useState(0);
    const [matchedPairs, setMatchedPairs] = useState(0);


  function handleCardClick(index) {
    if (cards[index].flipped || selected.length === 2) return;
    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);
    setSelected([...selected, index]);

    if (selected.length === 1) {
      checkMatch(selected[0], index);
    }
  }

  function checkMatch(firstIndex, secondIndex) {
    const newCards = [...cards];
    setMoves((prevMoves) => prevMoves + 1);
  
    if (newCards[firstIndex].id === newCards[secondIndex].id) {
      newCards[firstIndex].matched = true;
      newCards[secondIndex].matched = true;
      setMatchedPairs((prevPairs) => prevPairs + 1);
      setSelected([]);
    } else {

      setTimeout(() => {
        newCards[firstIndex].flipped = false;
        newCards[secondIndex].flipped = false;
        setCards([...newCards]);
        setSelected([]);
      }, 1000);
    }
    setCards([...newCards]);
  }
  
  return (
    <>
        <div className="flex flex-col items-center">
            <p className="text-white font-bold text-xl mt-10">Memory Game Cards</p>
                <div className="flex gap-4 my-4 text-white font-bold">
                    <p className={`text-lg ${matchedPairs === 6 ? "opacity-100" : "opacity-0" }`}>Total Moves: {moves}</p>
                </div>
            <div className="grid grid-cols-3 gap-2 p-4">
                {cards.map((card, index) => ( 
                    <Card key={index} card={card} onClick={() => handleCardClick(index)} /> 
                    ))}
            </div>
        </div>
    </>
  );
};