import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { productResolver } from './guards/product.resolver';
import { NameComponent } from './components/search/name/name.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'new', component: FormComponent, resolve: { product: productResolver } },
    { path: 'findByName', component: NameComponent, resolve: { product: productResolver } },
    { path: 'edit/:id', component: FormComponent, resolve: { product: productResolver } }

];
