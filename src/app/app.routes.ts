import { Routes } from '@angular/router';
import {CreateItemComponent} from "./create-item/create-item.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  { path : "create-item",component :CreateItemComponent},
  { path : "" , component :HomeComponent}


];
