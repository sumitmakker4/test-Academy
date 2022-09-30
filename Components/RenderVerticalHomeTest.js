import COLORS from '../MyAssets/COLORS';
import SIZES from '../MyAssets/SIZES';
import DUMMY_DATA from '../MyAssets/DUMMY_DATA';
import {View, Image, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import ICONS from '../MyAssets/ICONS';

export default function RenderVerticalHomeTest({testInfo}) {
  let author = 'Kriti Sanon';
  let testTitle = 'MCQ Pro';
  let bg =
    DUMMY_DATA.BG_ARRAY[Math.floor(Math.random() * DUMMY_DATA.BG_ARRAY.length)];

  function RenderAuthor() {
    return (
      <Text
        style={{
          fontSize: SIZES.TWELVE,
          color: COLORS.BLACK,
        }}>
        By {author}
      </Text>
    );
  }

  function RenderTime() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Ionicons name={ICONS.time} color={COLORS.BLACK} size={SIZES.SIXTEEN} />
        <Text
          style={{
            fontSize: SIZES.TWELVE,
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
        <Ionicons name={ICONS.exam} color={COLORS.BLACK} size={SIZES.SIXTEEN} />
        <Text
          style={{
            fontSize: SIZES.TWELVE,
            fontWeight: '500',
            color: COLORS.BLACK,
            marginStart: SIZES.FIVE,
          }}>
          General Knowledge, Physics
        </Text>
      </View>
    );
  }

  function RenderTitleAndAuthor() {
    return (
      <View
        style={{
          marginTop: SIZES.TWO,
        }}>
        <Text
          style={{
            fontSize: SIZES.EIGHTEEN,
            fontWeight: '500',
            color: COLORS.BLACK,
          }}>
          {testTitle}
        </Text>
        <RenderAuthor />
      </View>
    );
  }

  function RenderRating() {
    let rating = 4.5;

    return (
      <View
        style={{
          flexDirection: 'row',
          marginStart: SIZES.TEN,
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
    <View
      style={{
        flexDirection: 'row',
        padding: SIZES.EIGHTEEN,
        backgroundColor: COLORS.WHITE,
        width: SIZES.NINTY_PERCENT,
        borderRadius: SIZES.FIFTEEN,
        height: SIZES.height * 0.2,
        marginTop: SIZES.FIFTEEN,
      }}>
      <Image
        style={{
          flex: 3,
          height: SIZES.HUNDERED_PERCENT,
          borderRadius: SIZES.FIFTEEN,
          width: SIZES.HUNDERED_PERCENT,
        }}
        source={{
          uri: bg,
        }}
      />

      <View
        style={{
          flex: 7,
          padding: SIZES.TWELVE,
        }}>
        <RenderTitleAndAuthor />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.EIGHT,
          }}>
          <RenderTime />
          <RenderRating />
        </View>

        <RenderSubjects />
      </View>
    </View>
  );
}
