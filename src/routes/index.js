import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from '~/modules/auth/routes';
import {PatientNavigator} from '~/modules/Patient/routes';

export const Routes = () => {
  return (
    <NavigationContainer>
      <PatientNavigator />
    </NavigationContainer>
  );
};
