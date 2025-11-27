import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { CustomText } from '../components';
import { COLORS, SIZES, scale, verticalScale, SHADOWS } from '../theme';
import { FOOD_ITEMS, FOOD_CATEGORIES } from '../data/dummyData';

const FoodMenuScreen = ({ navigation, route }) => {
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [isVeg, setIsVeg] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find(c => c.id === item.id);
    if (existingItem) {
      setCart(cart.map(c => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const renderCategoryItem = ({ item }) => {
    const isSelected = selectedCategory === item.id;
    return (
      <TouchableOpacity
        style={[styles.categoryItem, isSelected && styles.categoryItemSelected]}
        onPress={() => setSelectedCategory(item.id)}
      >
        <Icon
          name={item.icon}
          size={24}
          color={isSelected ? COLORS.white : COLORS.textLight}
        />
        <CustomText
          variant="caption"
          color={isSelected ? COLORS.white : COLORS.textLight}
          style={styles.categoryText}
        >
          {item.name}
        </CustomText>
      </TouchableOpacity>
    );
  };

  const renderFoodItem = ({ item }) => (
    <TouchableOpacity
      style={styles.foodCard}
      onPress={() => navigation.navigate('FoodDetail', { food: item })}
    >
      <Image source={{ uri: item.image }} style={styles.foodImage} />
      <View style={styles.foodInfo}>
        <CustomText variant="body1" weight="semiBold" color={COLORS.textPrimary} numberOfLines={1}>
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
          <CustomText variant="body2" weight="semiBold" color="#FF9500">
            {item.discount}
          </CustomText>
          <CustomText variant="body1" weight="bold" color={COLORS.textPrimary} style={styles.price}>
            ${item.price}
          </CustomText>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addToCart(item)}
          >
            <CustomText variant="caption" weight="semiBold" color={COLORS.white}>
              Add
            </CustomText>
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={28} color={COLORS.textPrimary} />
        </TouchableOpacity>
        <CustomText variant="h4" weight="bold" color={COLORS.textPrimary}>
          Food
        </CustomText>
        <View style={styles.headerRight}>
          <CustomText variant="body2" color={COLORS.textLight}>Veg</CustomText>
          <Switch
            value={isVeg}
            onValueChange={setIsVeg}
            trackColor={{ false: COLORS.border, true: COLORS.primary }}
            thumbColor={COLORS.white}
            style={styles.switch}
          />
          <CustomText variant="body2" color={COLORS.textPrimary}>Non veg</CustomText>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="tune-vertical" size={SIZES.iconMedium} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <FlatList
        data={FOOD_CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesList}
      />

      {/* Food List */}
      <FlatList
        data={FOOD_ITEMS}
        renderItem={renderFoodItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.foodList}
      />

      {/* Cart Bar */}
      {totalItems > 0 && (
        <View style={styles.cartBar}>
          <View style={styles.cartInfo}>
            <CustomText variant="body2" color={COLORS.textPrimary}>
              Total items added : {totalItems}
            </CustomText>
            <CustomText variant="body2" color={COLORS.textPrimary}>
              Total price : ${totalPrice}
            </CustomText>
          </View>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => navigation.navigate('FoodCart', { cart })}
          >
            <LinearGradient
              colors={[COLORS.primary, '#00D4AA']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.cartGradient}
            >
              <Icon name="cart-outline" size={24} color={COLORS.white} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      )}
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
    alignItems: 'center',
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingVertical: SIZES.md,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  switch: {
    marginHorizontal: SIZES.xs,
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  filterButton: {
    marginLeft: SIZES.md,
  },
  categoriesList: {
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingBottom: SIZES.md,
  },
  categoryItem: {
    alignItems: 'center',
    paddingHorizontal: SIZES.md,
    paddingVertical: SIZES.sm,
    borderRadius: SIZES.radiusMedium,
    marginRight: SIZES.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  categoryItemSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  categoryText: {
    marginTop: SIZES.xs,
  },
  foodList: {
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingBottom: verticalScale(100),
  },
  foodCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radiusMedium,
    marginBottom: SIZES.md,
    ...SHADOWS.light,
    overflow: 'hidden',
  },
  foodImage: {
    width: scale(80),
    height: scale(100),
    borderRadius: SIZES.radiusSmall,
    margin: SIZES.sm,
  },
  foodInfo: {
    flex: 1,
    padding: SIZES.sm,
    justifyContent: 'space-between',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
  addButton: {
    backgroundColor: '#FF9500',
    paddingHorizontal: SIZES.md,
    paddingVertical: SIZES.xs,
    borderRadius: SIZES.radiusSmall,
    marginLeft: 'auto',
  },
  cartBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingVertical: SIZES.md,
    paddingBottom: verticalScale(30),
  },
  cartInfo: {
    flex: 1,
  },
  cartButton: {
    borderRadius: SIZES.radiusMedium,
    overflow: 'hidden',
  },
  cartGradient: {
    padding: SIZES.md,
    borderRadius: SIZES.radiusMedium,
  },
});

export default FoodMenuScreen;
