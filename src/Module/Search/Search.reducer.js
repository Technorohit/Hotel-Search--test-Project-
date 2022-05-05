import { HOTEL_QUERY, CITY_QUERY } from "./Search.action";
const initialState = {
  hotels: [],
  cities: [],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case HOTEL_QUERY.REQUEST:
      return {
        ...state,
      };
    case HOTEL_QUERY.SUCCESS:
      return {
        ...state,
        hotels: [...action.response],
      };
    case CITY_QUERY.REQUEST:
      return {
        ...state,
      };
    case CITY_QUERY.SUCCESS:
      return {
        ...state,
        cities: [...action.response],
      };

    case CITY_QUERY.FAILED:
    case HOTEL_QUERY.FAILED:
    default:
      return state;
  }
};
