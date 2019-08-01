import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
bookForm;
  constructor(public activatedRoute:ActivatedRoute,public http:HttpClient,public router:Router) {
    this.bookForm = new FormGroup({
      'title': new FormControl(),
      'Description': new FormControl(),
      'imageUrl': new FormControl(),
      'author': new FormControl()
    })
   }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));

    this.http.get(`https://5d11b9d484e90600145764c0.mockapi.io/books/${this.activatedRoute.snapshot.paramMap.get('id')}`)
    .toPromise()
    .then((response:any) => {
      this.bookForm.setValue({
        'title' : response.title,
        'Description' : response.Description,
        'author' : response.author,
        'imageUrl' : response.imageUrl
      })
    }, (error) => {

    })
  }
  postBook(){
    this.http.put(`https://5d11b9d484e90600145764c0.mockapi.io/books/${this.activatedRoute.snapshot.paramMap.get('id')}`,this.bookForm.value)
    .toPromise()
    .then((response) => {
      console.log(response);
      this.router.navigate(['dashboard/listbook']);
    },(error) => {
console.log(error);
    })
  }

}


