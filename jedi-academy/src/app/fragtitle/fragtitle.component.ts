import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-fragtitle',
  templateUrl: './fragtitle.component.html',
  styleUrls: ['./fragtitle.component.css']
})
export class FragtitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title: string = 'Projeto Exec Jedi - CMP Title'

}
