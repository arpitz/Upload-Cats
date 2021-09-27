import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

const FETCH_URL = 'https://api.thecatapi.com/v1/images';

export const fetchAllCats = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_ALL_CATS,
    });
    try {
      const res = await axios.get(
        FETCH_URL,
        {
          headers: {
            "x-api-key": '49609112-c398-4aa6-a569-a2bab7c17639'
          },
          params: {
            sub_id: "my-user-1234",
            limit: 10
          }
        }
      );
      dispatch({
        type: ActionType.FETCH_ALL_CATS_SUCCESS,
        payload: res.data,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.FETCH_ALL_CATS_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
