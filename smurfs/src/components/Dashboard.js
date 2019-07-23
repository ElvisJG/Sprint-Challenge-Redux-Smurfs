import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import Smurfs from './Smurfs';

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <>
        {this.props.fetching ? (
          <p>Loading Smurfs...</p>
        ) : (
          <Smurfs smurfs={this.props.smurfs} />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error
  };
};

const mapDispatchToProps = {
  fetchSmurfs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
