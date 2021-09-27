import { ActionType } from '../action-types';
import { Action } from '../actions';

interface CatsState {
  loading: boolean;
  error: string | null;
  data: object[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: CatsState = initialState,
  action: Action
): CatsState => {
  switch (action.type) {
    case ActionType.FETCH_ALL_CATS:
      return { loading: true, error: null, data: [] };
    case ActionType.FETCH_ALL_CATS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.FETCH_ALL_CATS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
