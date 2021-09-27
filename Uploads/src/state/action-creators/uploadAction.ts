import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const uploadCats = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPLOAD_CATS,
    });
    try {
      const res = await axios.get(
        'https://api.thecatapi.com/v1/images',
        {
          headers: {
            "x-api-key": '49609112-c398-4aa6-a569-a2bab7c17639'
          },
          params: {
            limit: 10
          }
        }
      );
      dispatch({
        type: ActionType.UPLOAD_CATS_SUCCESS,
        payload: res.data,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.UPLOAD_CATS_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
