import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from './serviceshared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'project-main';
  signin:boolean;
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() {
        var jsonData=localStorage.getItem('user')
        if(jsonData=="null"){
          this.signin=false;
        }else{
          this.signin=true;
        }
   }
}