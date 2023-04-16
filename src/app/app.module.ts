import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SideBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
