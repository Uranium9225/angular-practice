import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { AdminService } from './admin-service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('modulesDemoApp');
  colors: string[];
  constructor(private adminService: AdminService) {
    this.colors = adminService.getColors();
  }
}
