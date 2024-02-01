import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../shared/services/socket.service';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(private router:Router,private socketService:SocketService){}
  // ngOnInit(){
  //   this.socketService.onEvent('data',(data)=>{
  //     console.log(data);
      
  //   })
  // }
  
  chat_app(){
    this.router.navigate(['/chat-app'])

  }
  registerFormvisible(){
    
  }
}

