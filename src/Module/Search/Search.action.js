import doRequest from '../../api'
export const HOTEL_QUERY = {
    REQUEST: 'HOTEL_QUERY_REQUEST',
    SUCCESS: 'HOTEL_QUERY_SUCCESS',
    FAILED: 'HOTEL_QUERY_FAILED',
    LOGOUT: 'HOTEL_QUERY_LOGOUT',
}

export const CITY_QUERY = {
    REQUEST: 'CITY_QUERY_REQUEST',
    SUCCESS: 'CITY_QUERY_SUCCESS',
    FAILED: 'CITY_QUERY_FAILED',
    LOGOUT: 'CITY_QUERY_LOGOUT',
}

export const getHotels = () => {
    return dispatch => {
        const urlDetails = 'https://oyo-server.herokuapp.com/hotel';
        return dispatch(doRequest(urlDetails, HOTEL_QUERY))
    }
}
export const getCities = () => {
    return dispatch => {
        const urlDetails = 'http://demo1608674.mockable.io/cities';
        return dispatch(doRequest(urlDetails, CITY_QUERY))
    }
}