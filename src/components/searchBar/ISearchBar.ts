export interface ISearchBar {
    onDataChangeFunction: tSearchFunction;
}

type tSearchFunction = (change: string)=> void;