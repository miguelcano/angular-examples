import { Component, OnInit, Input } from '@angular/core';

import { student } from './student.model';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: student;

  constructor() { }

  ngOnInit() {
  }

  clicked (){
    console.log("student: "+this.student.name)
  }
}
