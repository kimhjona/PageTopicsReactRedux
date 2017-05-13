import React, { Component } from 'react';

class ListItem extends Component {

  render() {
    const monthsArr = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    const date = this.props.date.split('-');
    const month = monthsArr[date[1] - 1];
    const day = date[2].slice(0,2);

    return (
      <div className='listItem'>
        <h1>{ this.props.title }</h1>
        <p>
          Source: { this.props.source }
        </p>
        <p className='grey'>
          { month } { day }
        </p>
        <div className='summary'>
          { this.props.summary } <a className='a' href={'' + this.props.url} target="_blank">Read More</a>
        </div>
        <hr/>
        <span className='like'><img src={require('../img/thumbsup.png')} className='likeImg' alt="Like Button" width='20' height='20'/>{ this.props.likes } Likes</span>
      </div>
    );
  }
}

export default ListItem;
