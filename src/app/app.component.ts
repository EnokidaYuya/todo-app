import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskComponent],
  template: `<app-task></app-task>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-app';
}
