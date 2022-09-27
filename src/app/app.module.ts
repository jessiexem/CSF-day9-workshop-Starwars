import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category.component';
import { CategoryListComponent } from './components/category-list.component';
import { CharacterDetailsComponent } from './components/character-details.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StarWarsService } from './services/starwars.service';
import { FilmsDetailsComponent } from './components/films-details.component';

const appRoutes: Routes = [
  {path: '', component: CategoryComponent},
  {path: ':category', component: CategoryListComponent},
  {path: 'people/:id', component: CharacterDetailsComponent},
  {path: 'films/:id', component: FilmsDetailsComponent},
  {path: '**', redirectTo:'/', pathMatch:'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryListComponent,
    CharacterDetailsComponent,
    FilmsDetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, 
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
