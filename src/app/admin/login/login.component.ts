import { Component, Input, OnInit, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  @Input() accesslvl: string;
  public username: string;
  public password: string;
  public changing: string;
  constructor() {

  }

  ngOnInit() {
    this.changing = 'No !';
  }

  ngOnChanges() {
    this.changing = 'yes !';
  }
  ngOnDestroy() { }
  ngAfterViewInit() {
    this.changing = 'No !';
  }
}
