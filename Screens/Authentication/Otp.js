import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  BackHandler,
} from 'react-native';
import {setIsAuthenticated} from '../../app/authSlice';
import {LogBox} from 'react-native';
import CONSTANTS from '../../MyAssets/CONSTANTS';
import SIZES from '../../MyAssets/SIZES';
import {useDispatch} from 'react-redux';
import COLORS from '../../MyAssets/COLORS';
import PrimaryButton from '../../Components/PrimaryButton';
import DUMMY_DATA from '../../MyAssets/DUMMY_DATA';
import AlertDialog from '../../Components/AlertDialog';

export default function Otp({navigation}) {
  LogBox.ignoreAllLogs();

  const countryCode = '+91';
  const otpRef = React.useRef();
  const [otp, setOtp] = React.useState('');
  const [alertDetails, setAlertDetails] = React.useState();
  const [isOtpSent, setIsOtpSent] = React.useState(false);
  const [number, setNumber] = React.useState('');
  const [timerTime, setTimerTime] = React.useState(10);
  const [isToShowAlertDialog, setIsToShowAlertDialog] = React.useState(false);
  const flatListRef = React.useRef();
  const [buttonTitle, setButtonTitle] = React.useState(CONSTANTS.NEXT);
  const dispatch = useDispatch();

  function handleBackButtonClick() {
    if (isOtpSent) {
      flatListRef.current.scrollToIndex({
        index: 0,
        animated: true,
      });
      setButtonTitle(CONSTANTS.NEXT);
      setIsOtpSent(false);
    } else {
      navigation.goBack();
    }
    return true;
  }

  function onButtonPressed() {
    if (buttonTitle == CONSTANTS.NEXT) {
      if (number.length == 10) {
        setIsOtpSent(true);
        setButtonTitle(CONSTANTS.VERIFY);
        flatListRef.current.scrollToIndex({
          index: 1,
          animated: true,
        });
        startTimer();
      } else {
        setAlertDetails({
          message: 'Invalid Number!!',
          subMessage: 'Please check your number and try again.',
        });
        showAlert();
      }
    } else {
      if (otp == 8080 || otp.length < 4) {
        dispatch(setIsAuthenticated(true));
      } else {
        setAlertDetails({
          message: 'Invalid Otp!!',
          subMessage: 'Check your otp and try again.',
        });
        showAlert();
      }
    }
  }

  function showAlert() {
    setIsToShowAlertDialog(true);
  }

  function stopTimer() {}

  function startTimer() {}

  return (
    <>
      <View
        style={{
          flex: 1,
        }}>
        <Image
          source={{
            uri: 'https://e7.pngegg.com/pngimages/78/594/png-transparent-abstract-blue-squares-background.png',
          }}
          style={{
            height: SIZES.height * 0.25,
          }}
        />

        <ScrollView
          style={{
            width: SIZES.HUNDERED_PERCENT,
            padding: SIZES.THIRTY,
            backgroundColor: COLORS.WHITE,
            borderTopLeftRadius: SIZES.TWENTY,
            borderTopRightRadius: SIZES.TWENTY,
          }}>
          <FlatList
            style={{
              width: SIZES.width,
            }}
            ref={flatListRef}
            horizontal
            pagingEnabled={true}
            scrollEnabled={false}
            scrollEventThrottle={16}
            snapToInterval={SIZES.width}
            showsHorizontalScrollIndicator={false}
            data={DUMMY_DATA.OTP_ARRAY}
            renderItem={({item, index}) => {
              if (item == 'otp') {
                let customisedNumber = '';

                if (number.length == 10) {
                  customisedNumber = number.slice(0, -4) + '****';
                }
                return (
                  <View
                    key={`${item}${index}`}
                    style={{
                      width: SIZES.width,
                    }}>
                    <Text
                      style={{
                        color: COLORS.BLACK,
                        fontSize: SIZES.TWENTY,
                        fontFamily: 'Aller_Rg',
                      }}>
                      {CONSTANTS.ENTER_CODE_SENT}
                    </Text>
                    <Text
                      style={{
                        fontSize: SIZES.TWELVE,
                        color: COLORS.TEXT_GREY,
                        marginTop: SIZES.FIFTEEN,
                      }}>
                      {CONSTANTS.WE_SENT_IT_TO}
                      <Text>
                        {countryCode} {customisedNumber}
                      </Text>
                    </Text>

                    <TextInput
                      ref={otpRef}
                      style={{
                        height: 0,
                        opacity: 0,
                      }}
                      keyboardType={'numeric'}
                      onChangeText={e => setOtp(e)}
                      autoFocus={true}
                    />
                    <Pressable
                      style={{
                        width: SIZES.EIGHTY_PERCENT,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: SIZES.THIRTY,
                      }}
                      onPress={() => otpRef.current.focus()}>
                      {DUMMY_DATA.CODE_ARRAY.map((item, index) => {
                        let backgroundColor =
                          otp.length > 0 && index < otp.length
                            ? COLORS.BLACK
                            : COLORS.WHITE;

                        return (
                          <Pressable
                            style={{
                              height: SIZES.EIGHT,
                              width: SIZES.EIGHT,
                              borderWidth: 1,
                              borderRadius: 50,
                              borderColor: COLORS.BLACK,
                              marginHorizontal: SIZES.FIVE,
                              backgroundColor: backgroundColor,
                            }}
                            onPress={() => otpRef.current.focus()}
                          />
                        );
                      })}
                    </Pressable>
                  </View>
                );
              } else {
                return (
                  <View
                    key={`${item}${index}`}
                    style={{
                      width: SIZES.width,
                    }}>
                    <Text
                      style={{
                        color: COLORS.BLACK,
                        fontSize: SIZES.TWENTY,
                        fontFamily: 'Aller_Rg',
                      }}>
                      {CONSTANTS.ENTER_YOUR_MOBILE_NUM}
                    </Text>

                    <Text
                      style={{
                        fontSize: SIZES.TWELVE,
                        color: COLORS.TEXT_GREY,
                        marginTop: SIZES.FIFTEEN,
                      }}>
                      {CONSTANTS.WE_WILL_SEND_CON_CODE}
                    </Text>

                    <View
                      style={{
                        width: SIZES.EIGHTY_PERCENT,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.TWENTY_FIVE,
                      }}>
                      <Text
                        style={{
                          fontSize: SIZES.TWENTY,
                          color: COLORS.TEXT_GREY,
                        }}>
                        {countryCode}
                      </Text>

                      <TextInput
                        value={number}
                        placeholder={CONSTANTS.ENTER_NUMBER_HERE}
                        placeholderTextColor={COLORS.DARK_GREY}
                        onChangeText={e => setNumber(e)}
                        maxLength={SIZES.TEN}
                        keyboardType={'numeric'}
                        style={{
                          width: SIZES.HUNDERED_PERCENT,
                          marginStart: SIZES.EIGHT,
                          fontSize: SIZES.TWENTY,
                          color: COLORS.BLACK,
                        }}
                      />
                    </View>
                  </View>
                );
              }
            }}
          />

          {isOtpSent && <Text>Resend code in 00:{timerTime}</Text>}

          <PrimaryButton
            title={buttonTitle}
            width={SIZES.HUNDERED_PERCENT}
            marginTop={SIZES.THIRTY}
            onPress={onButtonPressed}
          />
        </ScrollView>
      </View>
      {isToShowAlertDialog && (
        <AlertDialog
          message={alertDetails.message}
          subMessage={alertDetails.subMessage}
          onPress={() => setIsToShowAlertDialog(false)}
        />
      )}
    </>
  );
}
