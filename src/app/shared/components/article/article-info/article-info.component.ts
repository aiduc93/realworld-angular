import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../../../models/article';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.scss']
})
export class ArticleInfoComponent implements OnInit {
  @Input() article: Article;
  constructor() { }

  ngOnInit() {
  }

}
