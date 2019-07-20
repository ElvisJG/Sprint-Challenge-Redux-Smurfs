import React, { Component } from 'react';

import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

export default class Smurfs extends Component {
  render() {
    return (
      <ul>
        {this.props.smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} />;
        })}
        <SmurfForm />
      </ul>
    );
  }
}
