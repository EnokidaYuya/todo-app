import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  tasks: string[] = [];
  newTask : string = '';

  addTask() {
    if(this.newTask.trim()){
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

removeTask(index: number){
  this.tasks.splice(index, 1);
}

}
