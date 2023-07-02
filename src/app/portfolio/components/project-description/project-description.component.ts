import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

export interface ProjectDescriptions {
  title: string;
  description: string;
  imagenes: any[];
  tecnologias?: string;
  repositorio?: string;
  link?: string;
}

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: [],
})
export class ProjectDescriptionComponent implements OnInit {
  constructor() {}
  @Input('contenido') contentProjects: ProjectDescriptions[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  ngOnInit(): void {}
}
