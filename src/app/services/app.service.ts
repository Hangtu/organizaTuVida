import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/']);
  }
}
