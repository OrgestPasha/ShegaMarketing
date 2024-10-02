import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SloganComponent } from './slogan/slogan.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './ServiceSector/services.component';
import { ExtraComponent } from './extra/extra.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavigationComponent,DashboardComponent,SloganComponent,AboutUsComponent,ServicesComponent,ExtraComponent,FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ShegaMarketing';
}
