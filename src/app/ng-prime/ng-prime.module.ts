import { NgModule } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
@NgModule({
  declarations: [],
  imports: [GalleriaModule, ImageModule],
  exports: [GalleriaModule, ImageModule],
})
export class NgPrimeModule {}
