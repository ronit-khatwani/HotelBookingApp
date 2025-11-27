import React, { useState } from 'react';
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
import { PAYMENT_METHODS } from '../data/dummyData';

const PaymentScreen = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState('visa');

  const getCardIcon = (type) => {
    switch (type) {
      case 'visa':
        return 'credit-card';
      case 'mastercard':
        return 'credit-card-outline';
      case 'paypal':
        return 'wallet';
      default:
        return 'credit-card';
    }
  };

  const renderPaymentMethod = (method) => {
    const isSelected = selectedMethod === method.type;
    
    return (
      <TouchableOpacity
        key={method.id}
        style={[styles.paymentCard, isSelected && styles.paymentCardSelected]}
        onPress={() => setSelectedMethod(method.type)}
      >
        <View style={styles.cardLeft}>
          <View style={styles.cardIconContainer}>
            <Icon 
              name={getCardIcon(method.type)}
              size={24}
              color={isSelected ? COLORS.primary : COLORS.textLight}
            />
          </View>
          <View style={styles.cardInfo}>
            <CustomText variant="body1" weight="semiBold" color={COLORS.textPrimary}>
              {method.cardNumber}
            </CustomText>
            <CustomText variant="caption" color={COLORS.textLight}>
              {method.label}
            </CustomText>
          </View>
        </View>
        <View style={[styles.radioButton, isSelected && styles.radioButtonSelected]}>
          {isSelected && <View style={styles.radioInner} />}
        </View>
      </TouchableOpacity>
    );
  };

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
              Payment
            </CustomText>
            <View style={{ width: 40 }} />
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Booking Summary */}
        <View style={styles.bookingCard}>
          <CustomText variant="h6" weight="bold" color={COLORS.textPrimary}>
            Booking Summary
          </CustomText>
          
          <View style={styles.summaryRow}>
            <CustomText variant="body2" color={COLORS.textLight}>Hotel Name</CustomText>
            <CustomText variant="body2" weight="semiBold" color={COLORS.textPrimary}>
              The Plaza Hotel
            </CustomText>
          </View>
          
          <View style={styles.summaryRow}>
            <CustomText variant="body2" color={COLORS.textLight}>Room Type</CustomText>
            <CustomText variant="body2" weight="semiBold" color={COLORS.textPrimary}>
              Deluxe Room
            </CustomText>
          </View>
          
          <View style={styles.summaryRow}>
            <CustomText variant="body2" color={COLORS.textLight}>Check-in</CustomText>
            <CustomText variant="body2" weight="semiBold" color={COLORS.textPrimary}>
              Dec 15, 2024
            </CustomText>
          </View>
          
          <View style={styles.summaryRow}>
            <CustomText variant="body2" color={COLORS.textLight}>Check-out</CustomText>
            <CustomText variant="body2" weight="semiBold" color={COLORS.textPrimary}>
              Dec 17, 2024
            </CustomText>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.summaryRow}>
            <CustomText variant="body2" color={COLORS.textLight}>Room Price (2 nights)</CustomText>
            <CustomText variant="body2" weight="semiBold" color={COLORS.textPrimary}>
              $400
            </CustomText>
          </View>
          
          <View style={styles.summaryRow}>
            <CustomText variant="body2" color={COLORS.textLight}>Taxes & Fees</CustomText>
            <CustomText variant="body2" weight="semiBold" color={COLORS.textPrimary}>
              $50
            </CustomText>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.summaryRow}>
            <CustomText variant="body1" weight="bold" color={COLORS.textPrimary}>Total</CustomText>
            <CustomText variant="h5" weight="bold" color={COLORS.primary}>
              $450
            </CustomText>
          </View>
        </View>

        {/* Payment Methods */}
        <View style={styles.paymentSection}>
          <CustomText variant="h6" weight="bold" color={COLORS.textPrimary}>
            Payment Method
          </CustomText>
          
          <View style={styles.methodsList}>
            {PAYMENT_METHODS.map(renderPaymentMethod)}
          </View>

          <TouchableOpacity style={styles.addCardButton}>
            <Icon name="plus-circle-outline" size={24} color={COLORS.primary} />
            <CustomText variant="body1" color={COLORS.primary} style={{ marginLeft: SIZES.sm }}>
              Add New Card
            </CustomText>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Pay Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => navigation.navigate('BookingSuccess')}
        >
          <LinearGradient
            colors={[COLORS.primary, '#00D4AA']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.payGradient}
          >
            <CustomText variant="body1" weight="bold" color={COLORS.white}>
              PAY $450
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
  content: {
    flex: 1,
    padding: SIZES.paddingHorizontal,
  },
  bookingCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.lg,
    marginBottom: SIZES.lg,
    ...SHADOWS.light,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.md,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SIZES.md,
  },
  paymentSection: {
    marginBottom: verticalScale(100),
  },
  methodsList: {
    marginTop: SIZES.md,
  },
  paymentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.md,
    marginBottom: SIZES.sm,
    borderWidth: 2,
    borderColor: 'transparent',
    ...SHADOWS.light,
  },
  paymentCardSelected: {
    borderColor: COLORS.primary,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIconContainer: {
    width: 50,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
    borderRadius: SIZES.radiusSmall,
  },
  cardInfo: {
    marginLeft: SIZES.md,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.textLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: COLORS.primary,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
  addCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.md,
    marginTop: SIZES.sm,
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
    ...SHADOWS.medium,
  },
  payButton: {
    borderRadius: SIZES.radiusMedium,
    overflow: 'hidden',
  },
  payGradient: {
    paddingVertical: SIZES.md,
    alignItems: 'center',
  },
});

export default PaymentScreen;
