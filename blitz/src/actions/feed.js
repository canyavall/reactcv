export const getFeed = (feed) => {
  return {
    type: 'GET_FEED',
    content: feed
  }
}

export const getFeedList = () => (dispatch, getState) => {
  const token = getState().currentuser.token;
  const URL = "https://propulsion-blitz.herokuapp.com/api/feed";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return fetch(URL, config)
    .then(res => {
      if (res.status === 200) return res.json();
        return res.status;
    })
    .then(feed => {
      if (feed !== false) dispatch(getFeed(feed));
    })
    .catch(err => {
          console.log('error: ', err);
      });
}
