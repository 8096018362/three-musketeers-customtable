import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  constructor(
    public router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSignin() {
    const data = this.signinForm.value;

    this.authenticationService.signin(data.email, data.password)
      .subscribe((res) => {
        // if signin success then:
        this.router.navigate(['dashboards/asset-management']);
      }, (err) => {
        // else if signin fails
        // show error
      });
  }
}
