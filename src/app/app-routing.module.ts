import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
    {path: 'admin',loadChildren: () => import('src/app/Component/Admin/component/admin/admin.module')
    .then(mod => mod.AdminModule)},
    {path: 'user',loadChildren: () => import('src/app/Component/User/user/user.module')
    .then(mod => mod.UserModule)}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
