import React from 'react';
import {ButtonContainer, TextButton} from './styles';

export const Button = ({children, outline, onPress, floating, ...props}) => {
  return (
    <ButtonContainer
      floating={floating}
      onPress={onPress}
      outline={outline}
      {...props}>
      <TextButton outline={outline}>
        {String(children).toUpperCase()}{' '}
      </TextButton>
    </ButtonContainer>
  );
};
