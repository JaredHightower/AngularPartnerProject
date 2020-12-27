import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//manully imported
import { RouterModule, Routes } from '@angular/router';
import { DisplayTaskComponent } from './modules/task/display-task/display-task.component';

const routes: Routes = [
  {
    path: 'task',
    component: DisplayTaskComponent,
  },
  {
    path: '',
    redirectTo: '/task',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
