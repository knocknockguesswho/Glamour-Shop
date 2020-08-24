import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

import {CardWithLeftImage} from '../atoms';

const CardWithLeftImageList = ({
  sourceImg,
  itemName,
  itemDesign,
  itemColor,
  itemSize,
  itemUnits,
  itemPrice,
  itemRating,
  itemFeedback,
  type,
}) => {
  const [content, setContent] = useState({
    itemName,
    itemDesign,
    itemColor,
    itemSize,
    itemUnits,
    itemPrice,
    itemRating,
    itemFeedback,
  });

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={{alignSelf: 'center'}}>
          <CardWithLeftImage
            sourceImg={sourceImg}
            content={content}
            type={type}
          />
        </View>
      </View>
    </>
  );
};

export default CardWithLeftImageList;

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer: {
    width: width,
  },
});
