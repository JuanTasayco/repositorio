import { Component } from '@angular/core';
import { Router } from '@angular/router';
type Socials = 'github' | 'facebook' | 'linkedin' | 'whatsapp';

@Component({
  selector: 'app-svg-socials',
  templateUrl: './svg-socials.component.html',
})
export class SvgSocialsComponent {
  redirectTo(name: Socials) {
    const linksName = {
      github: 'https://github.com/JuanTasayco',
      facebook: 'https://www.facebook.com/SyStrix2/',
      linkedin:
        'https://www.linkedin.com/in/juan-jos%C3%A9-tasayco-ninaquispe-49198a13a/',
      whatsapp: 'https://wa.me/991758159',
    };

    if (linksName[name]) {
      window.open(linksName[name], '_blank');
    } else {
      window.location.reload();
    }
  }
  constructor() {}
}
