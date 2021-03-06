import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import { LaunchMenuComponent } from './launch-menu/launch-menu.component';
import { SearchComponent } from './search/search.component';
import { LaunchBarComponent } from './launch-bar/launch-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [
    LaunchMenuComponent, 
    SearchComponent, 
    LaunchBarComponent
  ]
})
export class LauncherModule { }