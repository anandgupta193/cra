import {LIVE_NEWS} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
      case LIVE_NEWS:
        return action.payload;
      default:
        return state;
    }
  };