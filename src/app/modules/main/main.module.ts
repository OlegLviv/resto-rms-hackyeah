import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidemenuComponent } from "./sidemenu/sidemenu.component";
import { MainComponent } from "./main/main.component";
import { SharedModule } from "../shared/shared.module";
import { UiComponentsModule } from "../shared/ui-components.module";
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    UiComponentsModule
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidemenuComponent,
    MainComponent]
})
export class MainModule { }
