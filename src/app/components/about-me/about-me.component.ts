import { Component } from '@angular/core';
// import {TooltipPosition} from '@angular/material';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  

  public imgPerson:string = "assets/img/photo.jpg";

  public description:string = "Mi aspiración es, crear aplicaciones y organizar un equipo a gran escala, me encanta programa Front-end y Back-end ya que me gusta se autodidacta y no quedarme atacando en un campo, nunca se ha aprendido lo suficiente de nada, incluso el mas experto le queda mucho camino que recorrer por eso nunca hay que dejar de aprender, en pocas palabras soy yo un chico normal con ganas de mejorar cada día mas."

  public name:string = "Francisco Agustín";
  public lastname:string = "Navarro Galdon";
  public address:string = "Calle 14 de Abril, 9";
  public province:string = "Valencia";
  public city:string = "Puerto de Sagunto";
  public cp:string = "46520";
  public phone:string = "691554232";
  public email:string = "xAgustin93@gmail.com";

  constructor() { }

  downloadCv = {
    'placement': 'left',
    'show-delay': 500,
    'tooltip-class': 'tooltip-about-me'
  }
  sendEmail = {
    'placement': 'left',
    'show-delay': 500,
    'tooltip-class': 'tooltip-about-me'
  }
  github = {
    'placement': 'left',
    'show-delay': 500,
    'tooltip-class': 'tooltip-about-me'
  }
  linkedin = {
    'placement': 'left',
    'show-delay': 500,
    'tooltip-class': 'tooltip-about-me'
  }

  

}