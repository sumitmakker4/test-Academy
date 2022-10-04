import {View, Pressable, Text, TouchableOpacity} from 'react-native';
import COLORS from '../MyAssets/COLORS';
import SIZES from '../MyAssets/SIZES';

export default function AlertDialog({
  message,
  subMessage,
  onPress,
  isToShowCancel,
  onCancelPressed,
}) {
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.ALERT_TRANSLUCENT,
      }}>
      <Pressable
        style={{
          backgroundColor: COLORS.WHITE,
          borderRadius: SIZES.EIGHT,
          width: SIZES.NINTY_PERCENT,
          padding: SIZES.TEN,
          paddingVertical: SIZES.TWENTY_FIVE,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingVertical: 5,
            color: COLORS.BLACK,
          }}>
          {message}
        </Text>

        <Text
          style={{
            fontSize: SIZES.SIXTEEN,
            paddingVertical: SIZES.TWO,
            color: COLORS.TEXT_GREY,
            textAlign: 'center',
          }}>
          {subMessage}
        </Text>

        <View
          style={{
            width: SIZES.EIGHTY_PERCENT,
            flexDirection: 'row',
            justifyContent: isToShowCancel ? 'space-between' : 'center',
          }}>
          {isToShowCancel && (
            <TouchableOpacity onPress={onCancelPressed}>
              <Text
                style={{
                  fontSize: SIZES.FIFTEEN,
                  paddingHorizontal: SIZES.THIRTY,
                  fontWeight: '500',
                  paddingVertical: SIZES.EIGHT,
                  marginTop: SIZES.TWENTY,
                  color: COLORS.WHITE,
                  borderRadius: SIZES.TWELVE,
                  backgroundColor: COLORS.BLUE,
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={onPress}>
            <Text
              style={{
                fontSize: SIZES.FIFTEEN,
                paddingHorizontal: SIZES.THIRTY,
                fontWeight: '500',
                paddingVertical: SIZES.EIGHT,
                marginTop: SIZES.TWENTY,
                color: COLORS.WHITE,
                borderRadius: SIZES.TWELVE,
                backgroundColor: COLORS.PRIMARY_800,
              }}>
              Okay
            </Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </View>
  );
}
