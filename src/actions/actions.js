export function addTopic(followingId) {
  console.log('addTopicAction')
  return {
    type: 'ADD_TOPIC',
    followingId
  }
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
}
export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch((e) => console.log('error!', e));
  };
}

export function topicsIsLoading(bool) {
  return {
    type: 'TOPICS_IS_LOADING',
    isLoading: bool
  };
}
export function topicsFetchDataSuccess(topics) {
  return {
    type: 'TOPICS_FETCH_DATA_SUCCESS',
    topics
  };
}

export function topicsFetchData(url) {
  return (dispatch) => {
    dispatch(topicsIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(topicsIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((topics) => dispatch(topicsFetchDataSuccess(topics)))
      .catch((e) => console.log('error!', e));
  };
}