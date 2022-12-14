import { useEffect, useState } from "react"
import { ISearchBar } from "./ISearchBar"

export function SearchBar({onDataChangeFunction}: ISearchBar){
   
    return (<div>
        <input type="text" onChange={event => onDataChangeFunction(event.target.value)}/>
    </div>)
}