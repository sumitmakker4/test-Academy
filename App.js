import {Provider, useSelector} from 'react-redux';
import {store} from './app/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import StackScreen from './Screens/Main/StackScreens';
import {LogBox} from 'react-native';

function App() {
  LogBox.ignoreLogs(['new NativeEventEmitter']);
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
