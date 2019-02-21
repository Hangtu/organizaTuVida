import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HomePageText } from '../../constants/app-text';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  private title = HomePageText.title;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    $('.ui.modal').modal({
      closable  : false,
      inverted: true,
      transition: 'horizontal flip',
      duration: 800,
    })
    .modal('show');
  }

}
