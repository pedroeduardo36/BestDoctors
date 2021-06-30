import React from 'react';
import {BaseText} from '~/components/atoms';
import {CardContainer} from './styles';

export const SpecialtyCard = ({text, selected}) => (
  <CardContainer>
    <BaseText
      size={14}
      fontFamily="medium"
      color={selected ? 'primary' : 'greyDark'}>
      {text}
    </BaseText>
  </CardContainer>
);
