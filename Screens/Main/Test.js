import {
  Animated,
  Text,
  TouchableOpacity,
  View,
  AppState,
} from 'react-native';
import SIZES from '../../MyAssets/SIZES';
import COLORS from '../../MyAssets/COLORS';
import DUMMY_DATA from '../../MyAssets/DUMMY_DATA';
import ICONS from '../../MyAssets/ICONS';
import AlertDialog from '../../Components/AlertDialog';
import _BackgroundTimer from 'react-native-background-timer';
import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import RenderQuestion from '../../Components/RenderQuestion';
import LinearGradient from 'react-native-linear-gradient';

export function Test({navigation}) {
  const questions = DUMMY_DATA.TESTS[0].questions;

  let timer;
  let seconds = 10;
  const [timeLeft, setTimeLeft] = React.useState(secondsToHms(seconds));
  const [alertRelated, setAlertRelated] = React.useState({
    isToShow: false,
    message: 'Times Up!',
    subMessage: 'Your test will be automatically submitted',
    isToShowCancel: false,
  });
  const [color, setColor] = React.useState(COLORS.SECONDARY_800);
  const [pageNum, setPageNum] = React.useState(0);
  const scrollX = new Animated.Value(0);
  const flatRef = React.useRef();
  const state = AppState.currentState;

  function secondsToHms(seconds) {
    var sec_num = parseInt(seconds, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor(sec_num / 60) % 60;
    var seconds = sec_num % 60;

    return [hours, minutes, seconds]
      .map(v => (v < 10 ? '0' + v : v))
      .filter((v, i) => v !== '00' || i > 0)
      .join(':');
  }

  // React.useEffect(() => {
  //   timer = _BackgroundTimer.setInterval(() => {
  //     seconds--;
  //     setTimeLeft(secondsToHms(seconds));
  //     if (seconds < 5) {
  //       setColor(current =>
  //         current == COLORS.RED ? COLORS.SECONDARY_800 : COLORS.RED,
  //       );
  //       seconds == 0 && setColor(COLORS.RED);
  //     } else {
  //       setColor(COLORS.SECONDARY_800);
  //     }
  //     if (seconds == 0) {
  //       _BackgroundTimer.clearInterval(timer);
  //       setAlertRelated({
  //         isToShow: true,
  //         message: 'Times Up!',
  //         subMessage: 'Your test will be automatically submitted',
  //         isToShowCancel: false,
  //       });
  //     }
  //   }, 1000);
  // }, []);

  React.useEffect(() => {
    flatRef?.current.scrollToIndex({index: pageNum, animated: true});
  }, [pageNum]);

  React.useEffect(() => {
    if (state == 'background') {
      navigation.goBack();
    }
  }, [state]);

  function RenderHeader() {
    return (
      <View>
        <Text
          style={{
            textAlign: 'center',
            backgroundColor: color,
            fontSize: SIZES.TWELVE,
            color: COLORS.WHITE,
            fontWeight: '500',
            paddingVertical: SIZES.FIVE,
          }}>
          {timeLeft}
        </Text>
        <View
          style={{
            marginTop: SIZES.THIRTY,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: SIZES.TWENTY_FIVE,
              color: COLORS.DARK_GREY,
              fontFamily: 'Aller_Bd',
              alignSelf: 'center',
              marginEnd: SIZES.EIGHT,
              marginBottom: SIZES.FIVE,
            }}>
            IAS Exam
          </Text>
          <Ionicons
            name={ICONS.exam}
            size={SIZES.TWENTY_FIVE}
            color={COLORS.ORANGE}
          />
        </View>
      </View>
    );
  }

  function RenderFooter() {
    return (
      <>
        <View
          style={{
            width: SIZES.width,
            position: 'absolute',
            bottom: 0,
          }}>
          <RenderAdd />

          <View
            style={{
              width: SIZES.HUNDERED_PERCENT,
              alignSelf: 'center',
              paddingHorizontal: SIZES.FIVE,
              elevation: 5,
              backgroundColor: COLORS.WHITE,

              paddingVertical: SIZES.FIFTEEN,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 2,
              }}
              onPress={() => {
                // let index = Math.floor(scrollX._value / SIZES.width);
                setPageNum(current => current - 1);
              }}>
              {pageNum != 0 && (
                <Ionicons
                  style={{
                    padding: SIZES.FIFTEEN,
                  }}
                  color={COLORS.DARK_GREY}
                  name={ICONS.back}
                  size={SIZES.EIGHTEEN}
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: SIZES.TEN,
                paddingHorizontal: SIZES.THIRTY + 10,
                backgroundColor: COLORS.GREEN2,
                borderRadius: SIZES.EIGHT,
              }}
              onPress={() =>
                setAlertRelated({
                  isToShow: true,
                  message: 'Are you sure?',
                  subMessage:
                    'By clicking okay your test will be submitted and you will not be able to edit it',
                  isToShowCancel: true,
                })
              }>
              <Text
                style={{
                  color: COLORS.WHITE,
                  fontSize: SIZES.TWELVE,
                }}>
                SUBMIT
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 2,
                alignItems: 'flex-end',
              }}
              onPress={moveToNextQuestion}>
              {pageNum < questions.length - 1 && (
                <Ionicons
                  style={{
                    padding: SIZES.FIFTEEN,
                  }}
                  color={COLORS.DARK_GREY}
                  name={ICONS.forward}
                  size={SIZES.EIGHTEEN}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }

  function RenderAdd() {
    return (
      <View
        style={{
          height: SIZES.ADD_HEIGHT,
          backgroundColor: COLORS.TEXT_GREY,
        }}></View>
    );
  }

  function moveToNextQuestion() {
    if (pageNum != questions.length - 1) {
      setTimeout(() => {
        setPageNum(current => current + 1);
      }, 100);
    }
  }

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.WHITE,
        }}>
        <RenderHeader />

        <View>
          <Animated.FlatList
            ref={flatRef}
            style={{
              width: SIZES.width,
              paddingTop: SIZES.THIRTY,
            }}
            scrollEnabled={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {contentOffset: {x: scrollX}}, //for getting x position and assiging it to scrollX
                },
              ],
              {useNativeDriver: true},
            )}
            snapToInterval={SIZES.width}
            horizontal
            initialScrollIndex={pageNum}
            showsHorizontalScrollIndicator={false}
            data={questions}
            renderItem={({item, index}) => (
              <RenderQuestion
                key={`${index}${item.title}`}
                item={item}
                index={index}
                moveToNext={moveToNextQuestion}
              />
            )}
          />
        </View>
      </View>
      {alertRelated.isToShow && (
        <AlertDialog
          isToShowCancel={alertRelated.isToShowCancel}
          message={alertRelated.message}
          subMessage={alertRelated.subMessage}
          onPress={() => navigation.goBack()}
          onCancelPressed={() =>
            setAlertRelated({
              ...alertRelated,
              isToShow: false,
              isToShowCancel: false,
            })
          }
        />
      )}
      {!alertRelated.isToShow && <RenderFooter />}
    </>
  );
}
