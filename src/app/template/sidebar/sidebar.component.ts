import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.user = this.authService.getUserAuthenticated();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }

}
