import { Routes } from '@angular/router';
import { UIComponent } from './ui/ui.component';
// import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
    {path:'',component:SigninComponent},
    {path:'chat-app', component:UIComponent}
];
