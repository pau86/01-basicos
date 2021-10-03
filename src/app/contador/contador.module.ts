import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [ //lo que quiero que sea público fuera
        ContadorComponent
    ]
})

export class ContadorModule {}