import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Responsive scaling based on iPhone 13 Pro
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

export const scale = (size) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size) => (height / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const COLORS = {
  // Primary gradient colors
  gradientStart: '#00F5A0',
  gradientMiddle: '#00C8D4',
  gradientEnd: '#0066FF',
  
  // UI Colors
  primary: '#00D4AA',
  secondary: '#0066FF',
  accent: '#FF9500',
  
  // Text colors
  white: '#FFFFFF',
  black: '#000000',
  textPrimary: '#333333',
  textSecondary: '#666666',
  textLight: '#999999',
  textPlaceholder: '#CCCCCC',
  textMuted: '#AAAAAA',
  
  // Background colors
  background: '#FFFFFF',
  cardBackground: '#FFFFFF',
  inputBackground: '#FAFAFA',
  
  // Border colors
  border: '#E8E8E8',
  borderLight: '#F0F0F0',
  inputBorder: '#EEEEEE',
  
  // Button colors
  facebook: '#3B5998',
  google: '#FF6B6B',
  
  // Status colors
  success: '#00D4AA',
  error: '#FF4444',
  warning: '#FF9500',
  
  // Overlay
  overlay: 'rgba(0, 0, 0, 0.5)',
  
  // Tab colors
  tabActive: '#0066FF',
  tabInactive: '#999999',
  
  // Specific UI colors
  switchTrack: '#00D4AA',
  cityBuilding: 'rgba(255, 255, 255, 0.3)',
};

export const FONTS = {
  // Font sizes
  h1: moderateScale(32),
  h2: moderateScale(28),
  h3: moderateScale(24),
  h4: moderateScale(20),
  h5: moderateScale(18),
  body1: moderateScale(16),
  body2: moderateScale(14),
  body3: moderateScale(12),
  caption: moderateScale(10),
  
  // Font weights
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
};

export const SIZES = {
  // Screen dimensions
  width,
  height,
  
  // Padding & Margins
  paddingHorizontal: scale(24),
  paddingVertical: verticalScale(16),
  
  // Border radius
  radiusSmall: scale(8),
  radiusMedium: scale(16),
  radiusLarge: scale(24),
  radiusXLarge: scale(32),
  radiusFull: scale(100),
  
  // Icon sizes
  iconSmall: scale(18),
  iconMedium: scale(24),
  iconLarge: scale(32),
  iconXLarge: scale(48),
  
  // Input height
  inputHeight: verticalScale(52),
  buttonHeight: verticalScale(52),
  
  // Spacing
  xs: scale(4),
  sm: scale(8),
  md: scale(16),
  lg: scale(24),
  xl: scale(32),
  xxl: scale(48),
  
  // Card specific
  cardPadding: scale(20),
  cardRadius: scale(24),
};

export const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
};

export const GRADIENTS = {
  primary: ['#00F5A0', '#00D4C8', '#0066FF'],
  button: ['#00F5A0', '#00D4AA'],
};

export default {
  COLORS,
  FONTS,
  SIZES,
  SHADOWS,
  GRADIENTS,
  scale,
  verticalScale,
  moderateScale,
};
