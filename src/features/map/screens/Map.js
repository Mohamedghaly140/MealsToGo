import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import Search from '../components/Search';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = () => {
  return (
    <>
      <Search />
      <Map />
    </>
  );
};

export default MapScreen;
