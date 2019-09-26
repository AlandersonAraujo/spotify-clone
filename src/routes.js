import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Inicio from './pages/Inicio';
import Buscar from './pages/Buscar';
import Biblioteca from './pages/Biblioteca';
import Premium from './pages/Premium';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Inicio,
      Buscar,
      Biblioteca,
      Premium,
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let IconComponent = MaterialCommunityIcons;
          let iconName;
          if (routeName === 'Inicio') {
            iconName = `home`;
            //IconComponent = HomeIconWithBadge;
          } else if (routeName === 'Buscar') {
            iconName = `magnify`;
          } else if (routeName === 'Biblioteca') {
            iconName = `reorder-vertical`;
          } else if (routeName === 'Premium') {
            iconName = `spotify`;
          }
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#FFF',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#292929',
          borderTopColor: '#121212',
        },
      },
    },
  ),
);

export default Routes;
