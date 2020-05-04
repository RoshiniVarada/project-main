import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() subject: any;
    @Input() pageName: any;

    @Output() event: EventEmitter<any> = new EventEmitter();
    

    constructor(
        private router: Router
    ) {}

    ngOnInit() {}
    viewdetails(subject,pageName){
        if(this.pageName=="facultylayout"){
            this.router.navigate(['faculty-layout/layout/new-section']);
        }else{
            this.router.navigate(['layout/layout/new-section']);
        }
       
    }
}
