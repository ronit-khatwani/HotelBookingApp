import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from './CustomText';
import { COLORS, SIZES, verticalScale, SHADOWS } from '../theme';

const TAB_ITEMS = [
  { id: 'Rooms', label: 'Rooms', icon: 'office-building' },
  { id: 'CarBooking', label: 'Car booking', icon: 'car' },
  { id: 'CarWashing', label: 'Car washing', icon: 'car-wash' },
  { id: 'Profile', label: 'My profile', icon: 'account' },
  { id: 'Settings', label: 'Settings', icon: 'tune' },
];

const BottomTabBar = ({ activeTab = 'Rooms', onTabPress }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.primary, '#00D4AA']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        {TAB_ITEMS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <TouchableOpacity
              key={tab.id}
              style={styles.tabItem}
              onPress={() => onTabPress?.(tab.id)}
            >
              <Icon
                name={tab.icon}
                size={SIZES.iconMedium}
                color={isActive ? COLORS.white : 'rgba(255,255,255,0.6)'}
              />
              <CustomText
                variant="caption"
                color={isActive ? COLORS.white : 'rgba(255,255,255,0.6)'}
                style={styles.tabLabel}
              >
                {tab.label}
              </CustomText>
            </TouchableOpacity>
          );
        })}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  gradient: {
    flexDirection: 'row',
    paddingTop: SIZES.sm,
    paddingBottom: verticalScale(25),
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    marginTop: 2,
    fontSize: 10,
  },
});

export default BottomTabBar;
