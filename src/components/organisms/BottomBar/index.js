import React from 'react';
import ICON from 'react-native-vector-icons/AntDesign';
import {colors} from '~/styles/colors';
import {BottomBarContainer, BarItem} from './styles';

const ICONS_ASSETS = [
  {
    id: 0,
    name: 'Home',
    icon: 'home',
  },
  {
    id: 1,
    name: 'Search',
    icon: 'search1',
  },
  {
    id: 2,
    name: 'History',
    icon: 'calendar',
  },
  {
    id: 3,
    name: 'Profile',
    icon: 'user',
  },
];

export const BottomBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <BottomBarContainer>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const ItemInfo = ICONS_ASSETS.find(item => item.name === label);

        return (
          <BarItem
            key={ItemInfo.id}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <ICON
              color={isFocused ? colors.primary : colors.greyDark}
              size={24}
              name={ItemInfo.icon}
            />
          </BarItem>
        );
      })}
    </BottomBarContainer>
  );
};
