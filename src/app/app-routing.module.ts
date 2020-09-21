import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManaDetailComponent } from './mana-detail/mana-detail.component';
import { ManaComponent } from './mana/mana.component';


const routes: Routes = [
  {
    path: '',
    component: ManaComponent,
  },
  {
    path: 'mana-detail/:id',
    component: ManaDetailComponent,
    data: { title: 'メンバー詳細' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
