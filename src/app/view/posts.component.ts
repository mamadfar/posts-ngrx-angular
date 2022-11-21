import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {getPostsAction} from "../store/actions/posts.actions";
import {Observable} from "rxjs";
import {errorSelector, isLoadingSelector, postsSelector} from "../store/selectors/posts.selectors";
import {IAppState} from "../model/appState.model";
import {IPost} from "../model/post.model";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
isLoading$: Observable<boolean>;
error$: Observable<string | null>;
posts$: Observable<ReadonlyArray<IPost>>

  constructor(private store: Store<IAppState>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(getPostsAction())
  }

}
