import {IPostsState} from "../../model/postsState.model";
import {createReducer, on} from "@ngrx/store";
import {getPostsAction, getPostsActionFailure, getPostsActionSuccess} from "../actions/posts.actions";

export const initialState: IPostsState = {
  isLoading: false,
  posts: [],
  error: null
};

export const postsReducer = createReducer(
  initialState,
  on(getPostsAction, (state) => ({...state, isLoading: true})),
  on(getPostsActionSuccess, (state, action) => ({...state, isLoading: false, posts: action.posts})),
  on(getPostsActionFailure, (state, action) => ({...state, isLoading: false, error: action.error}))
)
