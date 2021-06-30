import React from 'react';
import {
  AuthWrapper,
  RegularText,
  Input,
  Button,
  SemiBoldText,
  BaseTouchContainer,
} from '~/components';

export const ConfirmPhoneScreen = ({navigation}) => {
  const goToSuccess = () => {
    navigation.navigate('CreateAccountSuccess');
  };

  return (
    <AuthWrapper
      title="Confirme seu celular"
      bottomChildren={<Button onPress={goToSuccess}>FINALIZAR</Button>}>
      <RegularText>
        Enviamos um código de 6 dígitos para o seu celular. Confirme-o digitando
        no campo abaixo.
      </RegularText>
      <Input mt={16} label="CÓDIGO" placeholder="xxxx" />
      <RegularText size={16} mt={16}>
        Não recebeu o código?
      </RegularText>
      <BaseTouchContainer dir="row" align="baseline">
        <SemiBoldText mr={2}>Clique aqui </SemiBoldText>
        <RegularText size={16}>para enviar novamente.</RegularText>
      </BaseTouchContainer>
    </AuthWrapper>
  );
};
