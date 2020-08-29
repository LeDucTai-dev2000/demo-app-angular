import { MovieListComponent } from './components/movie-list/movie-list.component';
import { AppRoutingModule } from './app.-routing.module';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, OnInit } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';

import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { MovieUpdateComponent } from './components/movie-update/movie-update.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


//Service
import { MovieService } from './../service/movie.service';
import { IndexComponent } from './components/index/index.component'

const appRoutes : Routes = [
  {
    path:'index',
    component:IndexComponent
  },
  {
    path:'movie-list',
    component: MovieListComponent
  },
{
  path:'movie-add',
  component: MovieAddComponent
},
{
  path:'movie-update',
  component: MovieUpdateComponent
},

];





@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieAddComponent,
    MovieUpdateComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule  {


}
