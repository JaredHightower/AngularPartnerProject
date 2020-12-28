import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TaskService } from '../app/services/task.service';
import { TaskModule } from './modules/task/task.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TaskModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
