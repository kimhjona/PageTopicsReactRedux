
export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case 'ITEMS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}
export function items(state = [], action) {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      // console.log('action ACTION', action)
      return action.items;
    default:
      return state;
  }
}