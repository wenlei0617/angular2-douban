import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import jsonp from 'jsonp';

import 'rxjs/add/operator/map';


@Injectable()
export class MoviesService {
    constructor(private jsonp: Jsonp ) {}

    getHotMovies(count=0) {
        var api_url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=0';
        
        if (count != 0) {
            api_url = api_url + '&count=' + count;
        }

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

    getOnlineMovies(count=0) {
        var api_url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?start=0';

        if (count != 0) {
            api_url = api_url + '&count=' + count;
        }

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

    getNewMovies(count=0) {
        var api_url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?start=0';

        if (count != 0) {
            api_url = api_url + '&count=' + count;
        }

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

    getDetailMovies(id) {
        let api_url = 'https://api.douban.com/v2/movie/subject/'+id;

        return new Promise(function(resolve, reject) {
            jsonp(api_url, null, function(err, data) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    getPhotoMovies(id) {
        let api_url = 'https://api.douban.com/v2/movie/celebrity/'+id+'/photos';

        return new Promise(function(resolve, reject) {
            jsonp(api_url, null, function(err, data) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
}