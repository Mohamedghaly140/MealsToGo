import React from 'react';

import CompactRestaurantInfo from '../../../components/CompactRestaurantInfo';

const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap />;
};

export default MapCallout;
