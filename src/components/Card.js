import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../theme';

const Card = ({ children, style, padding = true }) => {
  return (
    <View style={[styles.card, padding && styles.padding, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: SIZES.cardRadius,
    ...SHADOWS.card,
  },
  padding: {
    padding: SIZES.cardPadding,
  },
});

export default Card;
