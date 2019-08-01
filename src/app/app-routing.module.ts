import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddbookComponent } from './addbook/addbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import{ListbookComponent} from './listbook/listbook.component';

const routes: Routes = [
  {
    path: "",
    component: ContentComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: 'addbook',
        component: AddbookComponent
      },
      {
        path: 'listbook',
        component: ListbookComponent
      },
      {
        path:"editbook/:id",
        component:EditbookComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
