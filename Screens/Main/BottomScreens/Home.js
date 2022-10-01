import {
  View,
  Text,
  Pressable,
  ScrollView,
  Animated,
  FlatList,
  BackHandler,
} from 'react-native';
import ICONS from '../../../MyAssets/ICONS';
import {Ionicons} from '@expo/vector-icons';
import COLORS from '../../../MyAssets/COLORS';
import CONSTANTS from '../../../MyAssets/CONSTANTS';
import SIZES from '../../../MyAssets/SIZES';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import RenderHorizontalItem from '../../../Components/RenderHorizontalItem';
import RenderVerticalHomeTest from '../../../Components/RenderVerticalHomeTest';
import {useSelector} from 'react-redux';
import React from 'react';

export default function Home() {
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
  const navigation = useNavigation();

  const scrollY = new Animated.Value(0);

  const HeaderMaxHeight = 70;
  const HeaderMinHeight = 0;

  const HeaderMaxMargin = 8;
  const HeaderMinMargin = 0;

  const animatedHeaderMargin = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [HeaderMaxMargin, HeaderMinMargin],
    // extrapolate: 'clamp',
  });

  const animatedHeaderHeight = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [HeaderMaxHeight, HeaderMinHeight],
    extrapolate: 'clamp',
  });

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
  });

  function handleBackButtonClick() {
    BackHandler.exitApp();
  }

  function RenderHeader() {
    return (
      <Animated.View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: SIZES.TEN,
            paddingTop: SIZES.TEN,
            paddingBottom: SIZES.FIVE,
            backgroundColor: COLORS.WHITE,
            alignItems: 'center',
            height: animatedHeaderHeight,
          },
        ]}>
        <Text
          style={{
            fontSize: SIZES.TWENTY_FIVE,
            fontFamily: 'Aller_Bd',
            fontWeight: 'bold',
            color: COLORS.DARK_GREY,
          }}>
          Hello Jonah
        </Text>

        {!isLoggedIn ? (
          <Pressable onPress={() => navigation.navigate('Otp')}>
            <Text
              style={{
                color: COLORS.PRIMARY_800,
                fontWeight: 'bold',
                marginEnd: SIZES.FIVE,
                fontSize: SIZES.FIFTEEN,
              }}>
              {CONSTANTS.LOGIN}
            </Text>
          </Pressable>
        ) : (
          <Animated.View
            style={{
              marginHorizontal: SIZES.FIVE,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.DARK_GREY,
              borderRadius: 90,
              padding: animatedHeaderMargin,
            }}>
            <Ionicons
              name={ICONS.person}
              size={SIZES.SIXTEEN}
              color={COLORS.WHITE}
            />
          </Animated.View>
        )}
      </Animated.View>
    );
  }

  function RenderSearch() {
    return (
      <View
        style={{
          width: SIZES.HUNDERED_PERCENT,
          alignSelf: 'center',
          paddingBottom: SIZES.TEN,
          paddingHorizontal: SIZES.EIGHT,
        }}>
        <Pressable
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: COLORS.LIGHT_NATIVE,
            borderRadius: SIZES.TWELVE,
            padding: SIZES.TEN,
            paddingVertical: SIZES.TWENTY,
          }}
          onPress={() => navigation.navigate('Search')}>
          <Text
            style={{
              color: COLORS.TEXT_GREY,
              fontSize: SIZES.FIFTEEN,
            }}>
            Search for any test, package or institute
          </Text>
          <Ionicons
            name={ICONS.search}
            color={COLORS.TEXT_GREY}
            size={SIZES.EIGHTEEN}
          />
        </Pressable>
      </View>
    );
  }

  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.WHITE, COLORS.WHITE]}>
      <RenderHeader />

      <RenderSearch />

      <ScrollView
        style={{
          flex: 1,
          backgroundColor: COLORS.LIGHT_NATIVE,
          marginTop: SIZES.TEN,
        }}
        contentContainerStyle={{
          paddingBottom: SIZES.SEVENTY_FIVE,
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}>
        <Text
          style={{
            width: SIZES.NINTY_PERCENT,
            color: COLORS.BLACK,
            marginTop: SIZES.FIFTEEN,
            fontWeight: '500',
            fontSize: SIZES.TWENTY,
            alignSelf: 'center',
          }}>
          {CONSTANTS.TRENDING}
        </Text>

        <FlatList
          style={{
            backgroundColor: COLORS.LIGHT_NATIVE,
            marginVertical: SIZES.FIFTEEN,
            marginStart: SIZES.FIFTEEN,
            alignSelf: 'center',
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[1, 4, 6, 4, 3, 6, 3, 6, 3, 6, 4]}
          renderItem={({item, index}) => (
            <RenderHorizontalItem key={`${item}${index}`} />
          )}
        />

        <Text
          style={{
            width: SIZES.NINTY_PERCENT,
            color: COLORS.BLACK,
            fontWeight: '500',
            fontSize: SIZES.TWENTY,
            alignSelf: 'center',
          }}>
          {CONSTANTS.RECOMMENDED_FOR_YOU}
        </Text>

        <FlatList
          style={{
            backgroundColor: COLORS.LIGHT_NATIVE,
            marginVertical: SIZES.FIFTEEN,
            marginStart: SIZES.FIFTEEN,
            alignSelf: 'center',
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[1, 4, 6, 4, 3, 6, 3, 6, 3, 6, 4]}
          renderItem={({item, index}) => (
            <RenderHorizontalItem key={`${item}${index}`} />
          )}
        />

        <View
          style={{
            width: SIZES.HUNDERED_PERCENT,
            alignItems: 'center',
            marginBottom: SIZES.FIFTEEN,
          }}>
          {[1, 4, 6, 4, 3, 6, 3, 6, 3, 6, 4].map((item, index) => (
            <RenderVerticalHomeTest testInfo={item} />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
