import { Injectable } from '@angular/core';
import { ArticleModelResponse } from '../models/article';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private apiService: ApiService,
  ) { }

  getAllGlobalArticles(): Observable<ArticleModelResponse[]> {
    return this.apiService.get('/articles?limit=10&offset=0').pipe(map(data => {
      return data['articles'];
    }));
  }
}
