import { Component, Input, OnInit } from '@angular/core';
import { Constants } from '../../../configs/constants';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() color: string;
  @Input() indicator: string;
  constants: any;
  options: any;

  constructor() {
    this.constants = Constants;
    this.options = this.constants.Sidenav;
  }

  ngOnInit() {
  }

}
