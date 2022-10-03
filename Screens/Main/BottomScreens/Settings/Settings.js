import {Feather, Ionicons, MaterialIcons} from '@expo/vector-icons';
import ICONS from '../../../../MyAssets/ICONS';
import CONSTANTS from '../../../../MyAssets/CONSTANTS';
import COLORS from '../../../../MyAssets/COLORS';
import SIZES from '../../../../MyAssets/SIZES';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import React from 'react';

export default function Settings({navigation}) {
  const details = useSelector(state => state.user.userInfo);

  function navigateToEditDetails() {
    navigation.navigate('EditDetails', {details});
  }

  function RenderName() {
    return (
      <TouchableOpacity
        style={{
          width: SIZES.HUNDERED_PERCENT,
          flexDirection: 'row',
          marginTop: SIZES.FORTY,
          borderRadius: SIZES.TWELVE,
          backgroundColor: COLORS.LIGHT_NATIVE,
          borderWidth: 1,
          alignItems: 'center',
          borderColor: COLORS.LINE_GREY,
          padding: SIZES.FIFTEEN,
          paddingVertical: SIZES.TWENTY,
        }}
        onPress={navigateToEditDetails}>
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

        <Ionicons
          name={ICONS.forward}
          size={SIZES.SIXTEEN}
          color={COLORS.TEXT_GREY}
          onPress={navigateToEditDetails}
        />
      </TouchableOpacity>
    );
  }

  function RenderPhoneNumber() {
    return (
      <TouchableOpacity
        style={{
          width: SIZES.HUNDERED_PERCENT,
          flexDirection: 'row',
          marginTop: SIZES.TWENTY,
          borderRadius: SIZES.TWELVE,
          alignItems: 'center',
          backgroundColor: COLORS.LIGHT_NATIVE,
          borderWidth: 1,
          borderColor: COLORS.LINE_GREY,
          padding: SIZES.FIFTEEN,
          paddingVertical: SIZES.TWENTY,
        }}
        onPress={navigateToEditDetails}>
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

        <Ionicons
          name={ICONS.forward}
          size={SIZES.SIXTEEN}
          color={COLORS.TEXT_GREY}
          onPress={navigateToEditDetails}
        />
      </TouchableOpacity>
    );
  }

  function RenderEmail() {
    return (
      <TouchableOpacity
        style={{
          width: SIZES.HUNDERED_PERCENT,
          flexDirection: 'row',
          marginTop: SIZES.TWENTY,
          borderRadius: SIZES.TWELVE,
          alignItems: 'center',
          backgroundColor: COLORS.LIGHT_NATIVE,
          borderWidth: 1,
          borderColor: COLORS.LINE_GREY,
          padding: SIZES.FIFTEEN,
          paddingVertical: SIZES.TWENTY,
        }}
        onPress={navigateToEditDetails}>
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

        <Ionicons
          name={ICONS.forward}
          size={SIZES.SIXTEEN}
          color={COLORS.TEXT_GREY}
          onPress={navigateToEditDetails}
        />
      </TouchableOpacity>
    );
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.WHITE,
        padding: SIZES.TWENTY,
        elevation: SIZES.EIGHT,
      }}>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
        }}
        onPress={() => navigation.navigate('ViewProfilePic')}>
        <Image
          style={{
            height: SIZES.width * 0.35,
            width: SIZES.width * 0.35,
            marginTop: SIZES.TEN,
            borderRadius: SIZES.CIRCLE_RADIUS,
          }}
          source={{
            uri: details.profilePic,
          }}
        />
      </TouchableOpacity>
      <RenderName />
      <RenderPhoneNumber />
      <RenderEmail />
    </ScrollView>
  );
}
