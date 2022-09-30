import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import COLORS from '../MyAssets/COLORS';
import SIZES from '../MyAssets/SIZES';
import RenderMCQItem from './RenderMCQItem';

export default function RednerQuestion({item, index, moveToNext}) {
  const [question, setQuestion] = React.useState(item);

  function setSelectedAnswer(answer) {
    setQuestion({...question, answer: answer});
  }

  return (
    <View
      style={{
        width: SIZES.width,
        padding: SIZES.FIVE,
        paddingHorizontal: SIZES.THIRTY,
      }}>
      <Text
        style={{
          fontSize: SIZES.TWELVE,
          color: COLORS.TEXT_GREY,
        }}>
        Question {index + 1}
      </Text>
      <Text
        style={{
          fontSize: SIZES.EIGHTEEN + 1,
          color: COLORS.DARK_GREY,
          fontWeight: '500',
          marginTop: SIZES.FIVE,
        }}>
        {question.title}
      </Text>

      <ScrollView
        style={{
          width: SIZES.width * 0.9,
          alignSelf: 'center',
          marginTop: SIZES.FOURTY,
        }}
        contentContainerStyle={{
          paddingBottom: SIZES.height * 0.4,
        }}>
        {question.options.map((item, index) => (
          <RenderMCQItem
            title={item}
            key={`${index}${item}`}
            selectedAnswer={question.answer}
            setSelectedAnswer={setSelectedAnswer}
          />
        ))}
      </ScrollView>
    </View>
  );
}
