import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  workflows: any = [
    {
      icon: "fas fa-lightbulb",
      title: "Idea",
      description: "Desarrollo y evolución de una idea hasta tener algo claro y solido."
    },
    {
      icon: "fas fa-paint-brush",
      title: "Mockup",
      description: "Realizarcion de un mockup de todo el desarrollo de la idea que se ha tenido previamente."
    },
    {
      icon: "fab fa-angular",
      title: "Tecnologias",
      description: "Valorar el proyecto y seleccionar de las tecnologías mas apropiedas que se van a usar para el proyecto. (No siempre la ultima tecnología del mercado es la mejor)"
    },
    {
      icon: "fas fa-code",
      title: "Codigo",
      description: "Generar el entorno de trabajo con las tecnologías seleccionadas previamente y una vez correcto y repartido los módulos empezar con el código."
    },
  ]

  skills: any = [
    {
      "code": "HTML5",
      "icon": "fab fa-html5",
      style: {
        "background-color": "#4EB2E0",
        "width": "90%",
      }
    },
    {
      "code": "CSS3",
      "icon": "fab fa-css3-alt",
      style: {
        "background-color": "#4EB2E0",
        "width": "90%",
      }
    },
    {
      "code": "JS",
      "icon": "fab fa-js",
      style: {
        "background-color": "#4EB2E0",
        "width": "90%",
      }
    },
    {
      "code": "TypeScript",
      "icon": "",
      style: {
        "background-color": "#4EB2E0",
        "width": "90%",
      }
    },
    {
      "code": "jQuery",
      "icon": "",
      style: {
        "background-color": "#4EB2E0",
        "width": "80%",
      }
    },
    {
      "code": "Bootstrap",
      "icon": "",
      style: {
        "background-color": "#4EB2E0",
        "width": "80%",
      }
    },
    {
      "code": "Gulp",
      "icon": "fab fa-gulp",
      style: {
        "background-color": "#4EB2E0",
        "width": "65%",
      }
    },
    {
      "code": "MySQL",
      "icon": "fas fa-database",
      style: {
        "background-color": "#4EB2E0",
        "width": "60%",
      }
    },
    {
      "code": "Angular 7+",
      "icon": "fab fa-angular",
      style: {
        "background-color": "#4EB2E0",
        "width": "60%",
      }
    },
    {
      "code": "Node JS",
      "icon": "fab fa-node",
      style: {
        "background-color": "#4EB2E0",
        "width": "50%",
      }
    },
    {
      "code": "Express",
      "icon": "",
      style: {
        "background-color": "#4EB2E0",
        "width": "40%",
      }
    },
    {
      "code": "MongoDB",
      "icon": "fas fa-database",
      style: {
        "background-color": "#4EB2E0",
        "width": "40%",
      }
    },
    {
      "code": "Ionic 3",
      "icon": "",
      style: {
        "background-color": "#4EB2E0",
        "width": "50%",
      }
    },
    {
      "code": "PHP",
      "icon": "fab fa-php",
      style: {
        "background-color": "#4EB2E0",
        "width": "50%",
      }
    },
    {
      "code": "SASS",
      "icon": "fab fa-sass",
      style: {
        "background-color": "#4EB2E0",
        "width": "50%",
      }
    },
    {
      "code": "Smarty",
      "icon": "",
      style: {
        "background-color": "#4EB2E0",
        "width": "45%",
      }
    },
    {
      "code": "Java",
      "icon": "fab fa-java",
      style: {
        "background-color": "#4EB2E0",
        "width": "40%",
      }
    },
    {
      "code": "Ajax",
      "icon": "",
      style: {
        "background-color": "#4EB2E0",
        "width": "40%",
      }
    },
    {
      "code": "Android Studio",
      "icon": "fab fa-android",
      style: {
        "background-color": "#4EB2E0",
        "width": "40%",
      }
    },
    {
      "code": "C+",
      "icon": "",
      style: {
        "background-color": "#4EB2E0",
        "width": "20%",
      }
    },
    {
      "code": "Symfony 2",
      "icon": "",
      style: {
        "background-color": "#4EB2E0",
        "width": "15%",
      }
    }
  ]
  
  cmsList: any = [
    {
      "code": "PrestaShop",
      "icon": "fas fa-shopping-cart",
      style: {
        "background-color": "#e04e4e",
        "width": "80%",
      }
    },
    {
      "code": "WordPress",
      "icon": "fab fa-wordpress",
      style: {
        "background-color": "#e04e4e",
        "width": "65%",
      }
    },
    {
      "code": "Joomla",
      "icon": "fab fa-joomla",
      style: {
        "background-color": "#e04e4e",
        "width": "50%",
      }
    },
    {
      "code": "Odoo",
      "icon": "fab fa-joomla",
      style: {
        "background-color": "#e04e4e",
        "width": "30%",
      }
    }
  ]

  otherSkills: any = [
    {
      "code": "Adobe Photoshop",
      "icon": "",
      style: {
        "background-color": "#28a745",
        "width": "60%",
      }
    },
    {
      "code": "Adobe Premiere Pro",
      "icon": "",
      style: {
        "background-color": "#28a745",
        "width": "60%",
      }
    },
    {
      "code": "GIT",
      "icon": "fab fa-git",
      style: {
        "background-color": "#28a745",
        "width": "50%",
      }
    },
    {
      "code": "GitHub",
      "icon": "fab fa-github",
      style: {
        "background-color": "#28a745",
        "width": "50%",
      }
    },
    {
      "code": "SCRUM",
      "icon": "fas fa-people-carry",
      style: {
        "background-color": "#28a745",
        "width": "40%",
      }
    },
    {
      "code": "Confluence",
      "icon": "",
      style: {
        "background-color": "#28a745",
        "width": "30%",
      }
    },
    {
      "code": "Jira",
      "icon": "",
      style: {
        "background-color": "#28a745",
        "width": "30%",
      }
    },
    {
      "code": "Docket",
      "icon": "",
      style: {
        "background-color": "#28a745",
        "width": "30%",
      }
    }
  ]
  
  systemsManagement: any = [
    {
      "code": "Windows",
      "icon": "fab fa-windows",
      style: {
        "background-color": "#d6d200",
        "width": "90%",
      }
    },
    {
      "code": "MacOS",
      "icon": "fab fa-apple",
      style: {
        "background-color": "#d6d200",
        "width": "90%",
      }
    },
    {
      "code": "Ubuntu",
      "icon": "fab fa-linux",
      style: {
        "background-color": "#d6d200",
        "width": "60%",
      }
    },
    {
      "code": "Windows Server 2016 R2",
      "icon": "fab fa-windows",
      style: {
        "background-color": "#d6d200",
        "width": "40%",
      }
    }
  ]

  
  constructor() { }

  ngOnInit() {
  }

}
