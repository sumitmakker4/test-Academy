import {View, Text, TouchableOpacity} from 'react-native';
import COLORS from '../MyAssets/COLORS';
import SIZES from '../MyAssets/SIZES';

export default function PrimaryButton({width, title, marginTop, onPress}) {
  return (
    <TouchableOpacity
      style={{
        width: width,
        borderRadius: SIZES.EIGHT,
        paddingVertical: SIZES.FIFTEEN,
        marginTop: marginTop,
        backgroundColor: COLORS.PRIMARY_800,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}>
      <Text
        style={{
          color: COLORS.WHITE,
          fontSize: SIZES.SIXTEEN,
          fontWeight: '500',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
