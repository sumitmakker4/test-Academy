import {Provider} from 'react-redux';
import {store} from './app/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Otp from './Screens/Authentication/Otp';
import BottomScreens from './Screens/Main/BottomScreens';
import * as React from 'react';
import {Test} from './Screens/Main/Test';
import {Search} from './Screens/Main/Search';
import EditDetails from './Screens/Main/BottomScreens/Settings/EditDetails';
import {Ionicons} from '@expo/vector-icons';
import {Text} from 'react-native';
import {ViewProfilePic} from './Screens/Main/BottomScreens/Settings/ViewProfilePic';

function App() {
  const Stack = createNativeStackNavigator();

  function StackScreens() {
    return (
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          animationDuration: 200,
        }}>
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
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackScreens />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
