import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() color: string;
  @Input() indicator: string;
  @Input() home: boolean;

  constructor() { }

  ngOnInit() {
  }

}
