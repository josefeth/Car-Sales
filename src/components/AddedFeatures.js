import AddedFeature from './AddedFeature';
import React from 'react';
import { Footer } from 'react-bulma-components';

const AddedFeatures = props => {

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={props.removeFeature} />
          ))}
       </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
      <Footer />
    </div>
  );
};
export default AddedFeatures; 