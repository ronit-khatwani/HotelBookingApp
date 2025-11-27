import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomText } from '../components';
import { COLORS, SIZES, scale, verticalScale, SHADOWS } from '../theme';

const SettingsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [locationServices, setLocationServices] = useState(true);
  const [biometric, setBiometric] = useState(false);

  const settingsSections = [
    {
      title: 'Notifications',
      items: [
        {
          id: 'push',
          icon: 'bell-outline',
          label: 'Push Notifications',
          type: 'switch',
          value: notifications,
          onToggle: setNotifications,
        },
        {
          id: 'email',
          icon: 'email-outline',
          label: 'Email Notifications',
          type: 'switch',
          value: emailNotifications,
          onToggle: setEmailNotifications,
        },
      ],
    },
    {
      title: 'Appearance',
      items: [
        {
          id: 'dark',
          icon: 'theme-light-dark',
          label: 'Dark Mode',
          type: 'switch',
          value: darkMode,
          onToggle: setDarkMode,
        },
        {
          id: 'language',
          icon: 'translate',
          label: 'Language',
          type: 'nav',
          value: 'English',
        },
      ],
    },
    {
      title: 'Privacy & Security',
      items: [
        {
          id: 'location',
          icon: 'map-marker-outline',
          label: 'Location Services',
          type: 'switch',
          value: locationServices,
          onToggle: setLocationServices,
        },
        {
          id: 'biometric',
          icon: 'fingerprint',
          label: 'Biometric Login',
          type: 'switch',
          value: biometric,
          onToggle: setBiometric,
        },
        {
          id: 'password',
          icon: 'lock-outline',
          label: 'Change Password',
          type: 'nav',
        },
      ],
    },
    {
      title: 'About',
      items: [
        {
          id: 'terms',
          icon: 'file-document-outline',
          label: 'Terms of Service',
          type: 'nav',
        },
        {
          id: 'privacy',
          icon: 'shield-check-outline',
          label: 'Privacy Policy',
          type: 'nav',
        },
        {
          id: 'version',
          icon: 'information-outline',
          label: 'App Version',
          type: 'info',
          value: '1.0.0',
        },
      ],
    },
  ];

  const renderSettingItem = (item, isLast) => (
    <View
      key={item.id}
      style={[styles.settingItem, !isLast && styles.settingItemBorder]}
    >
      <View style={styles.settingLeft}>
        <View style={styles.iconContainer}>
          <Icon name={item.icon} size={22} color={COLORS.primary} />
        </View>
        <CustomText variant="body1" color={COLORS.textPrimary}>
          {item.label}
        </CustomText>
      </View>
      <View style={styles.settingRight}>
        {item.type === 'switch' && (
          <Switch
            value={item.value}
            onValueChange={item.onToggle}
            trackColor={{ false: COLORS.border, true: COLORS.primaryLight }}
            thumbColor={item.value ? COLORS.primary : COLORS.textLight}
          />
        )}
        {item.type === 'nav' && (
          <>
            {item.value && (
              <CustomText variant="body2" color={COLORS.textLight} style={styles.navValue}>
                {item.value}
              </CustomText>
            )}
            <Icon name="chevron-right" size={20} color={COLORS.textLight} />
          </>
        )}
        {item.type === 'info' && (
          <CustomText variant="body2" color={COLORS.textLight}>
            {item.value}
          </CustomText>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      
      {/* Header */}
      <View style={styles.header}>
        <CustomText variant="h4" weight="bold" color={COLORS.textPrimary}>
          Settings
        </CustomText>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {settingsSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <CustomText
              variant="body2"
              weight="semibold"
              color={COLORS.textLight}
              style={styles.sectionTitle}
            >
              {section.title.toUpperCase()}
            </CustomText>
            <View style={styles.sectionContent}>
              {section.items.map((item, index) =>
                renderSettingItem(item, index === section.items.length - 1)
              )}
            </View>
          </View>
        ))}

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Icon name="logout" size={22} color="#FF4757" />
          <CustomText variant="body1" weight="medium" color="#FF4757" style={styles.logoutText}>
            Logout
          </CustomText>
        </TouchableOpacity>

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
          <Icon name="account" size={24} color={COLORS.tabInactive} />
          <CustomText variant="caption" color={COLORS.tabInactive}>Profile</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Settings')}>
          <Icon name="cog" size={24} color={COLORS.primary} />
          <CustomText variant="caption" color={COLORS.primary}>Settings</CustomText>
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
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingVertical: SIZES.md,
  },
  section: {
    marginBottom: SIZES.lg,
  },
  sectionTitle: {
    paddingHorizontal: SIZES.paddingHorizontal,
    marginBottom: SIZES.sm,
  },
  sectionContent: {
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.paddingHorizontal,
    borderRadius: SIZES.radiusMedium,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SIZES.md,
  },
  settingItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: scale(36),
    height: scale(36),
    borderRadius: scale(18),
    backgroundColor: COLORS.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SIZES.md,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navValue: {
    marginRight: SIZES.sm,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SIZES.paddingHorizontal,
    marginTop: SIZES.md,
    padding: SIZES.md,
    borderRadius: SIZES.radiusMedium,
    borderWidth: 1,
    borderColor: '#FF4757',
  },
  logoutText: {
    marginLeft: SIZES.sm,
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

export default SettingsScreen;
