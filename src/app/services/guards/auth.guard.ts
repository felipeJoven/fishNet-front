import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { inject } from "@angular/core";


export const authGuard = () => {

  const router = inject(Router);

  if (localStorage.getItem('token')){
    return true;
  }else {
    router.navigate(['/login']);
    return false;
  }
  
}

