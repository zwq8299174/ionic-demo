import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BrandPage } from './brand/brand';
import { SeriePage } from './serie/serie';
import { CarPage } from './car/car';

@NgModule({
  declarations: [
    BrandPage,
    SeriePage,
    CarPage
  ],
  imports: [
    IonicModule
  ],
  entryComponents:[BrandPage,SeriePage,CarPage]
})
export class CarsModule {}
