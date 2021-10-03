import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //lo que quiero que sea público fuera
        ListadoComponent
    ],
    imports: [ // solo módulos
        CommonModule
    ]
})
export class HeroesModule {}