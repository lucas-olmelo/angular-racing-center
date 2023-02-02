import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { FormulaoneComponent } from "./pages/formulaone/formulaone.component";

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'content/:id',
    component: ContentComponent
  },
  {
    path:'formulaone',
    component: FormulaoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
