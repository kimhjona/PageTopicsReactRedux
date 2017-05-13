

export function addTopic(followingId) {
  console.log('addTopicAction')
  return {
    type: 'ADD_TOPIC', 
    followingId
  }
}

export function removeTopic(followingId) {
  console.log('removeTopicAction')
  return {
    type: 'REMOVE_TOPIC', 
    followingId
  }
}
