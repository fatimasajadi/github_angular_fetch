import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'
import { SuccessAlertComponent } from './SuccessAlert/SuccessAlert.component'
import { WarningAlertComponent } from './WarningAlert/WarningAlert.component';
import { ToDoItemComponent } from './ToDoItem/ToDoItem.component';
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
