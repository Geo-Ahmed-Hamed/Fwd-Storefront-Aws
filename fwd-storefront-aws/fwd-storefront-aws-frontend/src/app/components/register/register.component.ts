import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: string = "";
  lastName: string = "";
  password: string = "";

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  register(){
    this.userService.register(this.firstName, this.lastName, this.password).subscribe(res => {
      localStorage.setItem('token', res);
      this.router.navigate(['/products']);
    })
  }

}
