import { Component, OnInit, Input } from '@angular/core';
import {Article} from '../../../../models/article';
@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnInit {

  constructor() { }
  @Input() article: Article;
  
  ngOnInit() {
    console.log(this.article)
  }

}
