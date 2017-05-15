export function topicsFunc(state = [], action) {
  if (action.type === 'TOPIC_TOGGLE') {
    if (!state.includes(action.id)) state.push(action.id);
    else state.splice(state.indexOf(action.id), 1);
  }
  return state;
}