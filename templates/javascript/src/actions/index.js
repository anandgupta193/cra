import covid19 from "../api/covid19";
import news from "../api/news";
import contacts from "../api/contacts";
import WorldData from "../api/World";
import {STATE_WISE,DISTRICT_WISE,LIVE_NEWS,FETCH_CONTACTS,WORLD_DATA,ZONE_DATA} from "./types";

export const getNews = () => async dispatch => {
  const response = await news.get();

  dispatch({ type: LIVE_NEWS, payload: response.data});
};

export const getStateWise = () => async dispatch => {
  const response = await covid19.get("/data.json");

  dispatch({ type: STATE_WISE, payload: response.data });
};

export const getDistrictWise = () => async dispatch => {
  const response = await covid19.get("/state_district_wise.json");

  dispatch({ type: DISTRICT_WISE, payload: response.data });
};

export const getContacts = () => async dispatch => {
  const response = await contacts.get();

  dispatch({ type: FETCH_CONTACTS, payload: response.data});
};

export const fetchzone = () => async dispatch => {
  const response = await covid19.get("/zones.json");

  dispatch({ type: ZONE_DATA, payload: response.data});
};

export const fetchWorldData = () => async dispatch => {
  const response = await WorldData.get();

  dispatch({ type: WORLD_DATA, payload: response.data});
};
