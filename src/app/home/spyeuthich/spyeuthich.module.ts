import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { SpyeuthichComponent } from './spyeuthich.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: SpyeuthichComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    SpyeuthichComponent
  ]
})
export class SpyeuthichModule {}