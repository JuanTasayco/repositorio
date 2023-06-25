import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MyDescriptionComponent } from './pages/my-description/my-description.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';


@NgModule({
  declarations: [
    HomeComponent,
    MyDescriptionComponent,
    MyProjectsComponent,
    ProjectDescriptionComponent,
    ContactMeComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
    ,SharedModule
  ]
})
export class PortfolioModule { }
