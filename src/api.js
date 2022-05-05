export default function doRequest(url, action ) {
  console.log('calllllll')
  return async (dispatch) => {
    dispatch({
      type: action.REQUEST,
    });
    let options = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log('data',data)
      if (data) {
        dispatch({ type: action.SUCCESS, response: data });
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  };
}
