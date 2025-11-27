import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { CustomText, CustomButton } from '../components';
import { COLORS, SIZES, scale, verticalScale, SHADOWS } from '../theme';
import { FOOD_ITEMS } from '../data/dummyData';

const { width } = Dimensions.get('window');

const HotelDetailScreen = ({ navigation, route }) => {
  const hotel = route?.params?.hotel || {
    name: 'Heden Golf',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    rating: 3.9,
    reviews: 200,
    price: 127,
    originalPrice: 150,
    description: 'Set in landscaped gardens overlooking the Ébrié lagoon, this upscale hotel featuring contemporary local art and architectural touches is 3 km from Mosquée de la riviéra and 17 km from Banco National Park.',
    location: 'Abidjan, Côte d\'Ivoire',
    phone: '+225 22 48 26 26',
    checkinTime: '12 PM',
    checkoutTime: '11 AM',
    facilities: ['Free Wi-Fi', 'Fitness Center', 'Free Breakfast', 'Kid Friendly'],
    amenities: ['Great dining', 'Pet friendly', 'Great rooms', 'Great breakfast', 'Great pool', 'Luxurious vibe'],
    photos: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
    ],
    liked: 85,
  };

  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [`Review (${hotel.reviews || 106})`, 'Photo (10)', 'Near by (24)'];

  const facilityIcons = {
    'Free Wi-Fi': 'wifi',
    'Fitness Center': 'dumbbell',
    'Free Breakfast': 'food',
    'Kid Friendly': 'baby-carriage',
    'Pool': 'pool',
    'Restaurant': 'silverware-fork-knife',
  };

  const renderHeader = () => (
    <View style={styles.headerImage}>
      <Image source={{ uri: hotel.image }} style={styles.mainImage} />
      <LinearGradient
        colors={['rgba(0,0,0,0.5)', 'transparent', 'rgba(0,0,0,0.5)']}
        style={styles.imageOverlay}
      />
      <SafeAreaView style={styles.headerNav}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" size={28} color={COLORS.white} />
        </TouchableOpacity>
        <CustomText variant="h4" weight="bold" color={COLORS.white}>
          {hotel.name}
        </CustomText>
        <TouchableOpacity style={styles.shareButton}>
          <Icon name="share-variant" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.imageInfo}>
        <View style={styles.ratingBadge}>
          <Icon name="star" size={16} color="#FFB800" />
          <CustomText variant="body2" weight="bold" color={COLORS.white}>
            {hotel.rating}
          </CustomText>
        </View>
        <CustomText variant="caption" color={COLORS.white}>
          {hotel.liked}/100 people liked this
        </CustomText>
        <View style={styles.locationBadge}>
          <Icon name="map-marker" size={14} color="#FFB800" />
          <CustomText variant="caption" color={COLORS.white}>
            {hotel.location}
          </CustomText>
        </View>
      </View>
    </View>
  );

  const renderTabs = () => (
    <View style={styles.tabsContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, selectedTab === index && styles.activeTab]}
          onPress={() => setSelectedTab(index)}
        >
          <CustomText
            variant="body2"
            weight="medium"
            color={selectedTab === index ? COLORS.white : COLORS.textPrimary}
          >
            {tab}
          </CustomText>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderReviewContent = () => (
    <>
      <View style={styles.section}>
        <CustomText variant="body1" weight="bold" color={COLORS.textPrimary} style={styles.sectionTitle}>
          HOTEL DESCRIPTION
        </CustomText>
        <CustomText variant="body2" color={COLORS.textLight} style={styles.description}>
          {hotel.description}
        </CustomText>
      </View>

      <View style={styles.section}>
        <CustomText variant="body1" weight="bold" color={COLORS.textPrimary} style={styles.sectionTitle}>
          HOTEL FACILITIES
        </CustomText>
        <View style={styles.facilitiesRow}>
          {(hotel.facilities || []).slice(0, 4).map((facility, index) => (
            <View key={index} style={styles.facilityItem}>
              <Icon
                name={facilityIcons[facility] || 'check'}
                size={28}
                color={COLORS.primary}
              />
              <CustomText variant="caption" color={COLORS.textLight} style={styles.facilityText}>
                {facility}
              </CustomText>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Icon name="map-marker-outline" size={20} color={COLORS.primary} />
          <CustomText variant="body2" color={COLORS.textPrimary} style={styles.infoText}>
            {hotel.location}
          </CustomText>
        </View>
        <View style={styles.infoRow}>
          <Icon name="phone-outline" size={20} color={COLORS.primary} />
          <CustomText variant="body2" color={COLORS.textPrimary} style={styles.infoText}>
            {hotel.phone}
          </CustomText>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.timeRow}>
            <Icon name="calendar-outline" size={20} color={COLORS.primary} />
            <CustomText variant="body2" color={COLORS.textPrimary} style={styles.infoText}>
              Checkin {hotel.checkinTime}
            </CustomText>
          </View>
          <View style={styles.timeRow}>
            <Icon name="calendar-outline" size={20} color={COLORS.primary} />
            <CustomText variant="body2" color={COLORS.textPrimary} style={styles.infoText}>
              Checkout {hotel.checkoutTime}
            </CustomText>
          </View>
        </View>
      </View>

      <View style={styles.amenitiesGrid}>
        {(hotel.amenities || []).map((amenity, index) => (
          <View key={index} style={styles.amenityBadge}>
            <Icon name="check-circle" size={14} color={COLORS.primary} />
            <CustomText variant="caption" color={COLORS.textLight} style={styles.amenityBadgeText}>
              {amenity}
            </CustomText>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <CustomText variant="body1" weight="bold" color={COLORS.textPrimary} style={styles.sectionTitle}>
          CHECK AVAILABILITY
        </CustomText>
        <TouchableOpacity style={styles.dateRow}>
          <Icon name="calendar-outline" size={20} color={COLORS.textLight} />
          <CustomText variant="body2" color={COLORS.textLight} style={styles.dateText}>
            Checkin date & time
          </CustomText>
          <Icon name="chevron-down" size={20} color={COLORS.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateRow}>
          <Icon name="calendar-outline" size={20} color={COLORS.textLight} />
          <CustomText variant="body2" color={COLORS.textLight} style={styles.dateText}>
            Checkout date & time
          </CustomText>
          <Icon name="chevron-down" size={20} color={COLORS.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateRow}>
          <Icon name="account-group-outline" size={20} color={COLORS.textLight} />
          <CustomText variant="body2" color={COLORS.textLight} style={styles.dateText}>
            0 Adults.     0 Children.     0 room
          </CustomText>
          <Icon name="chevron-down" size={20} color={COLORS.textPrimary} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <CustomText variant="body1" weight="bold" color={COLORS.textPrimary}>
            FOOD
          </CustomText>
          <TouchableOpacity onPress={() => navigation.navigate('FoodMenu', { hotel })}>
            <CustomText variant="body2" weight="semiBold" color={COLORS.primary}>
              VIEW ALL
            </CustomText>
          </TouchableOpacity>
        </View>
        <FlatList
          data={FOOD_ITEMS.slice(0, 4)}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.foodCard}
              onPress={() => navigation.navigate('FoodDetail', { food: item })}
            >
              <Image source={{ uri: item.image }} style={styles.foodImage} />
              <CustomText variant="caption" color={COLORS.textPrimary} numberOfLines={2}>
                {item.name}
              </CustomText>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );

  const renderPhotosContent = () => (
    <View style={styles.photosGrid}>
      {(hotel.photos || []).map((photo, index) => (
        <Image key={index} source={{ uri: photo }} style={styles.gridPhoto} />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderHeader()}
        {renderTabs()}
        
        {selectedTab === 0 && renderReviewContent()}
        {selectedTab === 1 && renderPhotosContent()}
        
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View>
          <CustomText variant="caption" color={COLORS.textLight} style={styles.strikethrough}>
            ${hotel.originalPrice}
          </CustomText>
          <View style={styles.priceRow}>
            <CustomText variant="h4" weight="bold" color={COLORS.textPrimary}>
              ${hotel.price}
            </CustomText>
            <CustomText variant="caption" color={COLORS.textLight}>
              AVG/NIGHT
            </CustomText>
          </View>
        </View>
        <TouchableOpacity
          style={styles.bookingButton}
          onPress={() => navigation.navigate('Payment', { hotel })}
        >
          <LinearGradient
            colors={[COLORS.primary, '#00D4AA']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.bookingGradient}
          >
            <CustomText variant="body1" weight="bold" color={COLORS.white}>
              BOOKING NOW
            </CustomText>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerImage: {
    height: verticalScale(280),
    position: 'relative',
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  headerNav: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingTop: SIZES.md,
  },
  backButton: {
    padding: SIZES.xs,
  },
  shareButton: {
    padding: SIZES.xs,
  },
  imageInfo: {
    position: 'absolute',
    bottom: SIZES.md,
    left: SIZES.paddingHorizontal,
    right: SIZES.paddingHorizontal,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.xs,
  },
  locationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.xs,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingVertical: SIZES.md,
  },
  tab: {
    paddingVertical: SIZES.sm,
    paddingHorizontal: SIZES.md,
    borderRadius: SIZES.radiusLarge,
    marginRight: SIZES.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  activeTab: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  section: {
    paddingHorizontal: SIZES.paddingHorizontal,
    marginTop: SIZES.lg,
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: SIZES.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.md,
  },
  description: {
    textAlign: 'center',
    lineHeight: 22,
  },
  facilitiesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: SIZES.md,
  },
  facilityItem: {
    alignItems: 'center',
  },
  facilityText: {
    marginTop: SIZES.xs,
    textAlign: 'center',
  },
  infoSection: {
    paddingHorizontal: SIZES.paddingHorizontal,
    marginTop: SIZES.lg,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: SIZES.md,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.md,
  },
  infoText: {
    marginLeft: SIZES.md,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  amenitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: SIZES.paddingHorizontal,
    marginTop: SIZES.md,
  },
  amenityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingHorizontal: SIZES.sm,
    paddingVertical: SIZES.xs,
    borderRadius: SIZES.radiusSmall,
    marginRight: SIZES.sm,
    marginBottom: SIZES.sm,
  },
  amenityBadgeText: {
    marginLeft: SIZES.xs,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  dateText: {
    flex: 1,
    marginLeft: SIZES.md,
  },
  foodCard: {
    marginRight: SIZES.md,
    width: scale(100),
  },
  foodImage: {
    width: scale(100),
    height: scale(80),
    borderRadius: SIZES.radiusSmall,
    marginBottom: SIZES.xs,
  },
  photosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: SIZES.sm,
  },
  gridPhoto: {
    width: (width - SIZES.md * 4) / 3,
    height: (width - SIZES.md * 4) / 3,
    margin: SIZES.xs,
    borderRadius: SIZES.radiusSmall,
  },
  bottomSpacing: {
    height: verticalScale(100),
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingVertical: SIZES.md,
    paddingBottom: verticalScale(30),
    ...SHADOWS.medium,
  },
  strikethrough: {
    textDecorationLine: 'line-through',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  bookingButton: {
    borderRadius: SIZES.radiusMedium,
    overflow: 'hidden',
  },
  bookingGradient: {
    paddingVertical: SIZES.md,
    paddingHorizontal: SIZES.xl,
  },
});

export default HotelDetailScreen;
