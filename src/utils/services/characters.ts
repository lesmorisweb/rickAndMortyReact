
import axios from "axios";
const baseUrl = "https://rickandmortyapi.com/api/character"
const caracters = "https://rickandmortyapi.com/api/character/?name=rick&status=alive"

export async function getAllCharacters() {
    return axios.get(baseUrl)
}

export async function getCharacterByName(name: string) {
    const url = baseUrl + `/?name=${name.toLowerCase()}`;
    return axios.get(url)
}