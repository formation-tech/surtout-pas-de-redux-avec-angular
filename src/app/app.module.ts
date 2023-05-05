import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyothercomponentComponent } from './myothercomponent/myothercomponent.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MyothercomponentComponent, MycomponentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
