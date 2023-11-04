import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/model/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import { AppStorage } from 'src/app/storage/app.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private appStorage: AppStorage,
    private authService: AuthService,
    private snack:MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.formulario = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  
  submit() {
    if(this.formulario.valid) {
      const credentials: Credentials = this.formulario.value;
      this.authService.login(credentials).subscribe(
        (resp: any) => {
          this.appStorage.setToken(resp.message);
          this.router.navigate(['/welcome']);
        },
        err => {
          console.log(err)
          this.snack.open('Detalles inválidos , vuelva a intentar !!','Aceptar',{
            duration:3000
          })
        }
      );
    }
  }
}
