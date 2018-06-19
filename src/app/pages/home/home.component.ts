import { Component, OnInit } from '@angular/core';
import { ArticleModelResponse } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { UserService } from '../../services/user.service';
import { Tag } from '../../models/tag';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean;
  private articlesList: ArticleModelResponse[];
  private tags: Tag[];

  constructor(
    private articleService: ArticleService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.setAuthen();
    this.getAllArticle();
    this.getAllTags();
  }
  
  navigatePage() {

  }

  setAuthen() {
    this.userService.isAuthenticated.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    })
  }

  getAllArticle() {
    this.articleService.getAllGlobalArticles().subscribe(data => {
      this.articlesList = data;
    })
  }

  getAllTags() {
    this.articleService.getAllTag().subscribe(data => {
      this.tags = data;
      console.log(this.tags)
    })
  }
}
