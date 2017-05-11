import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <div className='listItem'>
        <h1>Title goes here</h1>
        <p>
          Source: http://lskjfsdalkfjsdl.com
        </p>
        <p className='grey'>
          May 9
        </p>
        <div className='summary'>
          For the new study, Canadian researchers analyzed data from more than 100,000 people to determine if this was true. TUESDAY,
          May 9, 2017 (HealthDay News) -- Vitamin D supplements aren't likely to reduce the risk of asthma, allergies or the
          skin condition eczema in children or adults, a new study finds. Previous research had suggested that low vitamin D
          levels were linked with these "atopic" conditions. <a href='#'>Read More</a>
        </div>
        <hr/>
        <span className='like'><img src={require('./img/thumbsup.png')} className='likeImg' alt="Like Button" width='20' height='20'/>26 Likes</span>
      </div>
    );
  }
}

export default ListItem;
