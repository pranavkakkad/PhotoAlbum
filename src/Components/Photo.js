import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Photo extends Component {

  render() {

    const { post, i } = this.props; 
    return (
        <figure className="grid-figure">
        <Link to={'single'}><img src={post.imageLink} alt={post.description} className="grid-photo" /></Link>
        <div className="grid-photo-wrap">
          
        </div>
        <figcaption>
          <p>{post.description}</p>
          <div className="control-buttons">
          <button className="Remove" onClick={() => {
            this.props.history.push('/')
            this.props.removePicture(i)
          }}>Remove</button>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default Photo;