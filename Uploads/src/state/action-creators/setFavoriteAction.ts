import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

const FAV_URL = "https://api.thecatapi.com/v1/favourites";

export const setFavoriteAction = (favorite: boolean | null, id: string | number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_FAVORITE,
    });
    try {
      if(favorite){
        const { data } = await axios.post(FAV_URL, {
            image_id: id,
            sub_id: "my-user-1234",
          },
          {
            headers: {
            "x-api-key": '49609112-c398-4aa6-a569-a2bab7c17639'
          },
        });
          dispatch({
            type: ActionType.SET_FAVORITE_SUCCESS,
            payload: data,
          });
      } else {
        const { data } = await axios.delete(`${FAV_URL}/${id}`, {
          headers: {
            "x-api-key": '49609112-c398-4aa6-a569-a2bab7c17639'
          },
          data: {
            favourite_id: id,
          }
          });
          dispatch({
            type: ActionType.SET_FAVORITE_SUCCESS,
            payload: data,
          });
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SET_FAVORITE_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
