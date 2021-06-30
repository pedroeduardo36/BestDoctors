import React from 'react';
import {AuthWrapper, Input, TextLink, Button} from '~/components';
import {ButtonContainer, ContentContainer} from './styles';

export const LoginScreen = ({navigation}) => {
  const goToCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  const goToSplash = () => {
    navigation.navigate('Splash');
  };

  return (
    <AuthWrapper
      title="Bem vindo de volta!"
      bottomChildren={
        <>
          <Button onPress={goToSplash}>ENTRAR</Button>
          <Button onPress={goToCreateAccount} mt={24} outline>
            CRIAR NOVA CONTA
          </Button>
        </>
      }>
      <Input label="EMAIL" placeholder="meu.email@gmail.com" />
      <Input mt={16} label="SENHA" placeholder="*****" />
      <TextLink text="Esqueceu sua senha? " mt={36} />
    </AuthWrapper>
  );
};
