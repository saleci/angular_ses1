import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public firstname: string;
  public getaccess: string;
  public price: string;
  constructor() {
    this.firstname = 'ela';
  }

  ClearText() {
    this.firstname = '';
  }

}

