import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../theme';
import CustomText from './CustomText';

const SegmentedControl = ({ options, selectedIndex, onSelect }) => {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.option,
            selectedIndex === index && styles.selectedOption,
          ]}
          onPress={() => onSelect(index)}
          activeOpacity={0.8}
        >
          <CustomText
            variant="body2"
            weight="semiBold"
            color={selectedIndex === index ? COLORS.white : COLORS.primary}
          >
            {option}
          </CustomText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radiusFull,
    borderWidth: 1,
    borderColor: COLORS.primary,
    overflow: 'hidden',
  },
  option: {
    flex: 1,
    paddingVertical: SIZES.sm + 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedOption: {
    backgroundColor: COLORS.primary,
  },
});

export default SegmentedControl;
