import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from 'react-native';

import { FavouritesContext } from '../../../services/favourites/context';

import Text from '../../../components/Text';
import Spacer from '../../../components/Spacer';
import SafeArea from '../../../components/SafeArea';
import RestaurantInfo from '../../restaurants/components/RestaurantInfo';

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

const FavouriteScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  if (!favourites.length) {
    return (
      <CenteredContainer>
        <Text variant='label'>You Don't Have Favourite Meals Yet!</Text>
      </CenteredContainer>
    );
  }

  return (
    <SafeArea>
      <ListContainer
        data={favourites}
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

export default FavouriteScreen;
