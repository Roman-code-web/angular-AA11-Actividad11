import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit  {
  //declaramos variables 
  public formRegistro!:FormGroup;
  //constructor
  constructor(private formRegistrobuilder:FormBuilder){

  }

  ngOnInit(): void {
    this.formRegistro=this.formRegistrobuilder.group({
      nombre:['',
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      correo:['',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
        ]
      ],
      mensaje:['',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
    });
  }
  enviar(){
    console.log(this.formRegistro.value)
  }
}
