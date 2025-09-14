import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { productResolver } from './guards/product.resolver';
import { NameComponent } from './components/search/name/name.component';
import { CodeComponent } from './components/search/code/code.component';
import { ExpirationComponent } from './components/search/expiration/expiration.component';
import { AddressComponent } from './components/search/address/address.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'new', component: FormComponent, resolve: { product: productResolver } },
    { path: 'edit/:id', component: FormComponent, resolve: { product: productResolver } },
    { path: 'findByName', component: NameComponent, resolve: { product: productResolver } },
    { path: 'findByCode', component: CodeComponent, resolve: { product: productResolver } },
    { path: 'findByExpiration', component: ExpirationComponent, resolve: { product: productResolver } },
    { path: 'findByAddress', component: AddressComponent, resolve: { product: productResolver } },
    { path: 'auth/login', component: LoginComponent, resolve: { product: productResolver } },
    { path: 'auth/register', component: RegisterComponent, resolve: { product: productResolver } }
];
