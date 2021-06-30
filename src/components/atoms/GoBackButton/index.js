import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {BaseTouchContainer} from '../Container';
import {colors} from '~/styles/colors';

export const GoBackButton = () => {
  const navigation = useNavigation();

  return (
    <BaseTouchContainer h={32} w={32} onPress={() => navigation.goBack()}>
      <Icon color={colors.primary} name="arrowleft" size={32} />
    </BaseTouchContainer>
  );
};
