import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { NavbarComponent } from './base/components/navbar/navbar.component';
import { SidebarComponent } from './base/components/sidebar/sidebar.component';
import { ChatComponent } from './content/chat/chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,SidebarComponent,ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'frontend';

}
  
