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
import {useNavigation} from '@react-navigation/native';

export default function BottomScreens() {
  const navigation = useNavigation();
  const Tab = createBottomTabNavigator();
  const isNotificationEnabled = useSelector(
    state => state.notification.isEnabled,
  );
  const isLoggedin = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const RenderHeader = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.WHITE,
          padding: SIZES.FIFTEEN,
          justifyContent: 'space-between',
          flexDirection: 'row',
          elevation: 5,
        }}>
        <Ionicons
          name={ICONS.back}
          size={SIZES.TWENTY}
          color={COLORS.TEXT_GREY}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text
          style={{
            color: COLORS.BLACK,
            fontWeight: '600',
            fontSize: SIZES.SIXTEEN,
          }}>
          Settings
        </Text>
        <Ionicons
          name={
            !isNotificationEnabled ? ICONS.notification : ICONS.notificationOff
          }
          size={SIZES.TWENTY}
          color={COLORS.TEXT_GREY}
          onPress={() => {
            isNotificationEnabled
              ? dispatch(setIsToEnable(false))
              : dispatch(setIsToEnable(true));
          }}
        />
      </View>
    );
  };
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
            header: () => <RenderHeader />,
            tabBarIcon: color => (
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
