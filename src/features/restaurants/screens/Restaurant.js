import React, { useContext } from 'react';
import { StatusBar, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import Search from '../components/Search';

import RestaurantInfo from '../components/RestaurantInfo';
import Spacer from '../../../components/Spacer';

import { RestaurantsContext } from '../../../services/restaurants/context';

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const CenteredContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Restaurant = () => {
  const restaurantsContext = useContext(RestaurantsContext);

  const { restaurants, isLoading, error } = restaurantsContext;

  if (isLoading) {
    return (
      <CenteredContainer>
        <ActivityIndicator
          size='large'
          animating={true}
          color={Colors.blue500}
        />
      </CenteredContainer>
    );
  }

  return (
    <SafeArea>
      <Search />
      <ListContainer
        data={restaurants}
        keyExtractor={item => item.placeId}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Spacer position='bottom' size='large'>
            <RestaurantInfo restaurant={item} />
          </Spacer>
        )}
      />
    </SafeArea>
  );
};

export default Restaurant;
