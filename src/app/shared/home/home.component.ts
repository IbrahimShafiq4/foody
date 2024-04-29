import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/Services/Auth.service';

interface IRole {
  isActive: boolean;
  text: string;
  textButton: string;
  link: string;
  content: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName: string = '';

  constructor(private _AuthService: AuthService) {  }

  isAdmin(): boolean {
    return this._AuthService.role == 'SuperAdmin' ? true : false;
  }

  isUser(): boolean {
    return this._AuthService.role == 'SystemUser' ? true : false;
  }

  role: IRole[] = [
    {
      text: 'Fill The',
      textButton: "Fill Recipe",
      link: '/dashboard/admin/recipes',
      isActive: this.isAdmin(),
      content: "you can now fill the meals easily using the table and form , click here and sill it with the table !"
    },
    {
      text: 'Show All',
      textButton: "Fill Recipe",
      link: '/dashboard/user/recipes',
      isActive: this.isUser(),
      content: "you can now show the meals easily using this button, click here and sill it with the table !"
    },
  ]

  ngOnInit() {
    this.userName = localStorage.getItem('userName') ?? 'Upskilling';
  }
}
