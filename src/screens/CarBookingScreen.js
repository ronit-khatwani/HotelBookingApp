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

const CAR_TYPES = [
  { id: 1, name: 'Sedan', icon: 'car-side' },
  { id: 2, name: 'SUV', icon: 'car-estate' },
  { id: 3, name: 'Van', icon: 'van-utility' },
  { id: 4, name: 'Luxury', icon: 'car-sports' },
];

const AVAILABLE_CARS = [
  {
    id: 1,
    name: 'Toyota Camry',
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
    seats: 5,
    bags: 3,
    transmission: 'Automatic',
    pricePerDay: 45,
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Honda CR-V',
    type: 'SUV',
    image: 'https://images.unsplash.com/photo-1568844293986-8c1a5a9d9a8a?w=400&h=300&fit=crop',
    seats: 5,
    bags: 4,
    transmission: 'Automatic',
    pricePerDay: 65,
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Mercedes S-Class',
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop',
    seats: 5,
    bags: 3,
    transmission: 'Automatic',
    pricePerDay: 150,
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Toyota Sienna',
    type: 'Van',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop',
    seats: 7,
    bags: 5,
    transmission: 'Automatic',
    pricePerDay: 85,
    rating: 4.6,
  },
];

const CarBookingScreen = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState(null);

  const filteredCars = selectedType
    ? AVAILABLE_CARS.filter(car => car.type === selectedType)
    : AVAILABLE_CARS;

  const renderCarCard = (car) => (
    <TouchableOpacity
      key={car.id}
      style={styles.carCard}
    >
      <Image source={{ uri: car.image }} style={styles.carImage} />
      <View style={styles.carInfo}>
        <View style={styles.carHeader}>
          <CustomText variant="body1" weight="bold" color={COLORS.textPrimary}>
            {car.name}
          </CustomText>
          <View style={styles.ratingBadge}>
            <Icon name="star" size={12} color="#FFB800" />
            <CustomText variant="caption" color={COLORS.textPrimary} style={{ marginLeft: 2 }}>
              {car.rating}
            </CustomText>
          </View>
        </View>
        
        <CustomText variant="caption" color={COLORS.textLight}>
          {car.type} • {car.transmission}
        </CustomText>
        
        <View style={styles.carFeatures}>
          <View style={styles.featureItem}>
            <Icon name="account-multiple" size={14} color={COLORS.textLight} />
            <CustomText variant="caption" color={COLORS.textLight} style={{ marginLeft: 4 }}>
              {car.seats}
            </CustomText>
          </View>
          <View style={styles.featureItem}>
            <Icon name="bag-checked" size={14} color={COLORS.textLight} />
            <CustomText variant="caption" color={COLORS.textLight} style={{ marginLeft: 4 }}>
              {car.bags}
            </CustomText>
          </View>
        </View>

        <View style={styles.carFooter}>
          <View>
            <CustomText variant="h5" weight="bold" color={COLORS.primary}>
              ${car.pricePerDay}
            </CustomText>
            <CustomText variant="caption" color={COLORS.textLight}>
              per day
            </CustomText>
          </View>
          <TouchableOpacity style={styles.bookButton}>
            <LinearGradient
              colors={[COLORS.primary, '#00D4AA']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.bookGradient}
            >
              <CustomText variant="caption" weight="bold" color={COLORS.white}>
                BOOK
              </CustomText>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      
      {/* Header */}
      <View style={styles.header}>
        <CustomText variant="h4" weight="bold" color={COLORS.textPrimary}>
          Car Booking
        </CustomText>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="tune-variant" size={22} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      {/* Search Form */}
      <View style={styles.searchForm}>
        <View style={styles.inputRow}>
          <Icon name="map-marker" size={20} color={COLORS.primary} />
          <View style={styles.inputContent}>
            <CustomText variant="caption" color={COLORS.textLight}>
              Pick-up Location
            </CustomText>
            <CustomText variant="body2" weight="semiBold" color={COLORS.textPrimary}>
              New York City
            </CustomText>
          </View>
        </View>
        <View style={styles.inputDivider} />
        <View style={styles.inputRow}>
          <Icon name="calendar-range" size={20} color={COLORS.primary} />
          <View style={styles.inputContent}>
            <CustomText variant="caption" color={COLORS.textLight}>
              Pick-up - Drop-off
            </CustomText>
            <CustomText variant="body2" weight="semiBold" color={COLORS.textPrimary}>
              Dec 15 - Dec 18, 2024
            </CustomText>
          </View>
        </View>
      </View>

      {/* Car Types */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.typesContainer}
        contentContainerStyle={styles.typesContent}
      >
        <TouchableOpacity
          style={[styles.typeChip, !selectedType && styles.typeChipActive]}
          onPress={() => setSelectedType(null)}
        >
          <Icon
            name="car"
            size={18}
            color={!selectedType ? COLORS.white : COLORS.textLight}
          />
          <CustomText
            variant="caption"
            weight={!selectedType ? 'semiBold' : 'regular'}
            color={!selectedType ? COLORS.white : COLORS.textLight}
            style={{ marginLeft: SIZES.xs }}
          >
            All
          </CustomText>
        </TouchableOpacity>
        {CAR_TYPES.map((type) => (
          <TouchableOpacity
            key={type.id}
            style={[
              styles.typeChip,
              selectedType === type.name && styles.typeChipActive,
            ]}
            onPress={() => setSelectedType(type.name)}
          >
            <Icon
              name={type.icon}
              size={18}
              color={selectedType === type.name ? COLORS.white : COLORS.textLight}
            />
            <CustomText
              variant="caption"
              weight={selectedType === type.name ? 'semiBold' : 'regular'}
              color={selectedType === type.name ? COLORS.white : COLORS.textLight}
              style={{ marginLeft: SIZES.xs }}
            >
              {type.name}
            </CustomText>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Cars List */}
      <ScrollView
        style={styles.carsList}
        showsVerticalScrollIndicator={false}
      >
        <CustomText variant="body1" weight="semiBold" color={COLORS.textPrimary} style={styles.resultsText}>
          {filteredCars.length} cars available
        </CustomText>
        {filteredCars.map(renderCarCard)}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color={COLORS.tabInactive} />
          <CustomText variant="caption" color={COLORS.tabInactive}>Home</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('CarBooking')}>
          <Icon name="car" size={24} color={COLORS.primary} />
          <CustomText variant="caption" color={COLORS.primary}>Car</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="account" size={24} color={COLORS.tabInactive} />
          <CustomText variant="caption" color={COLORS.tabInactive}>Profile</CustomText>
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
  filterButton: {
    padding: SIZES.xs,
  },
  searchForm: {
    backgroundColor: COLORS.backgroundLight,
    marginHorizontal: SIZES.paddingHorizontal,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.md,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.sm,
  },
  inputContent: {
    marginLeft: SIZES.md,
  },
  inputDivider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginLeft: 36,
  },
  typesContainer: {
    maxHeight: verticalScale(50),
    marginTop: SIZES.md,
  },
  typesContent: {
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingVertical: SIZES.sm,
  },
  typeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.md,
    paddingVertical: SIZES.sm,
    borderRadius: SIZES.radiusFull,
    backgroundColor: COLORS.backgroundLight,
    marginRight: SIZES.sm,
  },
  typeChipActive: {
    backgroundColor: COLORS.primary,
  },
  carsList: {
    flex: 1,
    paddingHorizontal: SIZES.paddingHorizontal,
  },
  resultsText: {
    marginVertical: SIZES.md,
  },
  carCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radiusMedium,
    marginBottom: SIZES.md,
    overflow: 'hidden',
    ...SHADOWS.light,
  },
  carImage: {
    width: '100%',
    height: verticalScale(150),
  },
  carInfo: {
    padding: SIZES.md,
  },
  carHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9E6',
    paddingHorizontal: SIZES.sm,
    paddingVertical: 2,
    borderRadius: SIZES.radiusSmall,
  },
  carFeatures: {
    flexDirection: 'row',
    marginTop: SIZES.sm,
    gap: SIZES.md,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.md,
    paddingTop: SIZES.md,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  bookButton: {
    borderRadius: SIZES.radiusSmall,
    overflow: 'hidden',
  },
  bookGradient: {
    paddingVertical: SIZES.sm,
    paddingHorizontal: SIZES.lg,
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

export default CarBookingScreen;
