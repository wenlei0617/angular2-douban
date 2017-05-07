import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ MoviesService ]
})
export class AppComponent {
  private hotMovies;
  private onlineMovies;
  private newMovies;
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
