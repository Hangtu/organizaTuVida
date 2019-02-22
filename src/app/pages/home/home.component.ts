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
  private segmentos = [];
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

  seleccionarSegmentos() {
    this.segmentos = HomePageData.segmentos;
    $('.ui.modal.modal2').modal(this.modalPropiertiesFirstTime).modal('show');
    $('.owl-carousel').owlCarousel({
      lazyLoad: true
    });
  }
}
