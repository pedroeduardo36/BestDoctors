import React from 'react';
import {AirbnbRating} from 'react-native-ratings';
import {BaseContainer, Avatar, BaseText} from '../../atoms';

import {AvatarContainer, TextContainer, RatingContainer} from './styles';

export const ReviewCard = ({review}) => {
  const {user} = review;

  return (
    <BaseContainer dir="row" h="100" bg="white" w="328" br="16" mb="16">
      <AvatarContainer>
        <Avatar source={{uri: user.image}} />
      </AvatarContainer>
      <TextContainer>
        <BaseText size={12} color="dark" fontFamily="bold">
          {user.name}
        </BaseText>

        <RatingContainer>
          <AirbnbRating
            size={14}
            showRating={false}
            isDisabled
            defaultRating={review.rating}
          />
          <BaseText ml={6} size={10} color="greyDark">
            ({review.rating})
          </BaseText>
        </RatingContainer>
        <BaseText ml={6} size={10} color="greyDark" w={220}>
          ({review.description})
        </BaseText>
      </TextContainer>
    </BaseContainer>
  );
};
