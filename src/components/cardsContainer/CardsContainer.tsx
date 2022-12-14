import { Card } from "../card/Card";
import { ICard, ICardsContainer } from "../card/interfaces";
import "./cardsContainer.css"

export function CardsContainer({rickAndMortyData}:ICardsContainer) {
    return (
        <div className="cards-container">
        {
          rickAndMortyData.map((data, index) => 
            (<Card key={index} name={data.name} image={data.image} location={data.location} />)
          )
        }
      </div>
    )
}