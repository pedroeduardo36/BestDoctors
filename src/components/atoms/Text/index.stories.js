import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Title, CardTitle, RegularText} from './index';
import {Container} from '../Container';

const story = storiesOf('Text', module);

story.addDecorator(getStory => <Container>{getStory()}</Container>);

story.add('Title', () => <Title>{text('Title', 'Bem-vindo de volta!')}</Title>);

story.add('CardTitle', () => (
  <CardTitle>{text('CardTitle', 'Paciente')}</CardTitle>
));

story.add('RegularText', () => (
  <RegularText>
    {text(
      'RegularText',
      'Irei cadastrar meu perfil médico para anteder meus pacientes e me associar à uma clinica (opcional).',
    )}
  </RegularText>
));
