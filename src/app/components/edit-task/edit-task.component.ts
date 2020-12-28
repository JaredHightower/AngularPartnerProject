import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../../models/task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  editTask: Task = new Task();

  saveTask() {
    this.taskService
      .editTask(this.editTask)
      .subscribe((tsk) => this.router.navigate(['task']));
  }

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.taskService.getTask(+param.id).subscribe;
    });
  }
}
