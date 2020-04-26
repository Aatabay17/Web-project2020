import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments:Comment[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addComment(): void{
  }

  delete(comment:any) :void {

  }  

}
