import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actions'; 
import { Switch, Route } from 'react-router-dom';
import Main from './Main';

function mapStateToProps(state) {
  return {
    following: state.following,
    articles: state.articles,
    topics: state.topics
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const AppRedux = connect(mapStateToProps, mapDispatchToProps)(Main);

export default AppRedux;