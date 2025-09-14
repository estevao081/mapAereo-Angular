import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common'

@Component({
  selector: 'app-login',
  imports: [
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
        private location: Location,
  ) {};

  onCancel() {
    this.location.back();
  }

}
