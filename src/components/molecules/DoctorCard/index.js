import React from 'react';
import {AirbnbRating} from 'react-native-ratings';
import {BaseTouchContainer, Avatar, BaseText} from '../../atoms';
import {useNavigation} from '@react-navigation/native';
import {AvatarContainer, TextContainer, RatingContainer} from './styles';
import {useAppointmentStore} from '~/services/store';

export const DoctorCard = ({doctor}) => {
  const navigation = useNavigation();
  const {setDoctor} = useAppointmentStore();

  const onClick = () => {
    setDoctor(doctor);
    navigation.navigate('DoctorDetail');
  };

  return (
    <BaseTouchContainer
      onPress={onClick}
      dir="row"
      h="100"
      bg="white"
      w="328"
      br="16">
      <AvatarContainer>
        <Avatar source={{uri: doctor.image}} />
      </AvatarContainer>
      <TextContainer>
        <BaseText size={16} color="dark" fontFamily="bold">
          {doctor.name}
        </BaseText>
        <BaseText mb={12} size={12} color="greyDark">
          {doctor.specialty}
        </BaseText>

        <RatingContainer>
          <AirbnbRating
            size={14}
            showRating={false}
            isDisabled
            defaultRating={doctor.rating}
          />
          <BaseText ml={6} size={10} color="greyDark">
            ({doctor.rating})
          </BaseText>
        </RatingContainer>
      </TextContainer>
    </BaseTouchContainer>
  );
};
