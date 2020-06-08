import {ZONE_DATA} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
      case ZONE_DATA:
        return action.payload;
      default:
        return state;
    }
  };