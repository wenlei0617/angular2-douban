import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ MoviesService ]
})
export class HomeComponent implements OnInit {
  private hotMovies;
  private onlineMovies;
  private newMovies;
  private hotmoviesId = 108288;
  private onlinemoviesId = 108288;
  private newmoviesId = 108288;
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getHotMovies().then(res => {
      this.hotMovies = res;
    }).catch(err => {
      console.log(err);
    });

    this.moviesService.getOnlineMovies().then(res => {
      this.onlineMovies = res;
    }).catch(err => {
      console.log(err);
    })

    this.moviesService.getNewMovies().then(res => {
      this.newMovies = res;
    }).catch(err => {
      console.log(err);
    })

  }
}
