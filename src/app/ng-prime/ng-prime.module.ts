import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
@NgModule({
  declarations: [],
  imports: [GalleriaModule, ImageModule],
  exports: [GalleriaModule, ImageModule],
})
export class NgPrimeModule {}
