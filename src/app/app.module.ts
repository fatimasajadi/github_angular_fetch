import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { ServersComponent } from './servers/servers.component'

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent, ServersComponent
  ],
  imports: [
    BrowserModule, FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
