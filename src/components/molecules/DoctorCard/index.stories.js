import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {DoctorCard} from './index';
import {Container} from '../../atoms/Container';

const story = storiesOf('DoctorCard', module);

story.addDecorator(getStory => <Container>{getStory()}</Container>);

story.add('Standard', () => (
  <DoctorCard
    doctor={{
      image:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Cris Grey',
      specialty: 'Cardiologista',
      rating: 4.5,
    }}
  />
));
