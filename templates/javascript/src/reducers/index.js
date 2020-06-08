import { combineReducers } from "redux";
import district from "./district";
import states from "./state";
import news from "./news";
import contacts from "./Contacts";
import worldData from "./World";
import zonedata from "./Zones";
export default combineReducers({
  DistrictData: district,
  StateData: states,
  News: news,
  Contacts: contacts,
  worldData: worldData,
  ZoneDetails: zonedata
});