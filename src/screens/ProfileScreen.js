import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomText } from '../components';
import { COLORS, SIZES, scale, verticalScale, SHADOWS } from '../theme';
import { PROFILE_DATA, BOOKINGS } from '../data/dummyData';

const ProfileScreen = ({ navigation }) => {
  const menuItems = [
    { id: 'bookings', icon: 'calendar-check', label: 'My Bookings', count: BOOKINGS?.length || 0 },
    { id: 'favorites', icon: 'heart-outline', label: 'Favorites', count: 5 },
    { id: 'notifications', icon: 'bell-outline', label: 'Notifications', count: 3 },
    { id: 'payment', icon: 'credit-card-outline', label: 'Payment Methods' },
    { id: 'settings', icon: 'cog-outline', label: 'Settings' },
    { id: 'help', icon: 'help-circle-outline', label: 'Help & Support' },
    { id: 'logout', icon: 'logout', label: 'Logout' },
  ];

  const handleMenuPress = (item) => {
    switch (item.id) {
      case 'bookings':
        navigation.navigate('MyBookings');
        break;
      case 'notifications':
        navigation.navigate('Notifications');
        break;
      case 'payment':
        navigation.navigate('Payment');
        break;
      case 'settings':
        navigation.navigate('Settings');
        break;
      case 'logout':
        navigation.navigate('SignIn');
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      
      {/* Header */}
      <View style={styles.header}>
        <CustomText variant="h4" weight="bold" color={COLORS.textPrimary}>
          My Profile
        </CustomText>
        <TouchableOpacity>
          <Icon name="pencil-outline" size={22} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image
            source={{ uri: PROFILE_DATA?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' }}
            style={styles.avatar}
          />
          <CustomText variant="h5" weight="bold" color={COLORS.textPrimary} style={styles.name}>
            {PROFILE_DATA?.name || 'John Smith'}
          </CustomText>
          <CustomText variant="body2" color={COLORS.textLight}>
            {PROFILE_DATA?.email || 'john@email.com'}
          </CustomText>
          <CustomText variant="body2" color={COLORS.textLight}>
            {PROFILE_DATA?.phone || '+1 234 567 890'}
          </CustomText>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <CustomText variant="h5" weight="bold" color={COLORS.primary}>
              {PROFILE_DATA?.stats?.totalBookings || 12}
            </CustomText>
            <CustomText variant="caption" color={COLORS.textLight}>
              Bookings
            </CustomText>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <CustomText variant="h5" weight="bold" color={COLORS.primary}>
              {PROFILE_DATA?.stats?.reviews || 8}
            </CustomText>
            <CustomText variant="caption" color={COLORS.textLight}>
              Reviews
            </CustomText>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <CustomText variant="h5" weight="bold" color={COLORS.primary}>
              {PROFILE_DATA?.stats?.wishlist || 5}
            </CustomText>
            <CustomText variant="caption" color={COLORS.textLight}>
              Wishlist
            </CustomText>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.menuItem,
                index === menuItems.length - 1 && styles.menuItemLast,
              ]}
              onPress={() => handleMenuPress(item)}
            >
              <View style={styles.menuLeft}>
                <View style={styles.menuIconContainer}>
                  <Icon
                    name={item.icon}
                    size={22}
                    color={item.id === 'logout' ? '#FF4757' : COLORS.primary}
                  />
                </View>
                <CustomText
                  variant="body1"
                  weight="medium"
                  color={item.id === 'logout' ? '#FF4757' : COLORS.textPrimary}
                >
                  {item.label}
                </CustomText>
              </View>
              <View style={styles.menuRight}>
                {item.count !== undefined && (
                  <View style={styles.badge}>
                    <CustomText variant="caption" weight="bold" color={COLORS.white}>
                      {item.count}
                    </CustomText>
                  </View>
                )}
                <Icon
                  name="chevron-right"
                  size={20}
                  color={COLORS.textLight}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color={COLORS.tabInactive} />
          <CustomText variant="caption" color={COLORS.tabInactive}>Home</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('CarBooking')}>
          <Icon name="car" size={24} color={COLORS.tabInactive} />
          <CustomText variant="caption" color={COLORS.tabInactive}>Car</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="account" size={24} color={COLORS.primary} />
          <CustomText variant="caption" color={COLORS.primary}>Profile</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Settings')}>
          <Icon name="cog" size={24} color={COLORS.tabInactive} />
          <CustomText variant="caption" color={COLORS.tabInactive}>Settings</CustomText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingVertical: SIZES.md,
  },
  profileCard: {
    alignItems: 'center',
    paddingVertical: SIZES.lg,
  },
  avatar: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
    marginBottom: SIZES.md,
  },
  name: {
    marginBottom: SIZES.xs,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.backgroundLight,
    marginHorizontal: SIZES.paddingHorizontal,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.md,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    backgroundColor: COLORS.border,
  },
  menuContainer: {
    marginTop: SIZES.lg,
    paddingHorizontal: SIZES.paddingHorizontal,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SIZES.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  menuItemLast: {
    borderBottomWidth: 0,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconContainer: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    backgroundColor: COLORS.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SIZES.md,
  },
  menuRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radiusFull,
    paddingHorizontal: SIZES.sm,
    paddingVertical: 2,
    marginRight: SIZES.sm,
  },
  bottomSpacing: {
    height: verticalScale(100),
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingTop: SIZES.sm,
    paddingBottom: verticalScale(25),
    borderTopWidth: 1,
    borderTopColor: COLORS.borderLight,
    ...SHADOWS.medium,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
