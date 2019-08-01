import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import {HttpClient} from"@angular/common/http";
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  bookForm;

  constructor(public http:HttpClient,public router:Router) { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      'title': new FormControl(),
      'Description': new FormControl(),
      'imageURL': new FormControl(),
      'author': new FormControl()
    })
  }
  postBook(){
    console.log(this.bookForm.value);
    this.http.post('http://5d11b9d484e90600145764c0.mockapi.io/books',this.bookForm.value)
    .toPromise()
    .then((response) => {
      console.log(response);
      this.router.navigate(['dashboard/listbook']);
    },(error) => {
      console.log(error);
    })

}
2}
