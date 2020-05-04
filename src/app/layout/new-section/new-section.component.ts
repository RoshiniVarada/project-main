import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../../shared/services/firebase.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-section-user',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.scss']
})
export class NewSectionComponent implements OnInit {

  values: any;
modules=true;
assignments=false;
showcomp=false;
  valuesnew: any;
  modulesSub: any;
  user: any;
  assgnSub: any;
  constructor(
    public firebaseService: FirebaseService,
    public _Activatedroute:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    this.values = localStorage.getItem("subdetails");
      this.valuesnew =JSON.parse(this.values);
      this.firebaseService.getModules(this.valuesnew.name)
      .subscribe(result => {
        this.modulesSub = result;
        this.showcomp=true;
      })
   
     

      
  }

 taketest(assgn){
  const assgnmwnt=JSON.stringify(assgn.payload.doc.data());
  localStorage.setItem("assgn",assgnmwnt);
  this.router.navigate(['layout/layout/student-dashboard']);
    
 }
  public showfn(value){
    if(value=="modules"){
      this.modules=true;
      this.assignments=false;
     
    }else if(value=="assignments"){
      this.assignments=true;
      this.modules=false;
    }else{
      this.modules=true;
      this.modules=false;
    }
    if(this.modules==true){
      this.firebaseService.getModules(this.valuesnew.name)
      .subscribe(result => {
        this.modulesSub = result;
      })
    }else{
     this.user=JSON.parse(localStorage.getItem("UserDetails"));
     this.valuesnew.sec=this.user.Section;
      this.firebaseService.getAssignments(this.valuesnew)
      .subscribe(result => {
        this.assgnSub = result;
      })
    }

  }






}
