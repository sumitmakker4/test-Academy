import {Feather, Ionicons, MaterialIcons} from '@expo/vector-icons';
import React from 'react';
import {useSelector} from 'react-redux';
import {
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import COLORS from '../../../../MyAssets/COLORS';
import CONSTANTS from '../../../../MyAssets/CONSTANTS';
import ICONS from '../../../../MyAssets/ICONS';
import SIZES from '../../../../MyAssets/SIZES';

export default function EditDetails({navigation, route}) {
  const [details, setDetails] = React.useState(null);
  const bottomSheetRef = React.useRef();

  function showBottomSheet() {
    bottomSheetRef.current.show();
  }

  function hideBottomSheet() {
    bottomSheetRef.current.close();
  }

  React.useEffect(() => {
    if (route.params) {
      setDetails(route.params.details);
    }
  }, []);

  function onNameChange(e) {
    setDetails({...details, name: e});
  }

  function RenderName() {
    return (
      <View
        style={{
          width: SIZES.NINTY_PERCENT,
          alignSelf: 'center',
          marginTop: SIZES.ADD_HEIGHT,
        }}>
        <Text
          style={{
            color: COLORS.TEXT_GREY,
            fontWeight: '500',
            marginStart: SIZES.FIVE,
          }}>
          {CONSTANTS.NAME}
        </Text>
        <TextInput
          style={{
            color: COLORS.BLACK,
            fontWeight: '500',
            borderColor: COLORS.LINE_GREY,
            paddingHorizontal: SIZES.FIFTEEN,
            backgroundColor: COLORS.LIGHT_NATIVE,
            marginTop: SIZES.EIGHT,
            borderWidth: SIZES.TWO,
            borderRadius: SIZES.EIGHT,
          }}
          value={details.name}
          onChangeText={onNameChange}
        />
      </View>
    );
  }

  function RenderNumber() {
    return (
      <Pressable
        style={{
          width: SIZES.NINTY_PERCENT,
          alignSelf: 'center',
          marginTop: SIZES.TWENTY,
        }}>
        <Text
          style={{
            color: COLORS.TEXT_GREY,
            fontWeight: '500',
            marginStart: SIZES.FIVE,
          }}>
          {CONSTANTS.NUMBER}
        </Text>
        <Text
          style={{
            color: COLORS.BLACK,
            fontWeight: '500',
            borderColor: COLORS.LINE_GREY,
            paddingHorizontal: SIZES.FIFTEEN,
            paddingVertical: SIZES.FIFTEEN,
            backgroundColor: COLORS.LIGHT_NATIVE,
            marginTop: SIZES.EIGHT,
            borderWidth: SIZES.TWO,
            borderRadius: SIZES.EIGHT,
          }}>
          {!!details.phoneNumber
            ? details.phoneNumber
            : CONSTANTS.NOT_REGISTERED}
        </Text>
      </Pressable>
    );
  }

  function RenderEmail() {
    return (
      <Pressable
        style={{
          width: SIZES.NINTY_PERCENT,
          alignSelf: 'center',
          marginTop: SIZES.TWENTY,
        }}>
        <Text
          style={{
            color: COLORS.TEXT_GREY,
            fontWeight: '500',
            marginStart: SIZES.FIVE,
          }}>
          {CONSTANTS.EMAIL}
        </Text>
        <Text
          style={{
            color: COLORS.BLACK,
            fontWeight: '500',
            borderColor: COLORS.LINE_GREY,
            paddingHorizontal: SIZES.FIFTEEN,
            paddingVertical: SIZES.FIFTEEN,
            backgroundColor: COLORS.LIGHT_NATIVE,
            marginTop: SIZES.EIGHT,
            borderWidth: SIZES.TWO,
            borderRadius: SIZES.EIGHT,
          }}>
          {!!details.email ? details.email : CONSTANTS.NOT_REGISTERED}
        </Text>
      </Pressable>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}>
      {details && (
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: COLORS.WHITE,
          }}
          keyboardShouldPersistTaps="handled">
          <>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                style={{
                  height: SIZES.width * 0.33,
                  width: SIZES.width * 0.33,
                  marginTop: SIZES.TWENTY_TWO,
                  borderRadius: SIZES.CIRCLE_RADIUS,
                }}
                source={{
                  uri: details.profilePic,
                }}
              />
              <Pressable
                style={{
                  position: 'absolute',
                  bottom: SIZES.FIVE,
                  right: SIZES.TEN,
                  backgroundColor: COLORS.BLUE,
                  borderRadius: SIZES.CIRCLE_RADIUS,
                  padding: 6,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={showBottomSheet}>
                <MaterialIcons
                  name={ICONS.edit}
                  color={COLORS.WHITE}
                  size={SIZES.FIFTEEN}
                  onPress={showBottomSheet}
                />
              </Pressable>
            </View>
            <RenderName />
            <RenderNumber />
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
                    style={{width: SIZES.TWENTY_FIVE}}
                    name={ICONS.bin}
                    size={SIZES.TWENTY_TWO}
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
            {details.name != route.params.details.name && (
              <TouchableOpacity
                style={{
                  padding: SIZES.EIGHT,
                  paddingHorizontal: SIZES.FIFTEEN,
                  borderRadius: SIZES.FIVE,
                  marginTop: SIZES.FORTY,
                  alignSelf: 'center',
                  backgroundColor: COLORS.BLUE,
                }}
                onPress={() => navigation.goBack()}>
                <Text
                  style={{
                    fontWeight: '500',
                    color: COLORS.WHITE,
                    fontSize: SIZES.SIXTEEN,
                  }}>
                  {CONSTANTS.SAVE}
                </Text>
              </TouchableOpacity>
            )}
          </>
        </ScrollView>
      )}
    </View>
  );
}
