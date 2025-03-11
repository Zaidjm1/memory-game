import React from "react";
import sanrio from '../images/sanrio.png'

export default function Card({ card, onClick }){
  return (

    <div className="relative w-24 h-30 md:w-32 md:h-40 cursor-pointer perspective" onClick={() => !card.matched && !card.flipped && onClick()}>

      <div className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${ card.flipped ? "rotate-y-180" : "" }`}>

        {card.flipped || card.matched ? (
          // front of the card
          <div className="absolute w-full h-full bg-white shadow-lg flex justify-center items-center rounded-lg">
            <img
              src={card.img}
              alt="Card"
              className="w-full h-full p-2 object-cover"
            />
          </div>

        ) : (

          // back of the card
          <div className="absolute w-full h-full bg-red-200 shadow-lg flex justify-center items-center rounded-lg">
            <img
              src={sanrio}
              alt="Card"
              className="w-full h-full p-2 object-cover"
            />
          </div>

        )}

      </div>
    </div>
  );
};
