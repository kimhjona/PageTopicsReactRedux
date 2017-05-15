export function topics(state = [], action) {
    switch (action.type) {
        case 'TOPICS_FETCH_DATA_SUCCESS':
          // console.log('action TOPICS', action)
            return action.topics;
        default:
            return state;
    }
}

export function topicsIsLoading(state = false, action) {
    switch (action.type) {
        case 'TOPICS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}