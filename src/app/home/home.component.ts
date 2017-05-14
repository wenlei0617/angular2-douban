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
  private hotmoviesId = 'hot';
  private onlinemoviesId = 'online';
  private newmoviesId = 'new';
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getHotMovies(8).then(res => {
      this.hotMovies = res;
    }).catch(err => {
      console.log(err);
    });

    this.moviesService.getOnlineMovies(8).then(res => {
      this.onlineMovies = res;
    }).catch(err => {
      console.log(err);
    })

    this.moviesService.getNewMovies(8).then(res => {
      this.newMovies = res;
    }).catch(err => {
      console.log(err);
    })

  }
}
