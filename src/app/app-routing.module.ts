import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlocksComponent } from './blocks/blocks.component';
import { DetailsComponent } from './details/details.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/blocks', pathMatch: 'full' },
      { path: 'table', component: TableComponent },
      { path: 'blocks', component: BlocksComponent },
      { path: 'detail/:name', component: DetailsComponent },
      { path: '**', redirectTo: '/blocks' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
