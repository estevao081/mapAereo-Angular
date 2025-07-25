import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-home',
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
    MatSnackBarModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  displayedColumns: string[] = ['code', 'name', 'quantity', 'expiration', 'address', 'actions'];
  data = new MatTableDataSource<Product>();
  products$: Observable<Product[]>
  isLoading = true;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private service: ProductService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.products$ = this.service.list();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.service.list().subscribe({
      next: (products) => {
        this.data.data = products;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }


  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(product: Product) {
    this.router.navigate(['edit', product.id], { relativeTo: this.route });
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

}
