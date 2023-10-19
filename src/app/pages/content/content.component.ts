import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://topmovies.com.br/wp-content/uploads/2023/10/A-data-da-morte-de-Tony-Stark-no-MCU-tem.jpg"
  contentTitle:string = "NOTICIA EXEMPLO"
  contentDescription:string = "bla bla bla bla "

  constructor() { }

  ngOnInit(): void {
  }

}
