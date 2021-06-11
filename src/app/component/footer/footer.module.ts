import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { FooterComponentRoutingModule } from "./footer-routing.module";
import { FooterComponent } from "./footer.component";

@NgModule({
    declarations: [FooterComponent],
    imports: [
        CommonModule,
        IonicModule,
        FooterComponentRoutingModule
    ],
    
})

export class FooterModule{}