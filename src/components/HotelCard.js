import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES } from '../theme';
import CustomText from './CustomText';

const HotelCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <CustomText
        variant="body3"
        weight="medium"
        color={COLORS.textPrimary}
        style={styles.name}
        numberOfLines={1}
      >
        {item.name}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: SIZES.md,
    alignItems: 'center',
    width: 80,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: SIZES.radiusSmall,
    backgroundColor: COLORS.inputBackground,
  },
  name: {
    marginTop: SIZES.xs,
    textAlign: 'center',
  },
});

export default HotelCard;
