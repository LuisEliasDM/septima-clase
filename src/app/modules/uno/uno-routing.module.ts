import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFountComponent } from 'src/app/components/not-fount/not-fount.component';
import { GetCharactersResolver } from 'src/app/libs/get-characters.resolver';
import { UnoComponent } from './uno/uno.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'get-character',
    pathMatch: 'full'
  },
  {
    path: "get-character",
    resolve: {
      character: GetCharactersResolver,
    },
    component: UnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnoRoutingModule { }
