import {
  Component,
  Input,
  Output,
  ContentChildren,
  HostListener,
  EventEmitter,
  OnInit
} from '@angular/core';

import { Tab } from './tab.component';

@Component({
  selector: 'tabset',
  template: `
    <section class="tab-set">
      <ul
        class="nav"
        [class.nav-pills]="vertical"
        [class.nav-tabs]="!vertical">
        <li
          *ngFor="let tab of tabs"
          [class.active]="tab.active">
          <a
            (click)="tabClicked(tab)"
            (click)="setList('feed')"
            class="btn"
            [class.disabled]="tab.disabled">
            <span>{{tab.title}}</span>
          </a>
        </li>
      </ul>
      <div class="tab-content">
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styleUrls: ['./tabs.component.scss']
})
export class Tabset implements OnInit {
  @Input() key = '';
  @Input() vertical;
  @Output() onSelect = new EventEmitter();
  @ContentChildren(Tab) tabs;

  ngAfterContentInit() {
    const tabs = this.tabs.toArray();
    const actives = this.tabs.filter(t => { return t.active });

    if(actives.length > 1) {
      console.error(`Multiple active tabs set 'active'`);
    } else if(!actives.length && tabs.length) {
      tabs[0].active = true;
    }
  }
  
  ngOnInit() {
    console.log('ta1111bs',this.onSelect);
    
  }
  tabClicked(tab) {
    console.log('tab', tab);
    
    const tabs = this.tabs.toArray();

    tabs.forEach(tab => tab.active = false);
    tab.active = true;

    this.onSelect.emit(tab);
  }

}

export const TabComponent = [
  Tabset,
  Tab
];