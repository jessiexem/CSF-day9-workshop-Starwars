import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsDetails } from '../models';
import { StarWarsService } from '../services/starwars.service';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.css']
})
export class FilmsDetailsComponent implements OnInit {

  filmsDetail!: FilmsDetails

  constructor(private starwarsSvc: StarWarsService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    const index = this.ar.snapshot.params['id']
    console.info("detailsComponent:", this.starwarsSvc.filmsList)

    //get variable from service
    this.filmsDetail = this.starwarsSvc.filmsList[index-1]
  }

}
