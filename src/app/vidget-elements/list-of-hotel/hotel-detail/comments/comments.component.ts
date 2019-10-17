import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Observable, Subject } from 'rxjs';
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

    this.hotelId = +this.activatedRoute.parent.snapshot.paramMap.get('id');
    this.comments$ = this.hotelService.getCommentById(this.hotelId);

  }

  public addComment(comment: HTMLInputElement): void {

    this.hotelService.addComment({'hotelId': this.hotelId, 'comment': comment.value});
    this.comments$ = this.hotelService.getCommentById(this.hotelId);
  }

}
