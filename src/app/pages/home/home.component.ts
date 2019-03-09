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
  private showSegmentos = false;
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
    $('#modal1').modal({
      keyboard: false,
      backdrop: 'static',
    });
  }

  addSegment(item) {
   item.status = !item.status;
   $('.owl-carousel').trigger('refresh.owl.carousel');
  }

  seleccionarSegmentos() {
    this.showSegmentos = true;
    $('.owl-carousel').owlCarousel({
      items: 4,
      loop: false,
      margin: 10,
      nav: true,
      dots: false,
    });
  }
}
