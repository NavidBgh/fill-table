import { ADD_ADDRESS, DELETE_ADDRESS, FETCH_ADDRESS, UPDATE_ADDRESS } from "../actions/types";
import { cloneDeep, findIndex, remove } from 'lodash';

const initialState: any = [];

export const addresses = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ADD_ADDRESS: {
      const { addressDetail } = action.payload;
      const currState = cloneDeep(state);
      currState.push(addressDetail);
      return currState;
    }

    default:
      return state;
  }
}
