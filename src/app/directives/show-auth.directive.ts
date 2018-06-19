import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from '../services/user.service';
@Directive({
  selector: '[appShowAuth]'
})
export class ShowAuthDirective implements OnInit {

  condition: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.isAuthenticated.subscribe(isAuthenticated => {
      (isAuthenticated && this.condition || !isAuthenticated && !this.condition) ? this.viewContainerRef.createEmbeddedView(this.templateRef) : this.viewContainerRef.clear();
    })
  }

  @Input() set appShowAuth(condition: boolean) {
    this.condition = condition;
  }
}
