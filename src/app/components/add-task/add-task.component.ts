import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  newTask: Task = new Task();

  addTask() {
    this.taskService
      .addTask(this.newTask)
      .subscribe((t) => this.router.navigate(['/task']));
    // window.location.reload();
  }

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    //window.location.reload();
  }
}
