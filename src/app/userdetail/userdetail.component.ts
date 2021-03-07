import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  userId:any
  
  uUid:any
  constructor(
     public fireStore: AngularFirestore,
     private router:Router,
     public loginService: LoginService
  ) { }

  ngOnInit(): void {
  }
// Uid Conversion
userDetails = this.loginService.getUser().subscribe(user=>{
  this.uUid = JSON.stringify(user?.uid)
  this.userId = JSON.parse(this.uUid)
})

// Review/Sentiment Form
form = new FormGroup({
displayName: new FormControl(''),
 dateBirth: new FormControl(''),
 userId: new FormControl(''),

})

// Review Submit( storing in Firebase with uid )
GetUser(){
 this.fireStore.collection('users').add({
   displayName:this.form.value.displayName,
   dateBirth: this.form.value.dateBirth,
   userUid: this.userId
  }
 )
 .then(res=>{
  
 })
 .catch(error=>{
   console.log(error)
 })

this.router.navigate(['/review-component']);
} 

}
