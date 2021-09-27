import { ActionType } from '../action-types';
import { Action } from '../actions';

interface CatsState {
  loading: boolean;
  error: string | null;
  data: {id: number, message: string };
}

const initialState = {
  loading: false,
  error: null,
  data: {id: 0, message: '' },
};

export const favReducer = (
  state: CatsState = initialState,
  action: Action
): CatsState => {
  switch (action.type) {
    case ActionType.SET_FAVORITE:
      return { loading: true, error: null, data: {id: 0, message: '' } };
    case ActionType.SET_FAVORITE_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SET_FAVORITE_ERROR:
      return { loading: false, error: action.payload, data: {id: 0, message: '' } };
    default:
      return state;
  }
};

