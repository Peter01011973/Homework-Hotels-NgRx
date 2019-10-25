import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HotelService } from 'src/app/shared/services/hotel.service';
import { IComment } from 'src/app/shared/interfaces/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public comments$: Observable<IComment[]>;
  public hotelId: number;

  public constructor(private activatedRoute: ActivatedRoute, private hotelService: HotelService) { }

  public ngOnInit() {
    this.comments$ = this.activatedRoute.parent.paramMap
    .pipe(
      switchMap(
        (params: ParamMap) => {
          this.hotelId = + params.get('id'); 
          return this.hotelService.getCommentById(+ params.get('id'))
        }
      )
    );
  }

  public addComment(comment: HTMLInputElement): void {
    console.log('This: ',this.hotelId);
    
    this.hotelService.addComment({'hotelId': this.hotelId, 'comment': comment.value});
    this.comments$ = this.hotelService.getCommentById(this.hotelId);
  }

}
