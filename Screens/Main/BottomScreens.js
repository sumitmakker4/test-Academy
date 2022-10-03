import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLORS from '../../MyAssets/COLORS';
import Ionicons from '@expo/vector-icons/Ionicons';
import SIZES from '../../MyAssets/SIZES';
import ICONS from '../../MyAssets/ICONS';
import Home from './BottomScreens/Home';
import MyTests from './BottomScreens/MyTests';
import Settings from './BottomScreens/Settings/Settings';
import {Test} from './Test';
import {useDispatch, useSelector} from 'react-redux';
import {Pressable, StatusBar, Text, View} from 'react-native';
import {setIsToEnable} from '../../app/notificationSlice';
import React from 'react';

export default function BottomScreens() {
  const Tab = createBottomTabNavigator();
  const isNotificationEnabled = useSelector(
    state => state.notification.isEnabled,
  );
  const isLoggedin = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: COLORS.WHITE,
          tabBarLabelStyle: {fontSize: SIZES.TWELVE, fontWeight: '500'},
          tabBarStyle: {
            height: SIZES.SIXTY_FIVE,
            borderRadius: SIZES.TWELVE,
            backgroundColor: COLORS.PRIMARY_800,
            paddingTop: SIZES.TEN,
            elevation: SIZES.FIVE,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: SIZES.TEN,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Ionicons
                name={ICONS.homeOutline}
                size={SIZES.TWENTY_TWO}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="My Tests"
          component={MyTests}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Ionicons
                name={ICONS.exam}
                size={SIZES.TWENTY_TWO}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTitleAlign: 'center',
            headerRightContainerStyle: {
              paddingEnd: SIZES.TEN,
            },
            headerRight: () => (
              <Ionicons
                name={
                  !isNotificationEnabled
                    ? ICONS.notification
                    : ICONS.notificationOff
                }
                size={SIZES.TWENTY}
                color={COLORS.TEXT_GREY}
                onPress={() => {
                  isNotificationEnabled
                    ? dispatch(setIsToEnable(false))
                    : dispatch(setIsToEnable(true));
                }}
              />
            ),
            tabBarIcon: ({color}) => (
              <Ionicons
                name={ICONS.settings}
                size={SIZES.TWENTY_TWO}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
