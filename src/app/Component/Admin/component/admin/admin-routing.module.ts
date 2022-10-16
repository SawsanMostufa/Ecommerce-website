import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboartComponent } from './dashboart/dashboart.component';
import { MyprofileComponent } from './dashboart/myprofile/myprofile.component';
import { ProductComponent } from './dashboart/product/product.component';
import { OrderComponent } from './dashboart/order/order.component';
import { UserComponent } from './dashboart/user/user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    { path:'Dashboart' ,component: DashboartComponent,
        // canActivate: [AuthGuard],
        // runGuardsAndResolvers: 'always',    
        children:
        [ 
          
            {path: 'order', component: OrderComponent},
            {path: 'userview', component:UserComponent },
            {path: 'addproduct', component:ProductComponent },
            {path: 'myprofileadmin', component:MyprofileComponent },
            // {path: 'Dashboart', component:DashboartComponent },

      ]
    }                ];
//   admin/Dashboart/order


@NgModule({
  declarations: [

  ],
  imports: [
  
    RouterModule.forChild(routes)
  ],
  exports: [
    
    RouterModule
  ]
})
export class AdminRoutingModule { }
