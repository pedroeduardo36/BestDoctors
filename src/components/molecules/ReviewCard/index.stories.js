import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {ReviewCard} from './index';
import {Container} from '../../atoms/Container';

const story = storiesOf('ReviewCard', module);

story.addDecorator(getStory => <Container>{getStory()}</Container>);

story.add('Standard', () => (
  <ReviewCard
    review={{
      id: 0,
      user: {
        name: 'Ralph',
        image:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      },
      rating: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }}
  />
));
