import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articleForm: FormGroup;
  constructor(
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
    const article = this.articleForm.value;
 
    article.tagList = article.tagList.split(',');
    console.log('article', article);
    this.articleService.addArticle(article).subscribe(data => {
      console.log('data',data);
      
    })
  }

}
