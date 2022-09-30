import {
  Animated,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import COLORS from '../MyAssets/COLORS';
import SIZES from '../MyAssets/SIZES';
import icon from '../assets/images/ic_launcher.jpg';
import {Ionicons} from '@expo/vector-icons';
import CONSTANTS from '../MyAssets/CONSTANTS';
import ICONS from '../MyAssets/ICONS';

export default function MyTestItem({testInfo, scale, opacity, onPressed}) {
  let author = 'Kriti Sanon';
  let authorImage = icon;
  let testTitle = 'MCQ Pro';
  let testDes = 'This is for every student who is will to check his knowledge';

  function RenderAddButton() {
    return (
      <TouchableOpacity
        style={{
          padding: SIZES.FIVE,
          justifyContent: 'center',
          marginTop: SIZES.FIFTEEN,
          paddingHorizontal: SIZES.TWENTY,
          borderRadius: SIZES.FIVE,
          borderWidth: 1,
          borderColor: COLORS.GREEN,
        }}>
        <Text
          style={{
            fontSize: SIZES.FIFTEEN,
            color: COLORS.GREEN,
            fontWeight: 'bold',
          }}>
          {CONSTANTS.START.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  }

  function RenderTime() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Ionicons name={ICONS.time} color={COLORS.BLACK} size={18} />
        <Text
          style={{
            fontSize: SIZES.FOURTEEN,
            fontWeight: '500',
            color: COLORS.BLACK,
            marginStart: SIZES.FIVE,
          }}>
          60 mins
        </Text>
      </View>
    );
  }

  function RenderSubjects() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SIZES.FIVE,
        }}>
        <Ionicons name={ICONS.exam} color={COLORS.BLACK} size={18} />
        <Text
          style={{
            fontSize: SIZES.FOURTEEN,
            fontWeight: '500',
            color: COLORS.BLACK,
            marginStart: SIZES.FIVE,
          }}>
          General Knowledge, Physics
        </Text>
      </View>
    );
  }

  function RenderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: SIZES.TWELVE,
            color: COLORS.BLACK,
          }}>
          {author}
        </Text>
        {author == 'Test Academy' ? (
          <Image
            style={{
              borderRadius: 90,
              marginStart: SIZES.TEN,
              height: SIZES.TWENTY,
              width: SIZES.TWENTY,
            }}
            resizeMode={'cover'}
            source={authorImage}
          />
        ) : (
          <Image
            style={{
              borderRadius: 90,
              marginStart: SIZES.TEN,
              height: SIZES.TWENTY,
              width: SIZES.TWENTY,
            }}
            resizeMode={'cover'}
            source={{
              uri: 'https://www.southindiafashion.com/wp-content/uploads/2021/10/Kriti-Sanon-in-red-mahima-mahajan-kurta-set-for-HDHD-promotions-on-KBC-3.jpg',
            }}
          />
        )}
      </View>
    );
  }

  function RenderTitleAndDes() {
    return (
      <View
        style={{
          marginTop: SIZES.FIVE,
        }}>
        <Text
          style={{
            fontSize: SIZES.TWENTY,
            fontWeight: '500',
            color: COLORS.BLACK,
          }}>
          {testTitle}
        </Text>
        <Text
          style={{
            fontSize: SIZES.TWELVE,
            marginTop: SIZES.FIVE,
            color: COLORS.BLACK,
          }}>
          {testDes}
        </Text>
      </View>
    );
  }

  function RenderRating() {
    let rating = 4.5;

    return (
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-end',
        }}>
        <Ionicons name={ICONS.rating} size={16} color={COLORS.YELLOW} />
        <Text
          style={{
            marginStart: SIZES.FIVE,
            color: COLORS.BLACK,
          }}>
          {rating}
        </Text>
      </View>
    );
  }

  return (
    <Animated.View
      style={{
        width: SIZES.width * 0.9,
        borderRadius: SIZES.FIFTEEN,
        backgroundColor: COLORS.WHITE,
        alignSelf: 'center',
        height: 200,
        elevation: SIZES.FIVE,
        padding: SIZES.FIFTEEN,
        marginVertical: SIZES.EIGHT,
        transform: [{scale}],
        opacity: opacity,
      }}>
      <Pressable onPress={() => onPressed(testInfo)}>
        <RenderTitleAndDes />

        <View
          style={{
            width: '97%',
            flexDirection: 'row',
            marginTop: SIZES.TWENTY,
            justifyContent: 'space-between',
          }}>
          <View>
            <RenderTime />
            <RenderSubjects />
          </View>
          <RenderAddButton />
        </View>

        <View
          style={{
            width: SIZES.HUNDERED_PERCENT,
            height: 1,
            backgroundColor: COLORS.LINE_GREY,
            marginTop: SIZES.TWENTY,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: SIZES.TEN,
          }}>
          <RenderHeader />

          <RenderRating />
        </View>
      </Pressable>
    </Animated.View>
  );
}
