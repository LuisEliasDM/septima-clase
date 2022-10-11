import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFountComponent } from './components/not-fount/not-fount.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: 'characters',
        pathMatch: 'full'
      },
      {
        path: "characters",
        loadChildren: () => import('./modules/uno/uno.module').then(m => m.UnoModule)
      }
    ]
  },
  {
    path: "**",
    component: NotFountComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
