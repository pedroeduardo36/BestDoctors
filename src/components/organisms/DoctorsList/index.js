import React from 'react';
import {BaseContainer} from '~/components/atoms';
import {DoctorCard} from '~/components/molecules';
import {List} from './styles';
import {MOCK_DATA} from './settings';

export const DoctorsList = () => (
  <List
    data={MOCK_DATA}
    renderItem={({item}) => <DoctorCard doctor={item} />}
    keyExtractor={item => item.id}
    ItemSeparatorComponent={() => <BaseContainer h={16} />}
  />
);
