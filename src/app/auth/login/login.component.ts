import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';
import { Credentials } from 'src/app/model/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import { AppStorage } from 'src/app/storage/app.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private appStorage: AppStorage,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  
  submit() {
    if(this.form.valid) {
      const credentials: Credentials = this.form.value;
      this.authService.login(credentials).subscribe(
        (resp: any) => {
          this.appStorage.setToken(resp.message);
        },
        err => {
          console.log(err)
        }
      );
    }
  }
}
