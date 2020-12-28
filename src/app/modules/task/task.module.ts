import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayTaskComponent } from './display-task/display-task.component';
import { HttpClientModule } from '@angular/common/http';
//import { Task } from 'src/app/models/task';
import { from } from 'rxjs';

@NgModule({
  declarations: [DisplayTaskComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [DisplayTaskComponent],
})
export class TaskModule {}
