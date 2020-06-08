import {WORLD_DATA} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
      case WORLD_DATA:
        return action.payload;
      default:
        return state;
    }
  };