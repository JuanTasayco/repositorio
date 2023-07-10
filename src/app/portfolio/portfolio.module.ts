import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MyDescriptionComponent } from './pages/my-description/my-description.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from '../charts/charts.module';

@NgModule({
  declarations: [
    HomeComponent,
    MyDescriptionComponent,

    ProjectDescriptionComponent,
    ContactMeComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
    NgPrimeModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
})
export class PortfolioModule {}
