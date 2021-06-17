import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaduserPageRoutingModule } from './caduser-routing.module';

import { CaduserPage } from './caduser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaduserPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CaduserPage]
})
export class CaduserPageModule {}
