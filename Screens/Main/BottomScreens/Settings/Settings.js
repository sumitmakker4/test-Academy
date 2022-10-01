import {Feather, Ionicons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import ICONS from '../../../../MyAssets/ICONS';
import CONSTANTS from '../../../../MyAssets/CONSTANTS';
import COLORS from '../../../../MyAssets/COLORS';
import SIZES from '../../../../MyAssets/SIZES';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {setIsAuthenticated} from '../../../../app/authSlice';
import React from 'react';
import BottomSheet from 'react-native-gesture-bottom-sheet';

export default function Settings() {
  const dispatch = useDispatch();
  const details = useSelector(state => state.user.userInfo);
  const [color, setColor] = React.useState(COLORS.WHITE);
  const bottomSheetRef = React.useRef();

  function RenderName() {
    return (
      <TouchableOpacity
        style={{
          width: SIZES.HUNDERED_PERCENT,
          maxHeight: 150,
          flexDirection: 'row',
          marginTop: SIZES.FOURTY,
          borderRadius: SIZES.TWELVE,
          backgroundColor: COLORS.LIGHT_NATIVE,
          borderWidth: 1,
          alignItems: 'center',
          borderColor: COLORS.LINE_GREY,
          padding: SIZES.FIFTEEN,
          paddingVertical: SIZES.TWENTY,
        }}>
        <View
          style={{
            height: SIZES.HUNDERED_PERCENT,
          }}>
          <Ionicons
            style={{
              borderRadius: SIZES.CIRCLE_RADIUS,
              marginTop: SIZES.FIVE,
            }}
            color={COLORS.BLACK}
            size={SIZES.SIXTEEN}
            name={ICONS.person}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginHorizontal: SIZES.FIFTEEN,
          }}>
          <Text
            style={{
              color: COLORS.TEXT_GREY,
              fontSize: SIZES.TWELVE,
            }}>
            {CONSTANTS.NAME}
          </Text>
          <Text
            style={{
              fontWeight: '500',
              color: COLORS.DARK_GREY,
              marginTop: SIZES.TWO,
              fontSize: SIZES.FIFTEEN,
            }}>
            {details.name}
          </Text>
        </View>

        <MaterialIcons
          name={ICONS.edit}
          size={SIZES.SIXTEEN}
          color={COLORS.TEXT_GREY}
        />
      </TouchableOpacity>
    );
  }

  function RenderPhoneNumber() {
    return (
      <TouchableOpacity
        style={{
          width: SIZES.HUNDERED_PERCENT,
          maxHeight: 150,
          flexDirection: 'row',
          marginTop: SIZES.TWENTY,
          borderRadius: SIZES.TWELVE,
          alignItems: 'center',
          backgroundColor: COLORS.LIGHT_NATIVE,
          borderWidth: 1,
          borderColor: COLORS.LINE_GREY,
          padding: SIZES.FIFTEEN,
          paddingVertical: SIZES.TWENTY,
        }}>
        <View
          style={{
            height: SIZES.HUNDERED_PERCENT,
          }}>
          <Ionicons
            style={{
              borderRadius: SIZES.CIRCLE_RADIUS,
              marginTop: SIZES.FIVE,
            }}
            color={COLORS.BLACK}
            size={SIZES.SIXTEEN}
            name={ICONS.call}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginHorizontal: SIZES.FIFTEEN,
          }}>
          <Text
            style={{
              color: COLORS.TEXT_GREY,
              fontSize: SIZES.TWELVE,
            }}>
            {CONSTANTS.PHONE_NUM}
          </Text>
          {!!details.phoneNumber ? (
            <Text
              style={{
                fontWeight: '500',
                color: COLORS.DARK_GREY,
                marginTop: SIZES.TWO,
                fontSize: SIZES.FIFTEEN,
              }}>
              {details.phoneNumber}
            </Text>
          ) : (
            <Text
              style={{
                fontWeight: '500',
                color: COLORS.DARK_GREY,
                marginTop: SIZES.TWO,
                fontSize: SIZES.FIFTEEN,
              }}>
              {CONSTANTS.NOT_REGISTERED}
            </Text>
          )}
        </View>

        <MaterialIcons
          name={ICONS.edit}
          size={SIZES.SIXTEEN}
          color={COLORS.TEXT_GREY}
        />
      </TouchableOpacity>
    );
  }

  function RenderEmail() {
    return (
      <TouchableOpacity
        style={{
          width: SIZES.HUNDERED_PERCENT,
          maxHeight: 150,
          flexDirection: 'row',
          marginTop: SIZES.TWENTY,
          borderRadius: SIZES.TWELVE,
          alignItems: 'center',
          backgroundColor: COLORS.LIGHT_NATIVE,
          borderWidth: 1,
          borderColor: COLORS.LINE_GREY,
          padding: SIZES.FIFTEEN,
          paddingVertical: SIZES.TWENTY,
        }}>
        <View
          style={{
            height: SIZES.HUNDERED_PERCENT,
          }}>
          <MaterialIcons
            style={{
              borderRadius: SIZES.CIRCLE_RADIUS,
              marginTop: SIZES.FIVE,
            }}
            color={COLORS.BLACK}
            size={SIZES.SIXTEEN}
            name={ICONS.email}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginHorizontal: SIZES.FIFTEEN,
          }}>
          <Text
            style={{
              color: COLORS.TEXT_GREY,
              fontSize: SIZES.TWELVE,
            }}>
            {CONSTANTS.EMAIL}
          </Text>
          {!!details.email ? (
            <Text
              style={{
                fontWeight: '500',
                color: COLORS.DARK_GREY,
                marginTop: SIZES.TWO,
                fontSize: SIZES.FIFTEEN,
              }}>
              {details.email}
            </Text>
          ) : (
            <Text
              style={{
                fontWeight: '500',
                color: COLORS.DARK_GREY,
                marginTop: SIZES.TWO,
                fontSize: SIZES.FIFTEEN,
              }}>
              {CONSTANTS.NOT_REGISTERED}
            </Text>
          )}
        </View>

        <MaterialIcons
          name={ICONS.edit}
          size={SIZES.SIXTEEN}
          color={COLORS.TEXT_GREY}
        />
      </TouchableOpacity>
    );
  }

  function showBottomSheet() {
    setColor(COLORS.ALERT_TRANSLUCENT);
    bottomSheetRef.current.show();
  }

  function hideBottomSheet() {
    setColor(COLORS.WHITE);
    bottomSheetRef.current.close();
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.WHITE,
        padding: SIZES.TWENTY,
      }}>
      <TouchableOpacity onPress={showBottomSheet}>
        <Image
          style={{
            height: SIZES.width * 0.35,
            width: SIZES.width * 0.35,
            alignSelf: 'center',
            marginTop: SIZES.TEN,
            borderRadius: SIZES.CIRCLE_RADIUS,
          }}
          source={{
            uri: 'https://media.pitchfork.com/photos/62043c007db00b3b97548cb5/1:1/w_1000,h_1000,c_limit/Snoop%20Dogg.jpg',
          }}
        />
      </TouchableOpacity>
      <RenderName />
      <RenderPhoneNumber />
      <RenderEmail />
      <BottomSheet ref={bottomSheetRef} height={220}>
        <View
          style={{
            flex: 1,
            padding: SIZES.FIFTEEN,
            backgroundColor: COLORS.WHITE,
          }}>
          <Pressable onPress={hideBottomSheet}>
            <Text
              style={{
                color: COLORS.TEXT_GREY,
                fontSize: SIZES.FIFTEEN,
              }}>
              {CONSTANTS.CANCEL}
            </Text>
          </Pressable>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              paddingVertical: SIZES.EIGHT,
              marginTop: SIZES.TEN,
              alignItems: 'center',
            }}>
            <Ionicons
              name={ICONS.picture}
              size={SIZES.TWENTY_FIVE}
              color={COLORS.ORANGE}></Ionicons>
            <Text
              style={{
                color: COLORS.BLACK,
                marginStart: SIZES.TEN,
                fontWeight: '500',
                fontSize: SIZES.SIXTEEN,
              }}>
              {CONSTANTS.PHOTOS}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              paddingVertical: SIZES.EIGHT,
              alignItems: 'center',
            }}>
            <Ionicons
              name={ICONS.camera_outline}
              size={SIZES.TWENTY_FIVE}
              color={COLORS.GREEN}></Ionicons>
            <Text
              style={{
                color: COLORS.BLACK,
                marginStart: SIZES.TEN,
                fontWeight: '500',
                fontSize: SIZES.SIXTEEN,
              }}>
              {CONSTANTS.CAMERA}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              paddingVertical: SIZES.EIGHT,
              alignItems: 'center',
            }}>
            <Feather
              name={ICONS.bin}
              size={SIZES.TWENTY_FIVE}
              color={COLORS.RED}
            />
            <Text
              style={{
                color: COLORS.BLACK,
                marginStart: SIZES.TEN,
                fontWeight: '500',
                fontSize: SIZES.SIXTEEN,
              }}>
              {CONSTANTS.REMOVE}
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </ScrollView>
  );
}
