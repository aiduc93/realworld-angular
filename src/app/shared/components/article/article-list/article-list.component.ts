import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../../../../services/article.service';
import { Article, ArticleModelResponse, ArticleListConfig } from '../../../../models/article';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  loading: boolean = false;
  currentPage = 1;
  totalPages: Array<number> = [1];
  query: ArticleListConfig;
  articles: Article[] = [];

  @Input() limit: number;

  @Input()
  set config(config: ArticleListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }


  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    console.log('limit', this.limit);
  }

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = true;
    this.articles = [];
    console.log('runQuery', this.limit);

    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset = (this.limit * (this.currentPage - 1));
    }

    this.articleService.query(this.query).subscribe(data => {
      this.loading = false;
      this.articles = data.articles;
      this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (value, index) => index + 1);
    })
  }
}
