import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayTaskComponent } from './display-task/display-task.component';

@NgModule({
  declarations: [DisplayTaskComponent],
  imports: [CommonModule],
  exports: [DisplayTaskComponent],
})
export class TaskModule {}
