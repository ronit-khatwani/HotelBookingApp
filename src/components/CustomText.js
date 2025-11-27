import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../theme';

const CustomText = ({
  children,
  style,
  variant = 'body1',
  color = COLORS.textPrimary,
  weight = 'regular',
  align = 'left',
  numberOfLines,
  ...props
}) => {
  const getFontSize = () => {
    switch (variant) {
      case 'h1':
        return FONTS.h1;
      case 'h2':
        return FONTS.h2;
      case 'h3':
        return FONTS.h3;
      case 'h4':
        return FONTS.h4;
      case 'h5':
        return FONTS.h5;
      case 'body1':
        return FONTS.body1;
      case 'body2':
        return FONTS.body2;
      case 'body3':
        return FONTS.body3;
      case 'caption':
        return FONTS.caption;
      default:
        return FONTS.body1;
    }
  };

  const getFontWeight = () => {
    switch (weight) {
      case 'light':
        return FONTS.light;
      case 'regular':
        return FONTS.regular;
      case 'medium':
        return FONTS.medium;
      case 'semiBold':
        return FONTS.semiBold;
      case 'bold':
        return FONTS.bold;
      default:
        return FONTS.regular;
    }
  };

  return (
    <Text
      style={[
        styles.text,
        {
          fontSize: getFontSize(),
          color: color,
          fontWeight: getFontWeight(),
          textAlign: align,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    includeFontPadding: false,
  },
});

export default CustomText;
