import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common'

@Component({
  selector: 'app-address',
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    FormsModule
  ],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})

export class AddressComponent {
  displayedColumns: string[] = ['code', 'name', 'quantity', 'expiration', 'address', 'actions'];
  data = new MatTableDataSource<Product>();
  isLoading = false;

  constructor(
    private service: ProductService,
    private snackBar: MatSnackBar,
    private router: Router,
    private location: Location
  ) { }

  loadProducts(): void {
    this.isLoading = true;

    const observable = this.searchText.trim()
      ? this.service.findByAddress(this.searchText)
      : this.service.listByAddress();

    observable.subscribe({
      next: (products) => {
        this.data.data = products;
        this.isLoading = false;
      },
      error: () => {
        this.snackBar.open('Erro ao carregar produtos', 'Fechar', {
          duration: 3000,
          verticalPosition: 'bottom'
        });
        this.isLoading = false;
      }
    });
  }

  onCancel() {
    this.location.back();
  }

  onEdit(product: Product) {
    this.router.navigate(['edit', product.id]);
  }

  onDelete(product: Product) {
    this.service.delete(product.id).subscribe({
      next: () => {
        this.snackBar.open('Produto deletado com sucesso!', 'Fechar', {
          duration: 3000,
          verticalPosition: 'bottom'
        });
        this.loadProducts();
      },
      error: () => {
        this.snackBar.open('Erro ao deletar o produto.', 'Fechar', {
          duration: 3000,
          verticalPosition: 'bottom'
        });
      }
    });
  }

  searchText = '';

  onSearchByAddress() {
    this.isLoading = true;
    this.service.findByAddress(this.searchText).subscribe({
      next: (products) => {
        this.data.data = products;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar produtos:', err);
      }
    });
  }
}
