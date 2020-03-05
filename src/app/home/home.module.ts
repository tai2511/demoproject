

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { SpyeuthichComponent } from './spyeuthich/spyeuthich.component';
import { SpbanchayComponent } from './spbanchay/spbanchay.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: ' ', component: NewComponent },
{path: ' ',component: SpbanchayComponent},
{path: ' ',component: SpyeuthichComponent}
]
@NgModule({
    declarations: [NewComponent, SpbanchayComponent,SpyeuthichComponent ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
  })
  export class HomeModule { }
  