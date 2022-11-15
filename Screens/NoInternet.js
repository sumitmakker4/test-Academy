import {Image, Text, View} from 'react-native';
import SIZES from '../MyAssets/SIZES';
import COLORS from '../MyAssets/COLORS';

const NoInternet = () => {
  return (
    <View
      style={{
        height: SIZES.HUNDERED_PERCENT,
        padding: SIZES.TWENTY,
        alignItems: 'center',
        backgroundColor: COLORS.BLACK,
      }}>
      <Image
        style={{
          marginTop: SIZES.THIRTY,
        }}
        source={require('../assets/images/no_internet.gif')}
      />
    </View>
  );
};

export default NoInternet;
