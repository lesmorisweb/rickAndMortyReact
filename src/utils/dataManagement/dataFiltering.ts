import { ICard } from "../../components/card/interfaces"

export function getAllCharactersMapped(data: any): ICard[] {
    return data.map((resultValue: any)=> {
        return {
          name: resultValue.name,
          image: resultValue.image,
          location: resultValue.location.name
        } 
      } )
}

export function getFilteredCharacter(data: ICard[], textToFilter: string): ICard[]{
    return data.filter(element => {
      return element.name.toLocaleLowerCase().includes(textToFilter.toLocaleLowerCase())
    })
}