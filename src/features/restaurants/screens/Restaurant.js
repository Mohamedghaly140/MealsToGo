import React, { useContext, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import Search from '../components/Search';

import RestaurantInfo from '../components/RestaurantInfo';
import Spacer from '../../../components/Spacer';
import SafeArea from '../../../components/SafeArea';
import FavouritesBar from '../../../components/FavouritesBar';
import FadeInView from '../../../components/animations/FadeIn';

import { RestaurantsContext } from '../../../services/restaurants/context';
import { FavouritesContext } from '../../../services/favourites/context';

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
  const [isToggled, setIsToggled] = useState(false);
  const restaurantsContext = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);

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
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
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
              <FadeInView>
                <RestaurantInfo restaurant={item} />
              </FadeInView>
            </Spacer>
          </TouchableOpacity>
        )}
      />
    </SafeArea>
  );
};

export default Restaurant;
