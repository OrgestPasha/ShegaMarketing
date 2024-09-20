import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  
  constructor(private router: Router) { }

  scrollToElement(id: string): void {
    this.router.navigate([], { fragment: id });
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
