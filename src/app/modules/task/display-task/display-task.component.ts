import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/models/task';
@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css'],
})
export class DisplayTaskComponent implements OnInit {
  private taskRoute = 'http://localhost:3000/Tasks';
  public tasks: Task[];
  constructor(private http: HttpClient) {}

  getTasks() {
    //when callthing this you need to
    //specify what data types we expect to get from this route.
    //We then pass that data type in as a perameter of the method like <Task[]>
    this.http.get<Task[]>(this.taskRoute).subscribe((listTask) => {
      this.tasks = listTask;
      console.log('task:', this.tasks);
    });
  }

  ngOnInit(): void {
    this.getTasks();
  }
}
