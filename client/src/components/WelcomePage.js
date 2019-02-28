import React, { Component } from 'react';
import { mySearchQuery, singleSearchQuery } from '../actions/APIsearch';
import SearchForm from '../containers/SearchForm';
import RenderSearchData from './RenderSearchData';
import RenderSinglePlace from './RenderSinglePlace';
import { Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';

class WelcomePage extends Component {
  state = { clicked: false }

  toggleRender = () => {
    this.setState({clicked: true})
  }
  
  render() {
    return (
      <Container>
        <h1>Let's do some search around!</h1>
        <SearchForm handleSearch={this.props.mySearchQuery} />
        <hr />
        <Row>
          <Col xs="3">
            {this.props.mySearchData.map(data => <RenderSearchData key={data.id} handleSearch={this.props.singleSearchQuery} toggleRender={this.toggleRender} place={data}/>)}
          </Col>
          <Col xs="1" />
          <Col xs="7">
            {this.state.clicked ? <RenderSinglePlace myPlace={this.props.myPlace} /> : null}
          </Col>
          <Col xs="1" />
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    mySearchData: state.mySearch.places,
    myPlace: state.mySearch.singlePlace
  };
}
  
const mapDispatchToProps = dispatch => {
  return {
    mySearchQuery: url => dispatch(mySearchQuery(url)),
    singleSearchQuery: url => dispatch(singleSearchQuery(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);