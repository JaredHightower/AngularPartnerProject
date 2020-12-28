import { Injectable } from '@angular/core';

import { Task } from '../models/task';
//import { Level } from '../types/level.enum';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    {
      id: 0,
      taskName: 'Clean Room',
      taskDue: 'Monday',
      completedTask: true,
    },
    {
      id: 1,
      taskName: 'Wash dog',
      taskDue: 'Tuesday',
      completedTask: false,
    },
    {
      id: 2,
      taskName: 'Cook Dinner',
      taskDue: 'Tonight',
      completedTask: true,
    },
    {
      id: 3,
      taskName: 'Play Video Games',
      taskDue: 'Tonight',
      completedTask: false,
    },
  ];
  constructor() {}
  getTask = (): Observable<Task[]> => {
    return of(this.tasks);
  };
}
