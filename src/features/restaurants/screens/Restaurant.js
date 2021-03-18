import React, { useContext } from 'react';
import { StatusBar, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';

import RestaurantInfo from '../components/RestaurantInfo';
import Spacer from '../../../components/Spacer';

import { RestaurantsContext } from '../../../services/restaurants/context';

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const ListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Restaurant = () => {
  const restaurantsContext = useContext(RestaurantsContext);

  const { restaurants } = restaurantsContext;

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ListContainer
        data={restaurants}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Spacer position='bottom' size='large'>
            <RestaurantInfo />
          </Spacer>
        )}
      />
    </SafeArea>
  );
};

export default Restaurant;
