import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../../../models/article';
import { CompileShallowModuleMetadata } from '@angular/compiler';
@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnInit {

  constructor() { }
  @Input() article: Article;

  toggleFavorite(favorited: boolean) {
    console.log("toggleFavorite");
    this.article['favorited'] = favorited;

    if (favorited) {
      this.article['favoritesCount']++;
    } else {
      this.article['favoritesCount']--;
    }
  }
  ngOnInit() {
    console.log(this.article)
  }

}
