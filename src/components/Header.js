import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { itemsFetchData, topicsFetchData } from '../actions/actions';

class Header extends Component {

  componentDidMount() {
    this.props.fetchData('https://medcircle-coding-project.s3.amazonaws.com/api/articles.json');
    this.props.fetchTopics('https://medcircle-coding-project.s3.amazonaws.com/api/topics.json');
  }

  render() {
    return (
      <div>
        <div className='header'>
          <span className='fancyFont'>PageTopicsReactRedux</span>
          <p>
            <span className='button'><NavLink to='/home' activeClassName='activeLink'>Articles</NavLink></span>
            <span className='button'><NavLink to='/topics' activeClassName='activeLink'>Topics</NavLink></span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    fetchTopics: (url) => dispatch(topicsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);



