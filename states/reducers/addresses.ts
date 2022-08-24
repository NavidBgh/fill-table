import { ADD_ADDRESS, DELETE_ADDRESS, UPDATE_ADDRESS } from "../actions/types";
import { cloneDeep, findIndex, remove } from 'lodash';
import { address } from "../../utils";

const initialState: address[] = [];

export const addresses = (state: address[] = initialState, action: any) => {
  switch (action.type) {
    case ADD_ADDRESS: {
      const { addressDetail } = action.payload;
      const currState = cloneDeep(state);
      currState.push(addressDetail);
      return currState;
    }

    case DELETE_ADDRESS: {
      const { addressIndex } = action.payload;
      const currState = cloneDeep(state);
      remove(currState, (obj, index) => index === addressIndex);
      return currState;
    }

    case UPDATE_ADDRESS: {
      const { addressDetail, addressIndex } = action.payload;
      const currState = cloneDeep(state);
      currState[addressIndex] = addressDetail;
      return currState;
    }

    default:
      return state;
  }
}
