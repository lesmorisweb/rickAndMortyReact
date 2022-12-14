export interface ICard {
    image: string,
    name: string,
    location: string
}

export interface ICardsContainer {
    rickAndMortyData: ICard[]
}