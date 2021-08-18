import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CharectersComponent } from "./modules/charecters/charecters.component";
import { LocationsComponent } from "./modules/locations/locations.component";

const routes: Routes = [
    { path: '', component: CharectersComponent },
    { path: 'locations', component: LocationsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}