import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { CustomText } from '../components';
import { COLORS, SIZES, scale, verticalScale } from '../theme';

const BookingSuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <SafeAreaView style={styles.content}>
        {/* Success Icon */}
        <View style={styles.iconContainer}>
          <LinearGradient
            colors={[COLORS.primary, '#00D4AA']}
            style={styles.iconGradient}
          >
            <Icon name="check" size={60} color={COLORS.white} />
          </LinearGradient>
        </View>

        <CustomText 
          variant="h3" 
          weight="bold" 
          color={COLORS.textPrimary}
          style={styles.title}
        >
          Booking Successful!
        </CustomText>
        
        <CustomText 
          variant="body1" 
          color={COLORS.textLight}
          style={styles.subtitle}
        >
          Your booking has been confirmed. You will receive a confirmation email shortly.
        </CustomText>

        {/* Booking Details */}
        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <CustomText variant="body2" color={COLORS.textLight}>Booking ID</CustomText>
            <CustomText variant="body2" weight="bold" color={COLORS.textPrimary}>
              #BK2024121501
            </CustomText>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.detailRow}>
            <CustomText variant="body2" color={COLORS.textLight}>Hotel</CustomText>
            <CustomText variant="body2" weight="semiBold" color={COLORS.textPrimary}>
              The Plaza Hotel
            </CustomText>
          </View>
          
          <View style={styles.detailRow}>
            <CustomText variant="body2" color={COLORS.textLight}>Room</CustomText>
            <CustomText variant="body2" weight="semiBold" color={COLORS.textPrimary}>
              Deluxe Room
            </CustomText>
          </View>
          
          <View style={styles.detailRow}>
            <CustomText variant="body2" color={COLORS.textLight}>Check-in</CustomText>
            <CustomText variant="body2" weight="semiBold" color={COLORS.textPrimary}>
              Dec 15, 2024
            </CustomText>
          </View>
          
          <View style={styles.detailRow}>
            <CustomText variant="body2" color={COLORS.textLight}>Check-out</CustomText>
            <CustomText variant="body2" weight="semiBold" color={COLORS.textPrimary}>
              Dec 17, 2024
            </CustomText>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.detailRow}>
            <CustomText variant="body1" weight="bold" color={COLORS.textPrimary}>
              Total Paid
            </CustomText>
            <CustomText variant="h5" weight="bold" color={COLORS.primary}>
              $450
            </CustomText>
          </View>
        </View>

        {/* Buttons */}
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate('Home')}
        >
          <LinearGradient
            colors={[COLORS.primary, '#00D4AA']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.homeGradient}
          >
            <CustomText variant="body1" weight="bold" color={COLORS.white}>
              GO TO HOME
            </CustomText>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <CustomText variant="body1" weight="semiBold" color={COLORS.primary}>
            View My Bookings
          </CustomText>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.paddingHorizontal,
  },
  iconContainer: {
    marginBottom: SIZES.xl,
  },
  iconGradient: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: SIZES.sm,
  },
  subtitle: {
    textAlign: 'center',
    paddingHorizontal: SIZES.xl,
    marginBottom: SIZES.xl,
  },
  detailsCard: {
    width: '100%',
    backgroundColor: COLORS.backgroundLight,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.lg,
    marginBottom: SIZES.xl,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.sm,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SIZES.md,
  },
  homeButton: {
    width: '100%',
    borderRadius: SIZES.radiusMedium,
    overflow: 'hidden',
    marginBottom: SIZES.md,
  },
  homeGradient: {
    paddingVertical: SIZES.md,
    alignItems: 'center',
  },
  viewButton: {
    paddingVertical: SIZES.md,
  },
});

export default BookingSuccessScreen;
