import {Animated, Image, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../MyAssets/COLORS';
import SIZES from '../MyAssets/SIZES';
import icon from '../assets/images/ic_launcher.jpg';
import {Ionicons} from '@expo/vector-icons';
import DUMMY_DATA from '../MyAssets/DUMMY_DATA';
import CONSTANTS from '../MyAssets/CONSTANTS';
import ICONS from '../MyAssets/ICONS';

export default function RenderHorizontalItem({testInfo, width}) {
  let author = 'Kriti Sanon';
  let testTitle = 'MCQ Pro';

  let bg =
    DUMMY_DATA.BG_ARRAY[Math.floor(Math.random() * DUMMY_DATA.BG_ARRAY.length)];

  function RenderAddButton() {
    return (
      <TouchableOpacity
        style={{
          width: SIZES.HUNDERED_PERCENT,
          paddingVertical: SIZES.EIGHT,
          justifyContent: 'center',
          marginTop: SIZES.FIFTEEN,
          backgroundColor: COLORS.GREEN,
          paddingHorizontal: SIZES.TWELVE,
          borderBottomLeftRadius: SIZES.FIFTEEN,
          borderBottomEndRadius: SIZES.FIFTEEN,
        }}>
        <Text
          style={{
            fontSize: SIZES.FIFTEEN,
            alignSelf: 'center',
            color: COLORS.WHITE,
            fontWeight: 'bold',
          }}>
          {CONSTANTS.ADD.toUpperCase()}
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

  function RenderAuthor() {
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
          By {author}
        </Text>
        {/* {author == 'Test Academy' ? (
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
        )} */}
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
        width: SIZES.width * 0.55,
        borderRadius: SIZES.FIFTEEN,
        backgroundColor: COLORS.WHITE,
        alignSelf: 'center',
        elevation: SIZES.TWO,
        marginVertical: SIZES.EIGHT,
        marginEnd: SIZES.FIFTEEN,
      }}>
      <Image
        style={{
          height: 100,
          borderTopLeftRadius: SIZES.FIFTEEN,
          borderTopRightRadius: SIZES.FIFTEEN,
          width: SIZES.HUNDERED_PERCENT,
        }}
        source={{
          uri: bg,
        }}
      />
      <View
        style={{
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

      <RenderAddButton />
    </View>
  );
}
