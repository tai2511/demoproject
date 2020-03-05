import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { NewComponent } from './new.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: NewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    NewComponent
  ]
})
export class NewModule {}