import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
da=[
  {
    text:"Book 1",
    cost:"$24.99",
    des:"This book provides you different strategies to get success in life",
    img:"assets/img/book1.jpg"
  },
  {
      text:"Book 2",
      cost:"$34.99",
      des:"This book provides you different strategies to get failure in life",
      img:"assets/img/book2.jpg"
    },
    {
      
        text:"Book 3",
        cost:"$44.99",
        des:"This book provides you different strategies to get everything in life",
        img:"assets/img/book3.jpg"
      
    }
  
]
  constructor() { }

  ngOnInit() {
  }

}
