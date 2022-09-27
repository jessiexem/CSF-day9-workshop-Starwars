import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharacterDetails } from '../models';
import { StarWarsService } from '../services/starwars.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  
  characterDetail!: CharacterDetails

  constructor(private starwarsSvc: StarWarsService, private ar : ActivatedRoute) { }

  ngOnInit(): void {
    console.info("inDetailsComponent ngOnInit")
    const index = this.ar.snapshot.params['id']
    console.info("index:", index)
    console.log("detailsComponent:",this.starwarsSvc.characterList)

    //get variable from service
    this.characterDetail = this.starwarsSvc.characterList[index-1]
  }



}
