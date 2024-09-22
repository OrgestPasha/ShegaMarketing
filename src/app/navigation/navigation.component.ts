import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule,isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  
  
  constructor(private router: Router,@Inject(PLATFORM_ID) private platformId: Object) { }


  showNavigation:boolean=false;
  showNavigationItems:boolean=false;
  windowWidth:number=0;
  ngOnInit() {
    this.updateHeight();
    if(isPlatformBrowser(this.platformId)){
      this.windowWidth=window.innerWidth;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateHeight();
    if(isPlatformBrowser(this.platformId)){
      this.windowWidth=window.innerWidth;
    }
   
  }

  updateHeight() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth < 576) { // 36rem in pixels (assuming 1rem = 16px)
        this.showNavigation=true;
      } else {
       this.showNavigation=false;
      }
    }
  }

  navigationToggle(){
    this.showNavigationItems=!this.showNavigationItems;
  }


  scrollToElement(id: string): void {
    this.router.navigate([], { fragment: id });
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
