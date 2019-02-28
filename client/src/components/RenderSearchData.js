import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class RenderSearchData extends Component {
  handleClick = id => {
    let url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`
    this.props.toggleRender();
    this.props.handleSearch(url);
  }

  render() {
    const { place } = this.props;
    return (
      <ListGroupItem onClick={() => this.handleClick(place.id)} className='RenderSearchData'>
        <ListGroupItemText>
          {place.isAddedToList ? <span className="icons"> &#9733; </span> : <span className="icons"> &#9734; </span>}{place.category}
        </ListGroupItemText>
        <ListGroupItemHeading>{place.name}</ListGroupItemHeading>
      </ListGroupItem>
    )
  }
}

export default RenderSearchData;