import {Ionicons} from '@expo/vector-icons';
import {Animated, Text, View} from 'react-native';
import COLORS from '../../../MyAssets/COLORS';
import ICONS from '../../../MyAssets/ICONS';
import SIZES from '../../../MyAssets/SIZES';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import MyTestItem from '../../../Components/MyTestItem';
import {useNavigation} from '@react-navigation/native';

export default function MyTests() {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();

  function RenderHeader() {
    return (
      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: SIZES.TWENTY,
            paddingVertical: SIZES.FIFTEEN,
            backgroundColor: COLORS.WHITE,
            alignItems: 'center',
          },
        ]}>
        <Text
          style={{
            fontSize: SIZES.TWENTY_FIVE,
            fontFamily: 'Aller_Bd',
            color: COLORS.BLACK,
          }}>
          My Tests
        </Text>

        <Ionicons
          style={{
            marginHorizontal: SIZES.FIVE,
            paddingVertical: SIZES.TEN,
          }}
          name={ICONS.search}
          size={SIZES.TWENTY}
          color={COLORS.BLACK}
        />
      </View>
    );
  }

  function goToTest(test) {
    navigation.navigate('Test', {test});
  }

  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.LIGHT_NATIVE, COLORS.LIGHT_NATIVE]}>
      <RenderHeader />

      <Animated.FlatList
        contentContainerStyle={{
          paddingTop: SIZES.EIGHT,
          paddingBottom: SIZES.SEVENTY_FIVE + SIZES.TEN,
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        showsVerticalScrollIndicator={false}
        data={[0, 1, 2, 4, 5, 6, , 6, 7, 6, 8, 4, 56, 7, 8, 5, 3, 5]}
        renderItem={({item, index}) => {
          const inputRange = [-1, 0, 216 * index, 216 * (index + 1)];
          const opacityInputRange = [-1, 0, 216 * index, 216 * (index + 1)];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <MyTestItem
              testInfo={item}
              scale={scale}
              opacity={opacity}
              onPressed={goToTest}
            />
          );
        }}
      />
    </LinearGradient>
  );
}
