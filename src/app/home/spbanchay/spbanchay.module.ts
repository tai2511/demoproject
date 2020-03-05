import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { SpbanchayComponent } from './spbanchay.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: SpbanchayComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    SpbanchayComponent
  ]
})
export class SpbanchayModule {}