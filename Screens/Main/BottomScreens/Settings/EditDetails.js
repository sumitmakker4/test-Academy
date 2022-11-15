import {Feather, Ionicons, MaterialIcons} from '@expo/vector-icons';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
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
import {setUserInfo} from '../../../../app/userSlice';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import COLORS from '../../../../MyAssets/COLORS';
import CONSTANTS from '../../../../MyAssets/CONSTANTS';
import ICONS from '../../../../MyAssets/ICONS';
import SIZES from '../../../../MyAssets/SIZES';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function EditDetails({navigation, route}) {
  const [details, setDetails] = useState({});
  const dispatch = useDispatch();
  const nameRef = React.useRef();
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
    console.log('fdsofj');
  }, [route]);

  function setInfo(e) {
    setDetails({...details, name: e});
  }

  function save() {
    dispatch(setUserInfo({...details, profilePic: details.profilePic}));
    navigation.goBack();
  }

  // function RenderName() {
  //   return (

  //   );
  // }

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

  async function openGallery() {
    const result = await launchImageLibrary({quality: 1});
    let uri = result.assets[0].uri;
    setDetails({...details, profilePic: uri});
    hideBottomSheet();
  }

  async function openCamera() {
    const result = await launchCamera({quality: 1});
    let uri = result.assets[0].uri;
    setDetails({...details, profilePic: uri});
    hideBottomSheet();
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
          }}>
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
                  bottom: SIZES.width * 0.02,
                  right: SIZES.width * 0.01,
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

            {/* Render Name layout */}
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
                placeholder={'Enter name here'}
                onChangeText={setInfo}
                value={details.name}></TextInput>
            </View>
            {/* Render Number layout */}
            <RenderNumber />
            {/* Render Email layout */}
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
                  }}
                  onPress={() => openGallery()}>
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
                  }}
                  onPress={openCamera}>
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
            {details != route.params.details && (
              <TouchableOpacity
                style={{
                  padding: SIZES.EIGHT,
                  paddingHorizontal: SIZES.FIFTEEN,
                  borderRadius: SIZES.FIVE,
                  marginTop: SIZES.FORTY,
                  alignSelf: 'center',
                  backgroundColor: COLORS.BLUE,
                }}
                onPress={save}>
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
