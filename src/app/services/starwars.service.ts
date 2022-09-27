import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, map, Subject } from "rxjs";
import { CharacterDetails, FilmsDetails } from "../models";

const URL_BASE = "https://swapi.dev/api/"


@Injectable()
export class StarWarsService {
    
    //store the results in a variable
    characterList: CharacterDetails[] = new Array()
    filmsList: FilmsDetails[] = new Array()

    constructor (private http: HttpClient) {}

    search(searchTerm: string) {

        return firstValueFrom (
            this.http.get<any>(URL_BASE+searchTerm)
            .pipe(
                map((result) => {
                    if (searchTerm === "people") {
                        console.log("search term: ", searchTerm)
                        const characterDetailsList = result.results
                        console.log("results:" ,characterDetailsList)
                        this.characterList = characterDetailsList
                
                        return characterDetailsList
                    }
                    else if (searchTerm === "films"){
                        console.log("search term: films: ", searchTerm)
                        const filmsDetailsList = result.results
                        console.log("results:" ,filmsDetailsList)
                        this.filmsList = filmsDetailsList
                        return filmsDetailsList
                    }
                           
                        
                    
                })
            )
        )
    }

}