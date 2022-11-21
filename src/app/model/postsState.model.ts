import {IPost} from "./post.model";

export interface IPostsState {
  isLoading: boolean,
  posts: ReadonlyArray<IPost>,
  error: string | null
}
