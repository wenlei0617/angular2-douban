import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MoviesService } from './../../service/movies.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ MoviesService ]
})
export class DetailComponent implements OnInit {
  private movieDetail;

  constructor(
    private route: ActivatedRoute,
    private movies: MoviesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.movies.getDetailMovies(res.id).then(r => {
        console.log(r);
        this.movieDetail = r;
      })
    })
  }

}
