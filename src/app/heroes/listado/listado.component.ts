import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: String[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado : String  = "";

  borrarHeroe() :void {
    
     this.heroeBorrado =this.heroes.shift() || ""; 
     console.log(this.heroeBorrado);
     
  }
  
}
