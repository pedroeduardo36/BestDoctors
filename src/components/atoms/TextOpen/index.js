import React from 'react';
import {BaseText} from '../Text';
import {MainContainer} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '~/styles/colors';

export const TextOpen = ({children}) => (
  <MainContainer>
    <BaseText fontFamily="medium" size={14}>
      {children}
    </BaseText>
    <Icon name="chevron-down-outline" size={16} color={colors.primary} />
  </MainContainer>
);
