import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//manully imported
import { RouterModule, Routes } from '@angular/router';
import { DisplayTaskComponent } from './components/display-task/display-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/task',
    pathMatch: 'full',
  },
  {
    path: 'task',
    component: DisplayTaskComponent,
  },
  {
    path: 'add',
    component: AddTaskComponent,
  },
  {
    path: 'edit/:id',
    component: EditTaskComponent,
  },
  {
    path: 'detail/:id',
    component: TaskDetailsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
