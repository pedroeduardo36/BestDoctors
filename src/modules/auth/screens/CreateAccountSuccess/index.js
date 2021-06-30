import React from 'react';
import {AuthWrapper, Title, Button} from '~/components';
import {Container, SuccessImg} from './styles';
import checkImage from '~/assets/img/testsada.png';

export const CreateAccountSuccessScreen = () => {
  return (
    <AuthWrapper bottomChildren={<Button>ACESSAR O APP</Button>}>
      <Container>
        <SuccessImg source={checkImage} />
        <Title align="center" mt={16}>
          Conta criada com sucesso!
        </Title>
      </Container>
    </AuthWrapper>
  );
};
