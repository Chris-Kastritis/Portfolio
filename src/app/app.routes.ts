import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './aboutMe/aboutMe.component';
import { HomeComponent } from './home/home.component';
import { DnDGameBoardComponent } from './DnDGameboard/DnDGameboard.component';
import {ProjectsComponent } from './projects/projects.component'

export const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'aboutMe', component: AboutMeComponent
  },
  {
    path: 'gameboard', component: DnDGameBoardComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
