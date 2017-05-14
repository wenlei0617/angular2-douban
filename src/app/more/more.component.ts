import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css'],
  providers: [ MoviesService ]
})
export class MoreComponent implements OnInit {
  private MoviesList;

  constructor(
    private movies: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      switch(res.id) {
        case 'hot':
          this.movies.getHotMovies().then(res => {
            this.MoviesList = res;
          })
        break;
        case 'online':
          this.movies.getOnlineMovies().then(res => {
            this.MoviesList = res;
          })
        break;
        case 'new':
          this.movies.getNewMovies().then(res => {
            this.MoviesList = res;
          })
        break;
      }
    })

  }

}
