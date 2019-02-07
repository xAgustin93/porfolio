import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects:any = [
    {
      "type" : "e-commerce",
      "name" : "StoreCecotec",
      "url" : "http://www.storececotec.com/",
      "img" : "assets/img/proyects/e-commerce/storececotec.png"
    },
    {
      "type" : "e-commerce",
      "name" : "StoreOllasGM",
      "url" : "https://www.storeollasgm.com/",
      "img" : "assets/img/proyects/e-commerce/storeollasgm.png"
    },
    {
      "type" : "web",
      "name" : "Cecotec",
      "url" : "https://www.cecotec.es/",
      "img" : "assets/img/proyects/web/cecotec.png"
    },
    {
      "type" : "e-commerce",
      "name" : "CarolinaOrts",
      "url" : "https://www.carolinaorts.com/",
      "img" : "assets/img/proyects/e-commerce/carolinaorts.png"
    },
    {
      "type" : "web",
      "name" : "MrkConsultancy",
      "url" : "https://www.mrkconsultancy.com/",
      "img" : "assets/img/proyects/web/mrkconsultancy.png"
    },
    {
      "type" : "web",
      "name" : "NeksoDesign",
      "url" : "https://www.neksodesign.com/",
      "img" : "assets/img/proyects/web/neksodesign.png"
    },
    {
      "type" : "web",
      "name" : "TotalTalentHR",
      "url" : "https://www.totaltalenthr.com/",
      "img" : "assets/img/proyects/web/totaltalenthr.png"
    }
  ]

  constructor() {
    
  }

  ngOnInit() {
    
      $(document).ready(function() {

        setTimeout(function(){
          var filterizd = $('.projects-container').filterizr({
             //options object
          });
          
        }, 200);

          $('.controlls-container .btn-filter').on('click', function(){
            $('.controlls-container .btn-filter').removeClass('filter-active');
            $(this).addClass('filter-active');
          });

          $('.projects-container .project').on('mouseover', function(){
            console.log('hoverrr');
            
          });
      });
    
  }

}
