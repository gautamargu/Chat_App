import { Component } from '@angular/core';
interface User {
  image: string;
  name: string;
  recentChats: string;
  typing: boolean;
  timeDuration: string;
  active: boolean;
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  users: User[] = [
    {
      image: 'https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2-960x640.jpg',
      name: 'Gautam Kumar',
      recentChats: 'Lorem sit amet consectetur',
      typing: false,
      timeDuration: '45 min',
      active: true
    },
    {
      image: 'https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2-960x640.jpg',
      name: 'Riya Agarwal',
      recentChats: 'Lorem sit amet consectetur',
      typing: false,
      timeDuration: '45 min',
      active: false
    },
    {
      image: 'https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2-960x640.jpg',
      name: 'Gautam Kumar',
      recentChats: 'Lorem sit amet consectetur',
      typing: true,
      timeDuration: '45 min',
      active: true
    },
    {
      image: 'https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2-960x640.jpg',
      name: 'Gautam Kumar',
      recentChats: 'Lorem sit amet consectetur',
      typing: false,
      timeDuration: '45 min',
      active: true
    }, {
      image: 'https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2-960x640.jpg',
      name: 'Gautam Kumar',
      recentChats: 'Lorem sit amet consectetur',
      typing: false,
      timeDuration: '45 min',
      active: false
    },
    {
      image: 'https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2-960x640.jpg',
      name: 'Gautam Kumar',
      recentChats: 'Lorem sit amet consectetur',
      typing: false,
      timeDuration: '45 min',
      active: true
    },
    {
      image: 'https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2-960x640.jpg',
      name: 'Gautam Kumar',
      recentChats: 'Lorem sit amet consectetur',
      typing: false,
      timeDuration: '45 min',
      active: false
    },
    {
      image: 'https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2-960x640.jpg',
      name: 'Gautam Kumar',
      recentChats: 'Lorem sit amet consectetur',
      typing: false,
      timeDuration: '45 min',
      active: false
    },
    {
      image: 'https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2-960x640.jpg',
      name: 'Gautam Kumar',
      recentChats: 'Lorem sit amet consectetur',
      typing: true,
      timeDuration: '45 min',
      active: true
    },
    {
      image: 'https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2-960x640.jpg',
      name: 'Gautam Kumar',
      recentChats: 'Lorem sit amet consectetur',
      typing: false,
      timeDuration: '45 min',
      active: true
    },
    {
      image: 'https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2-960x640.jpg',
      name: 'Gautam Kumar',
      recentChats: 'Lorem sit amet consectetur',
      typing: false,
      timeDuration: '45 min',
      active: false
    },
    {
      image: 'https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2-960x640.jpg',
      name: 'Gautam Kumar',
      recentChats: 'Lorem sit amet consectetur',
      typing: true,
      timeDuration: '45 min',
      active: true
    },
    {
      image: 'https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2-960x640.jpg',
      name: 'Gautam Kumar',
      recentChats: 'Lorem sit amet consectetur',
      typing: true,
      timeDuration: '45 min',
      active: true
    },
    {
      image: 'https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2-960x640.jpg',
      name: 'Gautam Kumar',
      recentChats: 'Lorem sit amet consectetur',
      typing: false,
      timeDuration: '45 min',
      active: false
    },
  ];
}
