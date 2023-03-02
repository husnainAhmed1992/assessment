import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setUser } from 'src/app/store/actions/user';

import { HttpClient   } from '@angular/common/http';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  
  userInfoForm : FormGroup = this.fb.group({
    name:['',[Validators.required]],
    email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    mobile:['',[Validators.required,Validators.pattern(/^\(?\d{4}\)?[\s.-]\(?\d{3}\)[\s.-]?\d{4}$/)]]
  });

  constructor(
    private fb: FormBuilder,
    private store : Store,
    private route : Router,
    private _http:HttpClient
    ) { }

  ngOnInit(): void {}

  onSubmit(){
    this.store.dispatch(setUser({user:this.userInfoForm.value}));
    this.userInfoForm.reset();
    this.route.navigateByUrl('/user/weather-detail')
  }

}
