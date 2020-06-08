import { DISTRICT_WISE } from "../actions/types";
export default (state = {}, action) => {
  switch (action.type) {
    case DISTRICT_WISE:
      return action.payload;
    default:
      return state;
  }
};
