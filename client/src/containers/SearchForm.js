import React, { Component } from 'react';
import {  Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SearchForm extends Component {
  constructor () {
    super();
    this.state = {
      searchQuery: '',
      location: ''
    }
  }

  search() {
    let url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.state.searchQuery}&location=${this.state.location}&limit=20`;
    this.props.handleSearch(url);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmmit = event => {
    event.preventDefault();
    this.search();
    this.setState({searchQuery: '', location: ''})
  }

  render() {
    return (
        <Form onSubmit={this.handleSubmmit}>
          <Row form>
            <Col md={8}>
              <FormGroup>
                <p className="text-info">If you want to check out random places, just enter your desired location <span className="icons">&#9786;</span></p>
                <Label>Enter your search query:</Label>
                <Input type='text' onChange={this.handleChange} name='searchQuery' value={this.state.searchQuery} placeholder='Ice cream or museum...'></Input><br />
                <Label>Enter your location or zipcode:</Label>
                <Input type='text' onChange={this.handleChange} name='location' value={this.state.location} placeholder='Newyork or 10065...'></Input><br />
              </FormGroup>
              <Button type='submit'>Search</Button>
            </Col>
            <Col md={1} />
          </Row>
        </Form>
    )
  }
}

export default SearchForm;