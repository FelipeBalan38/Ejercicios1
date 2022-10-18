import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent implements OnInit {

  texto="Get Powerful WordPress Hosting";
  constructor() { }

  ngOnInit(): void {
  }

  onChangeText(){
    this.texto = "KJhdbihcibsvichnsiuvosn";
  }
}
