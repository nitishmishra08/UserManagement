import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: 'user',component: UserComponent
    
  },
  { path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  { path: 'user/:id', component: UserDetailsComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
