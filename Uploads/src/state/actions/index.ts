import { ActionType } from '../action-types';

interface FetchAllCatsAction {
  type: ActionType.FETCH_ALL_CATS;
}

interface FetchAllCatsSuccessAction {
  type: ActionType.FETCH_ALL_CATS_SUCCESS;
  payload: object[];
}

interface FetchAllCatsErrorAction {
  type: ActionType.FETCH_ALL_CATS_ERROR;
  payload: string;
}

interface UploadCatsAction {
  type: ActionType.UPLOAD_CATS;
}

interface UploadCatsSuccessAction {
  type: ActionType.UPLOAD_CATS_SUCCESS;
  payload: object[];
}

interface UploadCatsErrorAction {
  type: ActionType.UPLOAD_CATS_ERROR;
  payload: string;
}

interface SendLikesAction {
  type: ActionType.SEND_LIKES;
}

interface SendLikesSuccessAction {
  type: ActionType.SEND_LIKES_SUCCESS;
  payload: object[];
}

interface SendLikesErrorAction {
  type: ActionType.SEND_LIKES_ERROR;
  payload: string;
}

interface SetFavoriteAction {
  type: ActionType.SET_FAVORITE;
}

interface SetFavoriteSuccessAction {
  type: ActionType.SET_FAVORITE_SUCCESS;
  payload: {id: number, message: string };
}

interface SetFavoriteErrorAction {
  type: ActionType.SET_FAVORITE_ERROR;
  payload: string;
}

export type Action =
  | FetchAllCatsAction
  | FetchAllCatsSuccessAction
  | FetchAllCatsErrorAction
  | UploadCatsAction
  | UploadCatsSuccessAction
  | UploadCatsErrorAction
  | SendLikesAction
  | SendLikesSuccessAction
  | SendLikesErrorAction
  | SetFavoriteAction
  | SetFavoriteSuccessAction
  | SetFavoriteErrorAction;
