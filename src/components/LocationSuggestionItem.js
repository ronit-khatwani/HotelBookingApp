import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../theme';
import CustomText from './CustomText';

const LocationSuggestionItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <Icon name="map-marker" size={SIZES.iconMedium} color={COLORS.textLight} />
      <View style={styles.textContainer}>
        <CustomText variant="body2" weight="medium" color={COLORS.textPrimary}>
          {item.city}
        </CustomText>
        <CustomText variant="body3" color={COLORS.textLight} numberOfLines={1}>
          {item.country}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  textContainer: {
    flex: 1,
    marginLeft: SIZES.md,
  },
});

export default LocationSuggestionItem;
