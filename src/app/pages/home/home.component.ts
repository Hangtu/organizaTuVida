import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HomePageData } from '../../constants/app-text';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  private title = HomePageData.title;
  private segmentos = HomePageData.segmentos;
  private modalPropiertiesFirstTime = {
    closable  : false,
    inverted: true,
    transition: 'horizontal flip',
    duration: 500
  };

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    $('.ui.modal.modal1').modal(this.modalPropiertiesFirstTime).modal('show');
  }

  addSegment() {
   console.log('add');
  }

  seleccionarSegmentos() {
    $('.ui.modal.modal1').remove();
    $('.ui.modal.modal2').modal(this.modalPropiertiesFirstTime).modal('show');
    $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    });
  }
}
