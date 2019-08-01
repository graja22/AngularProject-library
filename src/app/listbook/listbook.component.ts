import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {
bookList;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.http.get('https://5d11b9d484e90600145764c0.mockapi.io/books')
      .toPromise()
      .then((response) => {
        this.bookList = response;
        console.log(response);
      }, (error) => {
        console.log(error);
      })
  }
  deleteBook(id) {
    let result = confirm("Are you sure do you want to delete?");
    if (result == true) {
      console.log(id);
      this.http.delete(`https://5d11b9d484e90600145764c0.mockapi.io/books/${id}`)
        .toPromise()
        .then((response) => {
          console.log(response);
          this.loadData();
        },
          (error) => {
            console.log(error)
          })
    }
  }

}
