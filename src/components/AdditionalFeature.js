import React from 'react';
import { Button } from 'react-bulma-components';

const AdditionalFeature = props => {

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      

      <Button color="danger" onClick={() => props.buyItem(props.feature)} > Add</Button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;

