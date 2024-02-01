import { Component } from '@angular/core';
import { Router,RouterOutlet} from '@angular/router';
import { SidebarComponent } from '../base/components/sidebar/sidebar.component';
import { NavbarComponent } from '../base/components/navbar/navbar.component';
import { ChatComponent } from '../content/chat/chat.component';
import { SocketService } from '../shared/services/socket.service';
@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,SidebarComponent,ChatComponent],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css'
})
export class UIComponent {
  constructor(private socketService:SocketService){}
  ngOnInit(){
    
  }
}
