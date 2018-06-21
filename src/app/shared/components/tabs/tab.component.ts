import { Component, Input, Output,EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: 'tab',
  template: `
    <ng-content *ngIf="active"></ng-content>
  `
})
export class Tab implements OnInit {
  ngOnInit() {
    console.log('selectedTab', this.selectedTab);
    
  }
  @Input() key = '';
  @Input() title = '';
  @Input() active = false;
  @Input() disabled = false;
  @Output() selectedTab = new EventEmitter<string>();

  selectTab() {
    console.log('this.key');
    this.selectedTab.emit(this.key);
  }
}