import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayTaskComponent } from './display-task/display-task.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DisplayTaskComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [DisplayTaskComponent],
})
export class TaskModule {}
