import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';

import RestaurantInfo from '../components/RestaurantInfo';

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const ListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

const Restaurant = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ListContainer>
        <RestaurantInfo />
      </ListContainer>
    </SafeArea>
  );
};

export default Restaurant;
