import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import RestaurantInfo from '../components/RestaurantInfo';
import Spacer from '../../../components/Spacer';
import SafeArea from '../../../components/SafeArea';

import { RestaurantsContext } from '../../../services/restaurants/context';

const CenteredContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const RestaurantDetail = ({ navigation, route }) => {
  const { restaurant } = route.params;

  const restaurantsContext = useContext(RestaurantsContext);

  const { restaurants, isLoading, error } = restaurantsContext;

  if (isLoading || !restaurant) {
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
      <Spacer position='bottom' size='large'>
        <RestaurantInfo restaurant={restaurant} />
      </Spacer>
    </SafeArea>
  );
};

export default RestaurantDetail;
