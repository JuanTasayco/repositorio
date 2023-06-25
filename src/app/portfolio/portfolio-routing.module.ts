import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyDescriptionComponent } from './pages/my-description/my-description.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'myDescription', component: MyDescriptionComponent },
      { path: 'myProjects', component: MyProjectsComponent },
      { path: 'contactMe', component: ContactMeComponent },
      { path: '**', redirectTo: 'myDescription' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
