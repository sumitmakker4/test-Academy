import {Provider} from 'react-redux';
import {store} from './app/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Otp from './Screens/Authentication/Otp';
import BottomScreens from './Screens/Main/BottomScreens';
import * as React from 'react';
import {Test} from './Screens/Main/Test';
import {Search} from './Screens/Main/Search';

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
