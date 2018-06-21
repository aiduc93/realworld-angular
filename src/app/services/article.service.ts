import { Injectable } from '@angular/core';
import { Article, ArticleModelResponse, ArticlePost, ArticleListConfig } from '../models/article';
import { Tag } from '../models/tag';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
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

  getAllTag(): Observable<Tag[]> {
    return this.apiService.get('/tags').pipe(map(data => {
      return data['tags'];
    }));
  }

  addArticle(article): Observable<ArticlePost> {
    console.log("1", article)
    return this.apiService.post('/articles', article);
  }

  query(config: ArticleListConfig): Observable<{ articles: Article[], articlesCount: number }> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(config.filters)
      .forEach((key) => {
        params[key] = config.filters[key];
      });
    console.log('parmas', params);

    return this.apiService
      .get(
        '/articles' + ((config.type === 'feed') ? '/feed' : ''),
        new HttpParams({ fromObject: params })
      );
  }
}
