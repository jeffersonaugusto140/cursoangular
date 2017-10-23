import { Component } from '@angular/core';

import { Student } from './student/student.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: Student[] = [
    { name: 'Teste 0001', isApproved: true },
    { name: 'Teste 0002', isApproved: false },
    { name: 'Teste 0003', isApproved: true }
  ]
}
