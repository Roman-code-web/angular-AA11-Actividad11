import { Component, OnInit ,Output ,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit  {
  //declaramos variables  
  titulo="Formularios Reactivos";
  public formRegistro!:FormGroup;
  listaRegistro:any=[]=[];
  @Output() onEnviarLista=new EventEmitter();
  
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
    Swal.fire({
      icon: 'success',
      title: 'Datos Registrados',
    })
    //this.jsonDatos=JSON.stringify(this.formRegistro.value) ;  //estaba probando
    this.listaRegistro.push(this.formRegistro.value);
    this.onEnviarLista.emit(this.listaRegistro);
    this.formRegistro.reset();
    //console.log(this.listaRegistro);//console.log(this.formRegistro);
  }
}
