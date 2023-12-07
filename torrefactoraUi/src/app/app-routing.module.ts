import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';

const routes: Routes = [
  {path: "dash-board", component: DashBoardComponent},
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dash-board'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
