import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewValidatorComponent } from './components/view-validator/view-validator.component';

const routes: Routes = [
  {
    path: 'viewvalidator',
    component: ViewValidatorComponent, // another child route component that the router renders
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
