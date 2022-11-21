import {IPostsState} from "./postsState.model";

//! all features that we need in global state
export interface IAppState {
  posts: IPostsState,
}
