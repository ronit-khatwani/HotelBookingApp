import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { CustomText } from '../components';
import { COLORS, SIZES, scale, verticalScale, SHADOWS } from '../theme';
import { NOTIFICATIONS } from '../data/dummyData';

const NotificationsScreen = ({ navigation }) => {
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'booking':
        return 'calendar-check';
      case 'offer':
        return 'tag';
      case 'reminder':
        return 'bell';
      case 'review':
        return 'star';
      default:
        return 'bell';
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case 'booking':
        return COLORS.primary;
      case 'offer':
        return '#FF6B6B';
      case 'reminder':
        return '#FFB800';
      case 'review':
        return '#4ECDC4';
      default:
        return COLORS.textLight;
    }
  };

  const renderNotification = (notification) => (
    <TouchableOpacity
      key={notification.id}
      style={[
        styles.notificationCard,
        !notification.read && styles.unreadCard,
      ]}
    >
      <View style={[
        styles.iconContainer,
        { backgroundColor: `${getIconColor(notification.type)}15` },
      ]}>
        <Icon
          name={getNotificationIcon(notification.type)}
          size={24}
          color={getIconColor(notification.type)}
        />
      </View>
      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          <CustomText
            variant="body1"
            weight={notification.read ? 'regular' : 'semiBold'}
            color={COLORS.textPrimary}
            numberOfLines={1}
            style={styles.notificationTitle}
          >
            {notification.title}
          </CustomText>
          {!notification.read && <View style={styles.unreadDot} />}
        </View>
        <CustomText
          variant="body2"
          color={COLORS.textLight}
          numberOfLines={2}
        >
          {notification.message}
        </CustomText>
        <CustomText variant="caption" color={COLORS.textLight} style={styles.time}>
          {notification.time}
        </CustomText>
      </View>
    </TouchableOpacity>
  );

  const todayNotifications = NOTIFICATIONS.filter(n => n.time.includes('hour') || n.time.includes('min'));
  const earlierNotifications = NOTIFICATIONS.filter(n => !n.time.includes('hour') && !n.time.includes('min'));

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      
      {/* Header */}
      <LinearGradient
        colors={[COLORS.primary, '#00D4AA']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <SafeAreaView edges={['top']}>
          <View style={styles.headerContent}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Icon name="chevron-left" size={28} color={COLORS.white} />
            </TouchableOpacity>
            <CustomText variant="h5" weight="bold" color={COLORS.white}>
              Notifications
            </CustomText>
            <TouchableOpacity style={styles.clearButton}>
              <CustomText variant="body2" color={COLORS.white}>
                Clear All
              </CustomText>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Today */}
        {todayNotifications.length > 0 && (
          <View style={styles.section}>
            <CustomText variant="body1" weight="semiBold" color={COLORS.textLight} style={styles.sectionTitle}>
              Today
            </CustomText>
            {todayNotifications.map(renderNotification)}
          </View>
        )}

        {/* Earlier */}
        {earlierNotifications.length > 0 && (
          <View style={styles.section}>
            <CustomText variant="body1" weight="semiBold" color={COLORS.textLight} style={styles.sectionTitle}>
              Earlier
            </CustomText>
            {earlierNotifications.map(renderNotification)}
          </View>
        )}

        <View style={{ height: SIZES.xl }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  header: {
    paddingBottom: SIZES.md,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingTop: SIZES.sm,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButton: {
    paddingHorizontal: SIZES.sm,
  },
  content: {
    flex: 1,
    paddingHorizontal: SIZES.paddingHorizontal,
  },
  section: {
    marginTop: SIZES.lg,
  },
  sectionTitle: {
    marginBottom: SIZES.md,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.md,
    marginBottom: SIZES.sm,
    ...SHADOWS.light,
  },
  unreadCard: {
    backgroundColor: `${COLORS.primary}08`,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.primary,
  },
  iconContainer: {
    width: scale(48),
    height: scale(48),
    borderRadius: scale(24),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SIZES.md,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.xs,
  },
  notificationTitle: {
    flex: 1,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    marginLeft: SIZES.sm,
  },
  time: {
    marginTop: SIZES.xs,
  },
});

export default NotificationsScreen;
