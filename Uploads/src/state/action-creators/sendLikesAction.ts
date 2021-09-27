import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

const LIKES_URL = "https://api.thecatapi.com/v1/votes";

export const sendLikes = (likes: number, id : string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEND_LIKES,
    });
    try {
        const { data } = await axios.post(LIKES_URL, {
            image_id: id,
            sub_id: "my-user-1234",
            value: likes,
          });
      dispatch({
        type: ActionType.SEND_LIKES_SUCCESS,
        payload: data,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEND_LIKES_ERROR,
          payload: err.message,
        });
      }
    }
  };
};

export const fetchScore = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEND_LIKES,
    });
    try {
        const { data } = await axios.get(LIKES_URL, 
        {
          headers: {
            "x-api-key": '49609112-c398-4aa6-a569-a2bab7c17639'
          },
          params: {
            sub_id: "my-user-1234",
          }
        });
      dispatch({
        type: ActionType.SEND_LIKES_SUCCESS,
        payload: data,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEND_LIKES_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
