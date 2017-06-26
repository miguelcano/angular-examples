import { Component } from '@angular/core';

import { student } from './student/student.model';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jad';
  students: student[] = [
    {name: 'Luke', isJedi: true, temple:'Coruscant'},
    {name: 'Leia', isJedi: false},
    {name: 'Han Solo', isJedi: false},
  ]
}
