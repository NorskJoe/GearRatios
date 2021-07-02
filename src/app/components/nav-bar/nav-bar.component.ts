import { Component, OnInit, Input } from '@angular/core';
import { ButtonType } from 'src/app/models/button.model';
import { NavLink } from 'src/app/models/navigation.model';
import { NAVIGATION_LINKS } from 'src/app/utils/constants';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() navigationPages: NavLink[];
  buttonTypes =  ButtonType;

  constructor() { }

  ngOnInit(): void {
    if (!this.navigationPages) {
      this.navigationPages = NAVIGATION_LINKS;
    }
  }

  public onNavClick(index: number) {
    this.navigationPages.forEach((x,i) => {
      x.isActive = i === index;
    });
  }
}
