import { Component } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent {
  totalLikes: number = 100;
  isLiked: boolean = false;
  constructor() {}

  ngOnInit(): void {

  }

  processLikeButtonClick(): void{
    if(this.isLiked==false){
      this.isLiked = true;
      this.totalLikes++;
    }else{
      this.isLiked = false;
      this.totalLikes--;
    }
  }

}
