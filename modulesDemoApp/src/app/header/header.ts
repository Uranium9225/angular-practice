import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdminModule } from '../admin/admin-module';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, RouterModule, AdminModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
