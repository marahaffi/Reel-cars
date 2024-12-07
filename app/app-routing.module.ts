import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent} from './cars/cars.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
{ path: 'home', component: CarsComponent},
{ path: 'service', component: ServiceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
