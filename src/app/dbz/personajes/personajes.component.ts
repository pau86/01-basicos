import { Component, Input } from '@angular/core';
// import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input() personajes: Personaje[] = []; // Los personajes vienen del componente padre. @Input se usa para pasar información de un componente padre a un componente hijo.

  // @Input("data") personajes: any[] = []; // Si queremos cambiarle el nombre de personajes a data lo podemos hacer de esta manera, pero en este caso el html también tendrá que llamar a data y no a personajes

  get personajes() {
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService ) {}

}
