import { Component, OnInit } from '@angular/core';

interface Usuario {
  nombre: String;
  email: String;
  question: String;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  datos! : any[];

  model = {
    nombre: '',
    email: '',
    question: ''
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSave(): void{
    this.datos.push(this.model)
    /*console.log(this.datos);*/
  }

}
