import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onSearchName() {
    this.router.navigate(['findByName'], { relativeTo: this.route });
  }

  onSearchCode() {
    this.router.navigate(['findByCode'], { relativeTo: this.route });
  }

  onSearchExpiration() {
    this.router.navigate(['findByExpiration'], { relativeTo: this.route });
  }

  onSearchAddress() {
    this.router.navigate(['findByAddress'], { relativeTo: this.route });
  }

  onLogin() {
    this.router.navigate(['auth/login'], {relativeTo: this.route })
  }

  onRegister() {
    this.router.navigate(['auth/register'], {relativeTo: this.route })
  }
}
