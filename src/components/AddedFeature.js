import React from 'react';
import { Button } from 'react-bulma-components';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      

      <Button color="danger" onClick={() => props.removeFeature(props.feature)}>X</Button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
