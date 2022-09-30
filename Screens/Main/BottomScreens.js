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
import {StatusBar, Text, View} from 'react-native';
import {setIsToEnable} from '../../app/notificationSlice';

export default function BottomScreens() {
  const Tab = createBottomTabNavigator();

  const isNotificationEnabled = useSelector(
    state => state.notification.isEnabled,
  );
  const isLoggedin = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontWeight: '500',
            fontSize: SIZES.TWELVE,
          },
          tabBarInactiveTintColor: COLORS.MID_GREY,
          tabBarActiveTintColor: COLORS.DARK_GREY,
          tabBarStyle: {
            backgroundColor: COLORS.WHITE,
            height: SIZES.height * 0.067,
          },
          tabBarItemStyle: {
            padding: SIZES.FIVE,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={ICONS.homeOutline}
                color={focused ? COLORS.DARK_GREY : COLORS.MID_GREY}
                size={17}
              />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="MyTests"
          component={MyTests}
          options={{
            headerShown: false,
            tabBarLabel: 'My Tests',
            tabBarIcon: ({focused, tintColor}) => (
              <Ionicons
                name={ICONS.exam}
                color={focused ? COLORS.DARK_GREY : COLORS.MID_GREY}
                size={18}
              />
            ),
          }}></Tab.Screen>

        {isLoggedin && (
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              headerLeftContainerStyle: {paddingHorizontal: SIZES.FIFTEEN},
              headerRightContainerStyle: {paddingHorizontal: SIZES.FIFTEEN},
              headerTitleAlign: 'center',
              header: () => (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: SIZES.FIFTEEN,
                    backgroundColor: COLORS.WHITE,
                    elevation: SIZES.FIVE,
                  }}>
                  <Ionicons
                    name={ICONS.back}
                    color={COLORS.BLACK}
                    size={SIZES.TWENTY}
                  />
                  <Text
                    style={{
                      color: COLORS.BLACK,
                      fontSize: SIZES.EIGHTEEN,
                      fontWeight: '500',
                    }}>
                    Settings
                  </Text>
                  <Ionicons
                    name={
                      isNotificationEnabled
                        ? ICONS.notification
                        : ICONS.notificationOff
                    }
                    onPress={() =>
                      dispatch(
                        setIsToEnable(isNotificationEnabled ? false : true),
                      )
                    }
                    color={COLORS.TEXT_GREY}
                    size={SIZES.TWENTY}
                  />
                </View>
              ),
              tabBarIcon: ({focused, tintColor}) => (
                <Ionicons
                  name={ICONS.settings}
                  color={focused ? COLORS.DARK_GREY : COLORS.MID_GREY}
                  size={18}
                />
              ),
            }}></Tab.Screen>
        )}
      </Tab.Navigator>
    </>
  );
}
