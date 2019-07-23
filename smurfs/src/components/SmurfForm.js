import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  };

  handleChange = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, age, height } = this.state;
    this.props.addSmurf({ name, age, height });

    this.setState({ name: '', age: '', height: '' });
  };

  render() {
    const { name, age, height } = this.state;
    return (
      <form className='add-smurf-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='Name'
          value={name}
          onChange={this.handleChange}
        />
        <input
          name='age'
          type='number'
          placeholder='Age'
          value={age}
          onChange={this.handleChange}
        />
        <input
          name='height'
          type='text'
          placeholder='height'
          value={height}
          onChange={this.handleChange}
        />
        <button type='submit'>Add New Smurf</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    creatingSmurf: state.creatingSmurf
  };
};

const mapDispatchToProps = {
  addSmurf
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmurfForm);
