import { HttpClient, HttpParams } from '@angular/common/http';
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

  listByName(): Observable<Product[]> {
    return this.client.get<Product[]>(`${this.API}/searchByName`);
  }

  listByCode(): Observable<Product[]> {
    return this.client.get<Product[]>(`${this.API}/searchByCode`);
  }

  listByExpiration(): Observable<Product[]> {
    return this.client.get<Product[]>(`${this.API}/searchByExpiration`);
  }

  listByAddress(): Observable<Product[]> {
    return this.client.get<Product[]>(`${this.API}/searchByAddress`);
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

  findByName(name: string): Observable<Product[]> {
    const params = new HttpParams().set('name', name);
    return this.client.get<Product[]>(`${this.API}/searchByName`, { params });
  }

  findByCode(code: string): Observable<Product[]> {
    const params = new HttpParams().set('code', code);
    return this.client.get<Product[]>(`${this.API}/searchByCode`, { params });
  }

  findByExpiration(expiration: string): Observable<Product[]> {
    const params = new HttpParams().set('expiration', expiration);
    return this.client.get<Product[]>(`${this.API}/searchByExpiration`, { params });
  }

  findByAddress(address: string): Observable<Product[]> {
    const params = new HttpParams().set('address', address);
    return this.client.get<Product[]>(`${this.API}/searchByAddress`, { params });
  }
}
