import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ArticleModelResponse } from '../../models/article';
import { Tag } from '../../models/tag';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private articlesList: ArticleModelResponse[];
  private tags: Tag[];
  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.getAllArticle();
    this.getAllTags();
  }

  getAllArticle() {
    this.articleService.getAllGlobalArticles().subscribe(data=> {
      this.articlesList = data;
    })
  }

  getAllTags() {
    this.articleService.getAllTag().subscribe(data=> {
      this.tags = data;
      console.log(this.tags)
    })
  }
}
