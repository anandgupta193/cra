import {FETCH_CONTACTS} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
      case FETCH_CONTACTS:
        return action.payload;
      default:
        return state;
    }
  };