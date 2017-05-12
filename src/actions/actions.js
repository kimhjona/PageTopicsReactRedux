// add name 
// import axios from 'axios';

// export function getData() {
//   return axios({
//     method:'get',
//     url:'https://medcircle-coding-project.s3.amazonaws.com/api/articles.json',
//     responseType:'json'
//   })
//   .then(function(response) {
//     console.log(response);
// });
// }

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

// export function fetchData(url) {
//   console.log('fetching')
// 	return function(dispatch) {
// 		// dispatch(requestData());
// 		return axios({
// 			url: url,
// 			timeout: 20000,
// 			method: 'get',
// 			responseType: 'json'
// 		})
// 			.then(function(response) {
// 				// dispatch(receiveData(response.data));
//         console.log(response)
// 			})
// 			.catch(function(response){
// 				// dispatch(receiveError(response.data));
// 				// dispatch(pushState(null,'/error'));
//         console.log(response)
// 			})
// 	}
// };
