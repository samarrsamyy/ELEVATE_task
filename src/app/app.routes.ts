import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'product', component: ProductsComponent },
  { path: 'product/:id', component: DetailsComponent },
  { path: '**', component: NotfoundComponent },
];
