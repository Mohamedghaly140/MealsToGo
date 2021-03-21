import React, { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import Search from '../components/Search';

import RestaurantInfo from '../components/RestaurantInfo';
import Spacer from '../../../components/Spacer';
import SafeArea from '../../../components/SafeArea';

import { RestaurantsContext } from '../../../services/restaurants/context';

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

const Restaurant = ({ navigation }) => {
  const restaurantsContext = useContext(RestaurantsContext);

  const { restaurants, isLoading, error } = restaurantsContext;

  if (isLoading || !restaurants) {
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
          <TouchableOpacity
            activeOpacity='0.6'
            onPress={() =>
              navigation.navigate('RestaurantDetail', {
                restaurant: item,
              })
            }
          >
            <Spacer position='bottom' size='large'>
              <RestaurantInfo restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
      />
    </SafeArea>
  );
};

export default Restaurant;
