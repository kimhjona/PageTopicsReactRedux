import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
// import { fetchData } from './actions/actions';

// redux 
import { Provider } from 'react-redux';
import store from './store/store';

// function loadData() {
//   console.log('running loadData')
// 	store.dispatch(fetchData('https://medcircle-coding-project.s3.amazonaws.com/api/articles.json'));
// };

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ),document.getElementById('root')
);
