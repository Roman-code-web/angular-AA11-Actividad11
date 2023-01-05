import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  @Input() listaRegistroRecibida=[{"nombre":"","correo": "", "mensaje":""}];
  eliminarRegistro(i:number){
    this.listaRegistroRecibida.splice(i,1);
  }
}
