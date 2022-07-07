import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Navigation } from '../shared/navigation.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;
  Navigation = Navigation;
  @Output('route') private readonly _featureSelected =
    new EventEmitter<Navigation>();

  constructor() {}

  ngOnInit(): void {}

  onSelect(route: Navigation): void {
    this._featureSelected.emit(route);
  }
}
