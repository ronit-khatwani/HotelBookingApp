import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Switch,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {
  CustomText,
  CustomButton,
  SegmentedControl,
  PlaceCard,
  HotelCard,
  LocationSuggestionItem,
} from '../components';
import { COLORS, SIZES, verticalScale, scale, SHADOWS } from '../theme';
import {
  DUMMY_PLACES,
  DUMMY_HOTELS,
  LOCATION_SUGGESTIONS,
} from '../data/dummyData';

const HomeScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isStay, setIsStay] = useState(true);
  const [location, setLocation] = useState('');
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState({
    day: 23,
    month: 'July',
    year: 2019,
    hour: 10,
    minute: '00',
    period: 'AM',
  });

  const handleLocationSelect = (item) => {
    setLocation(item.city);
    setShowLocationPicker(false);
  };

  const handleSearch = () => {
    navigation.navigate('HotelsList');
  };

  const handleViewAllPlaces = () => {
    navigation.navigate('HotelsList');
  };

  const handleViewAllHotels = () => {
    navigation.navigate('HotelsList');
  };

  const handleHotelPress = (hotel) => {
    navigation.navigate('HotelDetail', { hotel });
  };

  const handlePlacePress = (place) => {
    navigation.navigate('HotelsList', { place });
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const closeDatePicker = () => {
    setShowDatePicker(false);
  };

  const renderSectionHeader = (title, onViewAll) => (
    <View style={styles.sectionHeader}>
      <CustomText variant="body2" weight="bold" color={COLORS.textPrimary}>
        {title}
      </CustomText>
      <TouchableOpacity onPress={onViewAll}>
        <CustomText variant="body2" weight="semiBold" color={COLORS.primary}>
          VIEW ALL
        </CustomText>
      </TouchableOpacity>
    </View>
  );

  const renderDatePicker = () => (
    <View style={styles.datePickerContainer}>
      <TouchableOpacity style={styles.datePickerHeader} onPress={toggleDatePicker}>
        <Icon name="calendar" size={SIZES.iconMedium} color={COLORS.textLight} />
        <CustomText variant="body2" weight="medium" style={styles.datePickerTitle}>
          Checkin date & time
        </CustomText>
        <Icon
          name={showDatePicker ? 'chevron-up' : 'chevron-down'}
          size={SIZES.iconMedium}
          color={COLORS.textPrimary}
        />
      </TouchableOpacity>

      {showDatePicker && (
        <View style={styles.datePickerContent}>
          <View style={styles.dateColumns}>
            <View style={styles.dateColumn}>
              <CustomText variant="body3" color={COLORS.textLight}>Day</CustomText>
              {[21, 22, 23, 24, 25].map((day) => (
                <TouchableOpacity
                  key={day}
                  onPress={() => setSelectedDate({ ...selectedDate, day })}
                >
                  <CustomText
                    variant="body1"
                    weight={selectedDate.day === day ? 'bold' : 'regular'}
                    color={selectedDate.day === day ? COLORS.primary : COLORS.textLight}
                    style={styles.dateItem}
                  >
                    {day}
                  </CustomText>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.dateColumn}>
              <CustomText variant="body3" color={COLORS.textLight}>Month</CustomText>
              {['May', 'June', 'July', 'August', 'September'].map((month) => (
                <TouchableOpacity
                  key={month}
                  onPress={() => setSelectedDate({ ...selectedDate, month })}
                >
                  <CustomText
                    variant="body1"
                    weight={selectedDate.month === month ? 'bold' : 'regular'}
                    color={selectedDate.month === month ? COLORS.primary : COLORS.textLight}
                    style={styles.dateItem}
                  >
                    {month}
                  </CustomText>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.dateColumn}>
              <CustomText variant="body3" color={COLORS.textLight}>Year</CustomText>
              {[2017, 2018, 2019, 2020, 2021].map((year) => (
                <TouchableOpacity
                  key={year}
                  onPress={() => setSelectedDate({ ...selectedDate, year })}
                >
                  <CustomText
                    variant="body1"
                    weight={selectedDate.year === year ? 'bold' : 'regular'}
                    color={selectedDate.year === year ? COLORS.primary : COLORS.textLight}
                    style={styles.dateItem}
                  >
                    {year}
                  </CustomText>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.dateColumn}>
              <CustomText variant="body3" color={COLORS.textLight}>Time</CustomText>
              {['08:00', '09:00', '10:00', '11:00', '12:00'].map((time, index) => (
                <TouchableOpacity 
                  key={index}
                  onPress={() => {
                    const [hour] = time.split(':');
                    setSelectedDate({ ...selectedDate, hour: parseInt(hour) });
                  }}
                >
                  <CustomText
                    variant="body1"
                    weight={selectedDate.hour === parseInt(time.split(':')[0]) ? 'bold' : 'regular'}
                    color={selectedDate.hour === parseInt(time.split(':')[0]) ? COLORS.primary : COLORS.textLight}
                    style={styles.dateItem}
                  >
                    {time}
                  </CustomText>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          {/* Done Button */}
          <TouchableOpacity style={styles.doneButton} onPress={closeDatePicker}>
            <LinearGradient
              colors={[COLORS.primary, '#00D4AA']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.doneGradient}
            >
              <CustomText variant="body2" weight="bold" color={COLORS.white}>
                Done
              </CustomText>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      
      {/* Header */}
      <View style={styles.header}>
        <CustomText variant="h4" weight="bold" color={COLORS.textPrimary}>
          Find room
        </CustomText>
        <View style={styles.headerRight}>
          <CustomText variant="body2" color={COLORS.textLight}>
            Stay
          </CustomText>
          <Switch
            value={!isStay}
            onValueChange={() => setIsStay(!isStay)}
            trackColor={{ false: COLORS.border, true: COLORS.primary }}
            thumbColor={COLORS.white}
            style={styles.switch}
          />
          <CustomText variant="body2" color={COLORS.textPrimary}>
            Pass
          </CustomText>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="tune-vertical" size={SIZES.iconMedium} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Segmented Control */}
      <View style={styles.segmentContainer}>
        <SegmentedControl
          options={['Hotels', 'Villas']}
          selectedIndex={selectedTab}
          onSelect={setSelectedTab}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Location Input */}
        <TouchableOpacity
          style={styles.locationInput}
          onPress={() => setShowLocationPicker(true)}
        >
          <Icon name="map-marker-outline" size={SIZES.iconMedium} color={COLORS.textLight} />
          <CustomText
            variant="body1"
            color={location ? COLORS.textPrimary : COLORS.textPlaceholder}
            style={styles.locationText}
          >
            {location || 'Where do you want'}
          </CustomText>
        </TouchableOpacity>

        {/* Location Suggestions */}
        {showLocationPicker && (
          <View style={styles.suggestionsContainer}>
            {LOCATION_SUGGESTIONS.map((item) => (
              <LocationSuggestionItem
                key={item.id}
                item={item}
                onPress={() => handleLocationSelect(item)}
              />
            ))}
          </View>
        )}

        {/* Date Picker */}
        {renderDatePicker()}

        {/* Search Button */}
        <View style={styles.searchButtonContainer}>
          <CustomButton title="Search" onPress={handleSearch} />
        </View>

        {/* Best Places */}
        {renderSectionHeader('BEST PLACES', handleViewAllPlaces)}
        <FlatList
          data={DUMMY_PLACES}
          renderItem={({ item }) => <PlaceCard item={item} onPress={() => handlePlacePress(item)} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />

        {/* Best Hotels */}
        {renderSectionHeader('BEST HOTELS', handleViewAllHotels)}
        <FlatList
          data={DUMMY_HOTELS}
          renderItem={({ item }) => <HotelCard item={item} onPress={() => handleHotelPress(item)} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />

        <View style={styles.bottomSpacing} />
      </ScrollView>

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
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    marginHorizontal: SIZES.xs,
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  filterButton: {
    marginLeft: SIZES.md,
    padding: SIZES.xs,
  },
  segmentContainer: {
    paddingHorizontal: SIZES.paddingHorizontal,
    marginBottom: SIZES.md,
  },
  locationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingVertical: SIZES.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    marginHorizontal: SIZES.paddingHorizontal,
  },
  locationText: {
    marginLeft: SIZES.md,
    flex: 1,
  },
  suggestionsContainer: {
    marginHorizontal: SIZES.paddingHorizontal,
    backgroundColor: COLORS.white,
    ...SHADOWS.medium,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.md,
    marginTop: SIZES.sm,
  },
  datePickerContainer: {
    marginHorizontal: SIZES.paddingHorizontal,
    marginTop: SIZES.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingBottom: SIZES.md,
  },
  datePickerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePickerTitle: {
    flex: 1,
    marginLeft: SIZES.md,
  },
  datePickerContent: {
    marginTop: SIZES.md,
  },
  dateColumns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateColumn: {
    alignItems: 'center',
  },
  dateItem: {
    paddingVertical: SIZES.sm,
  },
  doneButton: {
    marginTop: SIZES.md,
    borderRadius: SIZES.radiusSmall,
    overflow: 'hidden',
  },
  doneGradient: {
    paddingVertical: SIZES.sm,
    alignItems: 'center',
  },
  searchButtonContainer: {
    paddingHorizontal: SIZES.paddingHorizontal,
    marginTop: SIZES.lg,
    marginBottom: SIZES.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.paddingHorizontal,
    marginTop: SIZES.md,
    marginBottom: SIZES.md,
  },
  horizontalList: {
    paddingHorizontal: SIZES.paddingHorizontal,
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

export default HomeScreen;
