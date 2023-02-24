import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  firstName: string = "";
  password: string = "";

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.firstName, this.password).subscribe(res => {
      localStorage.setItem('token', res);
      this.router.navigate(['/products']);
    })
  }

}

