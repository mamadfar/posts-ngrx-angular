import {IAppState} from "../../model/appState.model";
import {createSelector} from "@ngrx/store";

//! here we just need to return our feature and in this case is posts
export const selectFeature = (state: IAppState) => state.posts;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const postsSelector = createSelector(selectFeature, state => state.posts);
export const errorSelector = createSelector(selectFeature, state => state.error);
