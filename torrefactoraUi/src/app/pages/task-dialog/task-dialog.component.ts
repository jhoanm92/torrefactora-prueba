import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Priority } from 'src/app/model/priority';
import { Status } from 'src/app/model/status';
import { Task } from 'src/app/model/task';
import { PriorityService } from 'src/app/service/priority.service';
import { StatusService } from 'src/app/service/status.service';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {

  form: FormGroup;
  task: Task;
  text: string;

  priorities: Priority[] = [];
  statusList: Status[] = [];

  taskRegister: string = "Create New Task";
  taskUpdate: string = "Edit Task";

  constructor(
    private statusService: StatusService,
    private taskService: TaskService,
    private priorityService: PriorityService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    public dialogRef: MatDialogRef<TaskDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getAllStatus();
    this.getAllPriorities();
  }

  emptyForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required]],
      beginDate: [new Date, [Validators.required]],
      endDate: [new Date, [Validators.required]],
      priority: [null, [Validators.required]],
      status: [null, [Validators.required]],
      description: [null]
    });
  }

  initForm() {
    this.emptyForm();

    this.task = { ...this.data }
    this.text = this.taskRegister;

    if (this.data != null) {
      this.editForm();
      return;
    }
    this.task.id = 0;
  }

  editForm() {
    this.text = this.taskUpdate;
    this.id.setValue(this.task.id);
    this.name.setValue(this.task.name);
    this.description.setValue(this.task.description);
    this.beginDate.setValue(this.task.beginDate);
    this.endDate.setValue(this.task.endDate);
    this.status.setValue(this.task.status.id);
    this.priority.setValue(this.task.priority.id);
  }

  getAllStatus(){
    this.statusService.getAll().subscribe(data => {
      this.statusList = data;
    });
  }

  getAllPriorities(){
    this.priorityService.getAll().subscribe(data => {
      this.priorities = data;
    });
  }

  operate(){

    let taskEntity = new Task();
    taskEntity.id = this.id.value;
    taskEntity.name = this.name.value;
    taskEntity.description = this.description.value;
    taskEntity.beginDate = this.beginDate.value;
    taskEntity.endDate = this.endDate.value;

    let status = new Status();
    status.id = this.status.value;

    let priority = new Priority();
    priority.id = this.priority.value;

    taskEntity.status = status;
    taskEntity.priority = priority;

    this.taskService.register(taskEntity).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  // ------------------------------ get form ------------------------------
  get id() {
    return this.form.get("id")!
  }

  get name() {
    return this.form.get("name")!
  }

  get description() {
    return this.form.get("description")!
  }

  get beginDate() {
    return this.form.get("beginDate")!
  }

  get endDate() {
    return this.form.get("endDate")!
  }

  get priority() {
    return this.form.get("priority")!
  }

  get status() {
    return this.form.get("status")!
  }

}
