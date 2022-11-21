import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {IPost} from "../model/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() {
  }

  getPosts(): Observable<ReadonlyArray<IPost>> {
    const posts: ReadonlyArray<IPost> = [
      {id: "1", title: "title 1"},
      {id: "2", title: "title 2"},
      {id: "3", title: "title 3"},
    ];
    return of(posts).pipe(delay(2000));
  }
}
