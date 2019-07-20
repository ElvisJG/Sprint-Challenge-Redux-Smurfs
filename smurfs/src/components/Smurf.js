import React from 'react';

const Smurf = props => {
  console.log('SMURF PROPS:', props);
  const { name, age, height } = props.smurf;
  return (
    <li>
      name: {name} age: {age} height: {height}
    </li>
  );
};

export default Smurf;
