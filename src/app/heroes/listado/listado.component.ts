import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes:string[]=['Spiderman','IronMan','Hulk','Thor'];
  borrado:string = '';
  borrarHeroe(){
    const heroeborrado = this.heroes.pop();
    // this.heroes.shift();
    console.log(heroeborrado);


      this.borrado = heroeborrado || ''
    
  }

}
