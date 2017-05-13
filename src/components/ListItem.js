import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    console.log('this.props:',this.props);
    return (
      <div className='listItem'>
        <h1>{ this.props.title }</h1>
        <p>
          Source: { this.props.source }
        </p>
        <p className='grey'>
          May 9
        </p>
        <div className='summary'>
          { this.props.summary } <a className='a' href={'' + this.props.url} >Read More</a>
        </div>
        <hr/>
        <span className='like'><img src={require('../img/thumbsup.png')} className='likeImg' alt="Like Button" width='20' height='20'/>{ this.props.likes } Likes</span>
      </div>
    );
  }
}

export default ListItem;
