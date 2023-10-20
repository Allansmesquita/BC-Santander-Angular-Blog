import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://topmovies.com.br/wp-content/uploads/2023/10/A-data-da-morte-de-Tony-Stark-no-MCU-tem.jpg"
  contentTitle:string = "NOTICIA EXEMPLO"
  contentDescription:string = "bla bla bla bla "

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
      
    )
  }

}
