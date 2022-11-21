import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {getPostsAction, getPostsActionFailure, getPostsActionSuccess} from "../actions/posts.actions";
import {catchError, map, mergeMap, of} from "rxjs";
import {PostsService} from "../../services/posts.service";

@Injectable()
export class PostsEffects {
  getPosts$ = createEffect(() => this.actions$.pipe(
    ofType(getPostsAction),
    mergeMap(() => this.postsService.getPosts()
      .pipe(
        map((posts) => getPostsActionSuccess({posts})),
        catchError(error => of(getPostsActionFailure({error})))
      )
    ))
  )

  constructor(private actions$: Actions, private postsService: PostsService) {
  }
}
