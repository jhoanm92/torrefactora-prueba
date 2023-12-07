import { TaskService } from 'src/app/service/task.service';
import { StatusService } from './../../service/status.service';

import { Component, OnInit } from '@angular/core';
import { PriorityService } from 'src/app/service/priority.service';
import { Status } from 'src/app/model/status';
import { Task } from 'src/app/model/task';
import { Priority } from 'src/app/model/priority';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'beginDate', 'endDate', 'priority', 'status', 'action'];

  status: Status[] = [];
  priorities: Priority[] = [];
  tasks: Task[] = [];

  taskRegister: string = "Task Register";
  taskUpdate: string = "Task Update";

  dataSource: MatTableDataSource<Task> = new MatTableDataSource<Task>(this.tasks)

  constructor(
    private statusService: StatusService,
    private taskService: TaskService,
    private priorityService: PriorityService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getAlltasks();
  }



  getAlltasks(){
    this.taskService.getAll().subscribe(data => {
      this.tasks = data;
      this.dataSource = new MatTableDataSource(this.tasks)
    });
  }


  openDialog(task: Task | null){

    let text = "";
    task == null ? text = this.taskRegister : text = this.taskUpdate;

    let dialogRef = this.dialog.open(TaskDialogComponent, {
      height: '700px',
      width: '500px',
      data: task
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.snackBar.open(text, "✔️", {
          duration: 2000,
          verticalPosition: "top",
          horizontalPosition: "right"
        });
        this.getAlltasks();
      }
    });

  }

}
