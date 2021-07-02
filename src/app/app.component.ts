import { Component } from '@angular/core';
import { GITHUB_LINK, NAVIGATION_LINKS } from './utils/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  NavigationLinks = NAVIGATION_LINKS;
  GitHubLink = GITHUB_LINK;
}
