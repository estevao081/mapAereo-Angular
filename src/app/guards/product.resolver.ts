import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

export const productResolver: ResolveFn<Observable<Product>> = (
  route: ActivatedRouteSnapshot,
  state,
  service: ProductService = inject(ProductService)) => {

  if (route.params?.['id']) {
    return service.findById(route.paramMap.get('id')!);
  }
  return of({ id: '', code: '', name: '', quantity: '', expiration: '', address: '' });
};