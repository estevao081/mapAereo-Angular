import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private client: HttpClient) {
  }

  private readonly API = 'https://mapaereo.onrender.com/products'

  list(): Observable<Product[]> {
    return this.client.get<Product[]>(this.API);
  }

  save(record: Partial<Product>) {
    if (record.id) {
      return this.update(record)
    }
    return this.create(record)
  }

  private create(record: Partial<Product>) {
    return this.client.post<Product>(this.API, record);
  }

  private update(record: Partial<Product>) {
    return this.client.put<Product>(`${this.API}/${record.id}`, record);
  }

  delete(id: string): Observable<string> {
    return this.client.delete(`${this.API}/${id}`, { responseType: 'text' });
  }

  findById(id: string) {
    return this.client.get<Product>(`${this.API}/${id}`);
  }
}
