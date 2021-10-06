import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";



@Injectable()
export class DbzService {

    // Establecemos como private el array de personajes, para que SOLO se pueda CAMBIAR en el servicio
    private _personajes: Personaje[] = [ // el guión bajo es para decir que es private (es un estándar), pero lo que realmente lo hace private es la palabra delante
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    get personajes(): Personaje[] {
        // JavaScript todo lo manda por referencia, entonces puede que ese getter se pueda manipular
        // Para evitar que alguien pueda manipularlo para tener acceso a los personajes
        // Hay que romper esa relación de js usando el operador spread [...xxx]
        // [] indica que es un array, ... es el operador spread, que dice "separa cada uno de los elementos que tiene ese array y créate uno nuevo"
        // esto no es obligatorio de Angular, sino una buena práctica de js
        return [...this._personajes];
    }

    constructor() {}

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push( personaje );
    }

}