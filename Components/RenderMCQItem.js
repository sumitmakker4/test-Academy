import React from 'react';
import {Pressable, Text, View} from 'react-native';
import COLORS from '../MyAssets/COLORS';
import SIZES from '../MyAssets/SIZES';

export default function RenderMCQItem({
  title,
  selectedAnswer,
  setSelectedAnswer,
}) {
  const isSelected = title == selectedAnswer;

  return (
    <Pressable
      style={{
        paddingVertical: SIZES.TWENTY,
        paddingHorizontal: SIZES.FIFTEEN,
        borderWidth: !isSelected ? 1 : 0,
        borderColor: COLORS.MID_GREY,
        borderRadius: SIZES.TWENTY,
        backgroundColor: !isSelected ? COLORS.WHITE : COLORS.DARK_GREY,
        justifyContent: 'center',
        marginBottom: SIZES.THIRTY,
      }}
      onPress={() => setSelectedAnswer(title)}>
      <Text
        style={{
          fontWeight: '500',
          fontSize: SIZES.FIFTEEN,
          color: !isSelected ? COLORS.BLACK : COLORS.WHITE,
        }}>
        {title}
      </Text>
    </Pressable>
  );
}
