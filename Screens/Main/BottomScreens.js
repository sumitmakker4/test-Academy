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
import CONSTANTS from '../../MyAssets/CONSTANTS';

export default function BottomScreens() {
  const Tab = createBottomTabNavigator();
  const [selectedTab, setSelectedTab] = React.useState(CONSTANTS.HOME);

  const isNotificationEnabled = useSelector(
    state => state.notification.isEnabled,
  );
  const isLoggedin = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <>
      <View
        style={{
          flex: 1,
        }}>
        {selectedTab == CONSTANTS.HOME && <Home />}
        {selectedTab == CONSTANTS.MY_TESTS && <MyTests />}
        {selectedTab == CONSTANTS.SETTINGS && isLoggedin && <Settings />}
      </View>

      <View
        style={{
          width: SIZES.width,
          position: 'absolute',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          bottom: 0,
          backgroundColor: COLORS.PRIMARY_800,
          elevation: SIZES.FIVE,
          paddingHorizontal: SIZES.THIRTY,
          paddingVertical: SIZES.TWELVE,
          borderTopLeftRadius: SIZES.FIFTEEN,
          borderTopRightRadius: SIZES.FIFTEEN,
        }}>
        <Pressable
          style={{
            paddingHorizontal: SIZES.FIVE,
            alignItems: 'center',
          }}
          onPress={() => setSelectedTab(CONSTANTS.HOME)}>
          <Ionicons
            name={ICONS.homeOutline}
            size={SIZES.TWENTY}
            color={
              selectedTab == CONSTANTS.HOME ? COLORS.WHITE : COLORS.TEXT_GREY
            }
          />
          <Text
            style={{
              marginTop: SIZES.FIVE,
              color:
                selectedTab == CONSTANTS.HOME ? COLORS.WHITE : COLORS.TEXT_GREY,
            }}>
            {CONSTANTS.HOME}
          </Text>
        </Pressable>
        <Pressable
          style={{
            paddingHorizontal: SIZES.FIVE,
            alignItems: 'center',
          }}
          onPress={() => setSelectedTab(CONSTANTS.MY_TESTS)}>
          <Ionicons
            name={ICONS.exam}
            size={SIZES.TWENTY}
            color={
              selectedTab == CONSTANTS.MY_TESTS
                ? COLORS.WHITE
                : COLORS.TEXT_GREY
            }
          />
          <Text
            style={{
              marginTop: SIZES.FIVE,
              color:
                selectedTab == CONSTANTS.MY_TESTS
                  ? COLORS.WHITE
                  : COLORS.TEXT_GREY,
            }}>
            {CONSTANTS.MY_TESTS}
          </Text>
        </Pressable>
        <Pressable
          style={{
            paddingHorizontal: SIZES.FIVE,
            alignItems: 'center',
          }}
          onPress={() => setSelectedTab(CONSTANTS.SETTINGS)}>
          <Ionicons
            name={ICONS.settings}
            size={SIZES.TWENTY}
            color={
              selectedTab == CONSTANTS.SETTINGS
                ? COLORS.WHITE
                : COLORS.TEXT_GREY
            }
          />
          <Text
            style={{
              marginTop: SIZES.FIVE,
              color:
                selectedTab == CONSTANTS.SETTINGS
                  ? COLORS.WHITE
                  : COLORS.TEXT_GREY,
            }}>
            {CONSTANTS.SETTINGS}
          </Text>
        </Pressable>
      </View>
    </>
  );
}
