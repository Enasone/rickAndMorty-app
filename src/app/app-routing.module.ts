import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { CharectersComponent } from "./modules/charecters/charecters.component";
import { LocationsComponent } from "./modules/locations/locations.component";
import {MainLayoutComponent} from "./modules/shared/components/main-layout.component";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/characters', pathMatch: 'full'},
      { path: 'characters', component: CharectersComponent},
      { path: 'locations', component: LocationsComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
