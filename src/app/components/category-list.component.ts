import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterDetails, FilmsDetails } from '../models';
import { StarWarsService } from '../services/starwars.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  characterDetails!: CharacterDetails[] 
  filmsDetails!: FilmsDetails[]
  categoryName!: string

  constructor(private starwarsSvc: StarWarsService, private ar : ActivatedRoute) { }

  ngOnInit(): void {
    const categoryName = this.ar.snapshot.params['category']
    this.categoryName = categoryName
    if ((this.starwarsSvc.characterList.length==0 && categoryName==="people" ) || (this.starwarsSvc.filmsList.length==0 && categoryName==="films")) {
        this.starwarsSvc.search(categoryName)
      .then(
        result => {
          console.info("---category results:", result)
          if (categoryName === "people") {
            this.characterDetails = result
          } else if (categoryName === "films") {
            this.filmsDetails = result
          }
        }
      )
      .catch(
        error => {
          console.error('----error:', error);
        }
      )
    }
    else {
        if(categoryName === "people") {
          this.characterDetails = this.starwarsSvc.characterList
        } else if (categoryName === "films") {
          this.filmsDetails = this.starwarsSvc.filmsList
        }
    }
  }

}
