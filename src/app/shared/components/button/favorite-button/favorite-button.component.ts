import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../../../models/article';
import { ProfileService } from '../../../../services/profile.service';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { concatMap } from 'rxjs/operators/concatMap';
import { tap } from 'rxjs/operators/tap';
// import { of } from 'rxjs/observable/of';
import { ArticleService } from '../../../../services/article.service';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit {

  constructor(
    private articlesService: ArticleService,
    private userService: UserService,
    private router: Router
  ) { }
  @Input() article: Article;
  @Output() toggle = new EventEmitter<boolean>();
  isSubmitting = false;
  toggleFavorite() {
    this.isSubmitting = true;

    this.userService.isAuthenticated.pipe(concatMap(
      (authenticated) => {
        if (!authenticated) {
          this.router.navigateByUrl('/login');
          return of(null);
        }
        if (!this.article.favorited) {
          return this.articlesService.favorite(this.article.slug).pipe(tap(data => {
            this.isSubmitting = false;
            this.toggle.emit(true);
          },
            err => this.isSubmitting = false
          ));
        } else {
          return this.articlesService.unfavorite(this.article.slug).pipe(tap(data => {
            this.isSubmitting = false;
            this.toggle.emit(false);
          },
            err => this.isSubmitting = false
          ));
        }
      }
    )).subscribe();
  }

  ngOnInit() {
  }

}
