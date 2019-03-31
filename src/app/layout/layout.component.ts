import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/state/login.service';
import {createLogin} from '../login/state/login.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
  }

}
