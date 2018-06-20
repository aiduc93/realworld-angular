import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { ArticlePost, ArticleModel, Article } from '../../models/article';
import { Router } from '@angular/router';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  // article:ArticlePost;
  articleForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private articleService: ArticleService
  ) {
    this.articleForm = this.formBuilder.group({
      title: "",
      body: "",
      description: "",
      tagList: null
    })
  }

  ngOnInit() {
  }

  handleSubmit() {
    const articleModel = new ArticleModel(this.articleForm.value);
    articleModel.tagList = articleModel.tagList.toString().split(',');
    const article = new ArticlePost(articleModel);
    this.articleService.addArticle(article).subscribe(data => {
      this.router.navigateByUrl('/');
    })
  }
}
