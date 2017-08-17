import { NgModule } from '@angular/core';
import { BrandModule } from './brand/brand.module';
import { SerieModule } from './serie/serie.module';
import { CarModule } from './car/car.module';

@NgModule({
  imports: [
    BrandModule,
    SerieModule,
    CarModule
  ]
})
export class CarsModule {}
