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
      res.id;
      this.movies.getMoreMovies(res.id).then(r=>{
        console.log(r);
        this.MoviesList = r;
      }).catch(err => {
        console.log(err);
      })
    })

  }

}
