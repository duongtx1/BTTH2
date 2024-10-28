import { Routes } from '@angular/router';
import { LayoutsComponent} from './components/layouts/layouts.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StoreComponent } from './store/store.component';
import { AddProductComponent } from './product-add/product-add.component';

export const routes: Routes = [
    {path: 'admin',
        component: LayoutsComponent,
        
        children: [
          {
            path: '', component:AdminDashboardComponent,
          }
        ],}
        ,
    {path: 'store',
        component: LayoutsComponent,
          children: [
            {
              path: '', component:StoreComponent,
            },
            {
   
              path: 'add', component: AddProductComponent,
            }
          ],},
        {
            path: '',
            redirectTo: '/admin',
            pathMatch: 'full'
          }
];
