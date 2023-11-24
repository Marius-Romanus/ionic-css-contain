import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  class = [
    'contain-none',
    'contain-size',
    'contain-layout',
    'contain-style',
    'contain-paint',
    'contain-size-layout',
    'contain-size-style',
    'contain-size-paint',
    'contain-layout-style',
    'contain-layout-paint',
    'contain-style-paint',
    'contain-size-layout-style',
    'contain-size-layout-paint',
    'contain-size-style-paint',
    'contain-layout-style-paint ',
    'contain-all'
  ]

  constructor() {}

}
