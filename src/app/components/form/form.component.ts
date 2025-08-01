import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../services/product.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form',
  imports: [
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProductService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      code: [''],
      name: [''],
      quantity: [''],
      expiration: [''],
      address: ['']
    })

    const product: Product = this.route.snapshot.data['product']
    this.form.setValue({
      id: product.id,
      code: product.code,
      name: product.name,
      quantity: product.quantity,
      expiration: product.expiration,
      address: product.address
    })
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(data => this.onSuccess(), error => this.onError());
    this.form.reset();
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Produto salvo com sucesso.', 'Fechar', { duration: 3000 })
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar produto.', 'Fechar', { duration: 3000 })
  }
}
