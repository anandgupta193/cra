import { STATE_WISE } from "../actions/types";
export default (state = {}, action) => {
  switch (action.type) {
    case STATE_WISE:
      return action.payload;
    default:
      return state;
  }
};
