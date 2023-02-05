import { Component, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  title = 'bluevalidatorsql';

  reason = '';

  constructor(private router: Router,){

  }
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  view(){
    this.router.navigate(['/viewvalidator']);
  }
}
