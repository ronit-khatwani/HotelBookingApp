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
import LinearGradient from 'react-native-linear-gradient';
import { CustomText } from '../components';
import { COLORS, SIZES, scale, verticalScale, SHADOWS } from '../theme';
import { BOOKINGS } from '../data/dummyData';

const MyBookingsScreen = ({ navigation }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'completed', label: 'Completed' },
    { id: 'cancelled', label: 'Cancelled' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return COLORS.primary;
      case 'completed':
        return COLORS.success;
      case 'cancelled':
        return COLORS.error;
      default:
        return COLORS.textLight;
    }
  };

  const filteredBookings = activeFilter === 'all' 
    ? BOOKINGS 
    : BOOKINGS.filter(b => b.status === activeFilter);

  const renderBookingCard = (booking) => (
    <TouchableOpacity
      key={booking.id}
      style={styles.bookingCard}
      onPress={() => navigation.navigate('HotelDetail', { hotel: { id: booking.hotelId } })}
    >
      <Image source={{ uri: booking.image }} style={styles.bookingImage} />
      <View style={styles.bookingInfo}>
        <View style={styles.bookingHeader}>
          <CustomText variant="body1" weight="bold" color={COLORS.textPrimary} numberOfLines={1}>
            {booking.hotelName}
          </CustomText>
          <View style={[styles.statusBadge, { backgroundColor: `${getStatusColor(booking.status)}15` }]}>
            <CustomText variant="caption" color={getStatusColor(booking.status)}>
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </CustomText>
          </View>
        </View>
        
        <View style={styles.bookingDetail}>
          <Icon name="map-marker-outline" size={14} color={COLORS.textLight} />
          <CustomText variant="caption" color={COLORS.textLight} style={styles.detailText}>
            {booking.location}
          </CustomText>
        </View>
        
        <View style={styles.bookingDetail}>
          <Icon name="calendar-range" size={14} color={COLORS.textLight} />
          <CustomText variant="caption" color={COLORS.textLight} style={styles.detailText}>
            {booking.checkIn} - {booking.checkOut}
          </CustomText>
        </View>

        <View style={styles.bookingFooter}>
          <CustomText variant="body1" weight="bold" color={COLORS.primary}>
            ${booking.totalPrice}
          </CustomText>
          <CustomText variant="caption" color={COLORS.textLight}>
            {booking.roomType} • {booking.guests} guests
          </CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );

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
              My Bookings
            </CustomText>
            <View style={{ width: 40 }} />
          </View>
        </SafeAreaView>
      </LinearGradient>

      {/* Filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
        contentContainerStyle={styles.filtersContent}
      >
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter.id}
            style={[
              styles.filterChip,
              activeFilter === filter.id && styles.filterChipActive,
            ]}
            onPress={() => setActiveFilter(filter.id)}
          >
            <CustomText
              variant="body2"
              weight={activeFilter === filter.id ? 'semiBold' : 'regular'}
              color={activeFilter === filter.id ? COLORS.white : COLORS.textLight}
            >
              {filter.label}
            </CustomText>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bookings List */}
      <ScrollView
        style={styles.bookingsList}
        showsVerticalScrollIndicator={false}
      >
        {filteredBookings.length > 0 ? (
          filteredBookings.map(renderBookingCard)
        ) : (
          <View style={styles.emptyContainer}>
            <Icon name="calendar-blank" size={60} color={COLORS.textLight} />
            <CustomText variant="body1" color={COLORS.textLight} style={styles.emptyText}>
              No bookings found
            </CustomText>
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
  filtersContainer: {
    maxHeight: verticalScale(50),
    backgroundColor: COLORS.white,
  },
  filtersContent: {
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingVertical: SIZES.sm,
    gap: SIZES.sm,
  },
  filterChip: {
    paddingHorizontal: SIZES.lg,
    paddingVertical: SIZES.sm,
    borderRadius: SIZES.radiusFull,
    backgroundColor: COLORS.backgroundLight,
    marginRight: SIZES.sm,
  },
  filterChipActive: {
    backgroundColor: COLORS.primary,
  },
  bookingsList: {
    flex: 1,
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingTop: SIZES.md,
  },
  bookingCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radiusMedium,
    marginBottom: SIZES.md,
    overflow: 'hidden',
    ...SHADOWS.light,
  },
  bookingImage: {
    width: scale(100),
    height: verticalScale(120),
  },
  bookingInfo: {
    flex: 1,
    padding: SIZES.md,
    justifyContent: 'space-between',
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: SIZES.sm,
    paddingVertical: 2,
    borderRadius: SIZES.radiusSmall,
  },
  bookingDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.xs,
  },
  detailText: {
    marginLeft: SIZES.xs,
  },
  bookingFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.sm,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: verticalScale(100),
  },
  emptyText: {
    marginTop: SIZES.md,
  },
});

export default MyBookingsScreen;
