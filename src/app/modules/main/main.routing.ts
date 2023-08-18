import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "", component: HomeComponent },
    ]
  }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
  });