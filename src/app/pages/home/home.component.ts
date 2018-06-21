import { Component, OnInit } from '@angular/core';
import { ArticleModelResponse, ArticleListConfig } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { UserService } from '../../services/user.service';
import { Tag } from '../../models/tag';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean;
  private articlesList: ArticleModelResponse[];
  private tags: Tag[];

  listConfig: ArticleListConfig = {
    type: 'all',
    filters: {}
  };

  constructor(
    private router: Router,
    private articleService: ArticleService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.setAuthen();
    this.getAllArticle();
    this.getAllTags();
  }

  setAuthen() {
    this.userService.isAuthenticated.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      if (isAuthenticated) {
        this.setList('feed');
      } else {
        this.setList('all');
      }
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
    })
  }

  setList(type: string = '', filters: Object = {}) {
    console.log(type, filters,this.isAuthenticated);
    if (type === 'feed' && !this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return;
    }

    // Otherwise, set the list object
    this.listConfig = { type: type, filters: filters };
  }
}
