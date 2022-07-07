import { Component } from '@angular/core';
import { Navigation } from './shared/navigation.model';
import { STATE } from './success/success.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Navigation = Navigation;
  loadedRoute = Navigation.RECIPES;

  onNavigate(route: Navigation) {
    this.loadedRoute = route;
  }
}
