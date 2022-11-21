import {createAction, props} from "@ngrx/store";
import {IPost} from "../../model/post.model";

export const getPostsAction = createAction("[Posts] Get Posts");
export const getPostsActionSuccess = createAction("[Posts] Get Posts Success", props<{posts: ReadonlyArray<IPost>}>());
export const getPostsActionFailure = createAction("[Posts] Get Posts Failure", props<{error: string}>());
