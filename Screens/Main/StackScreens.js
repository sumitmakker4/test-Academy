import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import Otp from '../Authentication/Otp';
import BottomScreens from '../Main/BottomScreens';
import * as React from 'react';
import {Test} from './Test';
import Search from '../Main/Search';
import EditDetails from './BottomScreens/Settings/EditDetails';
import {Ionicons} from '@expo/vector-icons';
import {Text} from 'react-native';
import ViewProfilePic from './BottomScreens/Settings/ViewProfilePic';
import NoInternet from '../NoInternet';

const StackScreen = () => {
  const Stack = createNativeStackNavigator();
  let isOnline = useSelector(state => state.internet.isOnline);

  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        animationDuration: 200,
      }}>
      {isOnline && (
        <Stack.Screen
          name="NoInternet"
          component={NoInternet}
          options={{
            headerShown: false,
          }}
        />
      )}
      <Stack.Screen
        name="BottomScreens"
        component={BottomScreens}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen
        name="Test"
        component={Test}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ViewProfilePic"
        component={ViewProfilePic}
        options={({navigation}) => ({
          headerLeft: () => (
            <Ionicons
              name={ICONS.back}
              color={COLORS.TEXT_GREY}
              size={SIZES.TWENTY_TWO}
              onPress={() => navigation.goBack()}
            />
          ),
          headerBackVisible: false,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text
              style={{
                color: COLORS.BLACK,
                fontSize: SIZES.SIXTEEN,
                fontWeight: '500',
              }}>
              {CONSTANTS.PROFILE_PIC}
            </Text>
          ),
        })}
      />
      <Stack.Screen
        name="EditDetails"
        component={EditDetails}
        options={({navigation}) => ({
          headerLeft: () => (
            <Ionicons
              name={ICONS.back}
              color={COLORS.TEXT_GREY}
              size={SIZES.TWENTY_TWO}
              onPress={() => navigation.goBack()}
            />
          ),
          headerBackVisible: false,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text
              style={{
                color: COLORS.BLACK,
                fontSize: SIZES.SIXTEEN,
                fontWeight: '500',
              }}>
              {CONSTANTS.EDIT_DETAILS}
            </Text>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
