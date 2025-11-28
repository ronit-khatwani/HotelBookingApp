import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomText, CustomButton } from '../components';
import { COLORS, SIZES, scale, verticalScale, SHADOWS } from '../theme';
import { DUMMY_HOTELS, AMENITIES } from '../data/dummyData';

const HotelsListScreen = ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAmenities, setShowAmenities] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState(['1']);
  const [isMapView, setIsMapView] = useState(false);
  const location = route?.params?.location || 'Abidjan';

  const toggleAmenity = (id) => {
    if (selectedAmenities.includes(id)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== id));
    } else {
      setSelectedAmenities([...selectedAmenities, id]);
    }
  };

  const renderHotelItem = ({ item }) => (
    <TouchableOpacity
      style={styles.hotelCard}
      onPress={() => navigation.navigate('HotelDetail', { hotel: item })}
    >
      <Image source={{ uri: item.image }} style={styles.hotelImage} />
      <View style={styles.hotelInfo}>
        <CustomText variant="body1" weight="bold" color={COLORS.textPrimary}>
          {item.name}
        </CustomText>
        <View style={styles.ratingRow}>
          <Icon name="star" size={14} color="#FFB800" />
          <CustomText variant="caption" color={COLORS.textLight} style={styles.ratingText}>
            {item.rating}
          </CustomText>
          <CustomText variant="caption" color={COLORS.textLight}>
            Reviews ({item.reviews})
          </CustomText>
        </View>
        <CustomText variant="caption" color={COLORS.textLight} numberOfLines={1}>
          {item.description}
        </CustomText>
        <View style={styles.priceRow}>
          {item.discount && (
            <CustomText variant="body2" weight="semiBold" color="#FF9500">
              {item.discount}
            </CustomText>
          )}
          <CustomText variant="body1" weight="bold" color={COLORS.textPrimary} style={styles.price}>
            ${item.price}
          </CustomText>
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => navigation.navigate('HotelDetail', { hotel: item })}
          >
            <CustomText variant="caption" weight="semiBold" color={COLORS.white}>
              Book now
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderAmenitiesModal = () => (
    <Modal visible={showAmenities} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.amenitiesGrid}>
            {AMENITIES.map((amenity) => {
              const isSelected = selectedAmenities.includes(amenity.id);
              return (
                <TouchableOpacity
                  key={amenity.id}
                  style={[styles.amenityItem, isSelected && styles.amenityItemSelected]}
                  onPress={() => toggleAmenity(amenity.id)}
                >
                  <Icon
                    name={amenity.icon}
                    size={30}
                    color={isSelected ? COLORS.white : COLORS.primary}
                  />
                  <CustomText
                    variant="caption"
                    color={isSelected ? COLORS.white : COLORS.textPrimary}
                    style={styles.amenityText}
                  >
                    {amenity.name}
                  </CustomText>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => setSelectedAmenities([])}
            >
              <CustomText variant="body2" weight="semiBold" color={COLORS.primary}>
                Clear
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => setShowAmenities(false)}
            >
              <CustomText variant="body2" weight="semiBold" color={COLORS.white}>
                Apply
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color={COLORS.textPrimary} />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <CustomText variant="h4" weight="bold" color={COLORS.textPrimary}>
            Hotels
          </CustomText>
          <CustomText variant="body2" color={COLORS.textLight}>
            {location} 200 hotels
          </CustomText>
        </View>
        <TouchableOpacity onPress={() => setIsMapView(!isMapView)}>
          <Icon
            name={isMapView ? 'format-list-bulleted' : 'map-marker-outline'}
            size={SIZES.iconLarge}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="magnify" size={SIZES.iconMedium} color={COLORS.textLight} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={COLORS.textPlaceholder}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Icon name="close" size={SIZES.iconSmall} color={COLORS.textLight} />
          </TouchableOpacity>
        )}
      </View>

      {/* Filters */}
      <View style={styles.filtersRow}>
        <TouchableOpacity style={styles.filterItem} onPress={() => setShowAmenities(true)}>
          <CustomText variant="body2" color={COLORS.textPrimary}>Amenities</CustomText>
          <Icon name="chevron-down" size={18} color={COLORS.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterItem}>
          <CustomText variant="body2" color={COLORS.textPrimary}>Filter by</CustomText>
          <Icon name="chevron-down" size={18} color={COLORS.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterItem}>
          <CustomText variant="body2" color={COLORS.textPrimary}>Sort by</CustomText>
          <Icon name="chevron-down" size={18} color={COLORS.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Hotels List */}
      <FlatList
        data={DUMMY_HOTELS}
        renderItem={renderHotelItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />

      {renderAmenitiesModal()}
      
      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color={COLORS.primary} />
          <CustomText variant="caption" color={COLORS.primary}>Home</CustomText>
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
  backButton: {
    marginRight: SIZES.md,
  },
  headerTitle: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    marginHorizontal: SIZES.paddingHorizontal,
    paddingHorizontal: SIZES.md,
    borderRadius: SIZES.radiusMedium,
    height: verticalScale(44),
  },
  searchInput: {
    flex: 1,
    marginLeft: SIZES.sm,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  filtersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingVertical: SIZES.md,
  },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContent: {
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingBottom: verticalScale(100),
  },
  hotelCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radiusMedium,
    marginBottom: SIZES.md,
    ...SHADOWS.light,
    overflow: 'hidden',
  },
  hotelImage: {
    width: scale(80),
    height: scale(100),
    borderRadius: SIZES.radiusSmall,
    margin: SIZES.sm,
  },
  hotelInfo: {
    flex: 1,
    padding: SIZES.sm,
    justifyContent: 'space-between',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  ratingText: {
    marginHorizontal: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.xs,
  },
  price: {
    marginLeft: SIZES.sm,
  },
  bookButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.md,
    paddingVertical: SIZES.xs,
    borderRadius: SIZES.radiusSmall,
    marginLeft: 'auto',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.radiusLarge,
    borderTopRightRadius: SIZES.radiusLarge,
    padding: SIZES.paddingHorizontal,
    paddingBottom: verticalScale(40),
  },
  amenitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  amenityItem: {
    width: '48%',
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: SIZES.radiusMedium,
    paddingVertical: SIZES.lg,
    alignItems: 'center',
    marginBottom: SIZES.md,
  },
  amenityItemSelected: {
    backgroundColor: COLORS.primary,
  },
  amenityText: {
    marginTop: SIZES.sm,
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: SIZES.lg,
  },
  clearButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingVertical: SIZES.md,
    alignItems: 'center',
    borderRadius: SIZES.radiusMedium,
    marginRight: SIZES.sm,
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#00D4AA',
    paddingVertical: SIZES.md,
    alignItems: 'center',
    borderRadius: SIZES.radiusMedium,
    marginLeft: SIZES.sm,
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

export default HotelsListScreen;
