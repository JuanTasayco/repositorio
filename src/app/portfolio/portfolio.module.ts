import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MyDescriptionComponent } from './pages/my-description/my-description.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { ChartsModule } from '../charts/charts.module';
import { ToScrollDirective } from './directives/to-scroll.directive';
import { SvgSocialsComponent } from './components/svg-socials/svg-socials.component';
import { SvgDevIconsComponent } from './components/svg-dev-icons/svg-dev-icons.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    MyDescriptionComponent,
    ProjectDescriptionComponent,
    ContactMeComponent,
    ToScrollDirective,
    SvgSocialsComponent,
    SvgDevIconsComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
    NgPrimeModule,
    ChartsModule,
    RouterModule,
  ],
})
export class PortfolioModule {}
