


export function topicsFunc(state = [], action) {
  if (action.type === 'ADD_TOPIC') {
    if (!state.includes(action.id)) state.push(action.id);
  } else if (action.type === 'REMOVE_TOPIC') {
    if (state.includes(action.id)) state.splice(state.indexOf(action.id), 1);
  }
  return state;
}