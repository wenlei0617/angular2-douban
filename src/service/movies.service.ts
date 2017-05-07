import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import jsonp from 'jsonp';

import 'rxjs/add/operator/map';


@Injectable()
export class MoviesService {
    constructor(private jsonp: Jsonp ) {}

    getHotMovies() {
        let api_url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items';
        return new Promise(function(resolve, reject) {
            jsonp(api_url,null,function(err, data) {
                if ( err ) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }

    getOnlineMovies() {
        let api_url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items';

        return new Promise(function(resolve, reject) {
            jsonp(api_url,null,function(err, data) {
                if ( err ) {
                    reject(err);
                } else {
                    resolve(data);   
                }
            })
        })
    }

    getNewMovies() {
        let api_url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items';

        return new Promise(function(resolve, reject) {
            jsonp(api_url,null,function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }
}