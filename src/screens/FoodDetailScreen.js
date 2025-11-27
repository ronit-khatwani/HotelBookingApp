import React from 'react';
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

const FoodDetailScreen = ({ navigation, route }) => {
  const food = route?.params?.food || {
    name: 'Bagels with turkey and bacon',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=300&fit=crop',
    rating: 3.9,
    reviews: 200,
    price: 10,
    description: 'A poppy seed bagel is spread with a mixture of cream cheese, parsley and pickles. Subsequently, a slice of crisp lettuce is added, with a slice of tomato, two half slices of turkey and two half slices of pastrami. To top it off, this king feast takes only five minutes to complete and contains less than 400 calories.',
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Food Image */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: food.image }} style={styles.foodImage} />
          <SafeAreaView style={styles.headerNav}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Icon name="chevron-left" size={28} color={COLORS.textPrimary} />
            </TouchableOpacity>
          </SafeAreaView>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <CustomText variant="h4" weight="bold" color={COLORS.textPrimary}>
            {food.name}
          </CustomText>
          
          <View style={styles.ratingRow}>
            <Icon name="star" size={16} color="#FFB800" />
            <CustomText variant="body2" color={COLORS.textLight} style={styles.ratingText}>
              {food.rating}
            </CustomText>
            <CustomText variant="body2" color={COLORS.textLight}>
              Reviews ({food.reviews})
            </CustomText>
          </View>

          <CustomText variant="body1" color={COLORS.textLight} style={styles.description}>
            {food.description}
          </CustomText>

          <View style={styles.priceContainer}>
            <CustomText variant="body1" color={COLORS.textLight}>
              Price :
            </CustomText>
            <CustomText variant="h3" weight="bold" color={COLORS.textPrimary} style={styles.price}>
              ${food.price}
            </CustomText>
          </View>
        </View>
      </ScrollView>

      {/* Add to Bag Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.goBack()}
        >
          <LinearGradient
            colors={[COLORS.primary, '#00D4AA']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.addGradient}
          >
            <CustomText variant="body1" weight="bold" color={COLORS.white}>
              ADD TO BAG
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
  imageContainer: {
    height: verticalScale(300),
    position: 'relative',
  },
  foodImage: {
    width: '100%',
    height: '100%',
  },
  headerNav: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: SIZES.paddingHorizontal,
  },
  backButton: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: SIZES.xs,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.light,
  },
  content: {
    padding: SIZES.paddingHorizontal,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.sm,
  },
  ratingText: {
    marginHorizontal: SIZES.xs,
  },
  description: {
    marginTop: SIZES.lg,
    lineHeight: 24,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: SIZES.xl,
  },
  price: {
    marginLeft: SIZES.sm,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingVertical: SIZES.md,
    paddingBottom: verticalScale(30),
  },
  addButton: {
    borderRadius: SIZES.radiusMedium,
    overflow: 'hidden',
  },
  addGradient: {
    paddingVertical: SIZES.md,
    alignItems: 'center',
  },
});

export default FoodDetailScreen;
