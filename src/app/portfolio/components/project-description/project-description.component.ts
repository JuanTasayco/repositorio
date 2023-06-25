import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

export interface ProjectDescriptions {
  title: string;
  description: string;
  imagen: string;
}

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: [],
})
export class ProjectDescriptionComponent implements OnInit {
  constructor() {}
  @Input('contenido') contentProjects: ProjectDescriptions[] = [];
  ngOnInit(): void {}
}
