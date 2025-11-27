import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import { GradientBackground, CustomText } from '../components';
import { COLORS, SIZES, verticalScale, scale } from '../theme';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <GradientBackground style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      {/* City Skyline Background */}
      <View style={styles.skylineContainer}>
        {/* Clouds */}
        <View style={[styles.cloud, styles.cloud1]}>
          <View style={styles.cloudPart} />
          <View style={[styles.cloudPart, styles.cloudPartSmall]} />
        </View>
        <View style={[styles.cloud, styles.cloud2]}>
          <View style={styles.cloudPart} />
          <View style={[styles.cloudPart, styles.cloudPartSmall]} />
        </View>
        <View style={[styles.cloud, styles.cloud3]}>
          <View style={styles.cloudPart} />
          <View style={[styles.cloudPart, styles.cloudPartSmall]} />
        </View>
        
        {/* Buildings */}
        <View style={styles.buildingsContainer}>
          <View style={[styles.building, styles.building1]} />
          <View style={[styles.building, styles.building2]} />
          <View style={[styles.building, styles.building3]} />
          <View style={[styles.building, styles.building4]} />
          <View style={[styles.building, styles.building5]} />
          <View style={[styles.building, styles.building6]} />
          <View style={[styles.building, styles.building7]} />
        </View>
      </View>

      {/* Location Pin */}
      <View style={styles.pinContainer}>
        <View style={styles.pinOuter}>
          <View style={styles.pinInner} />
        </View>
        <View style={styles.pinShadow} />
      </View>

      {/* App Title */}
      <CustomText
        variant="h2"
        weight="regular"
        color={COLORS.white}
        style={styles.title}
      >
        Find Hotel
      </CustomText>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skylineContainer: {
    position: 'absolute',
    width: SIZES.width,
    height: verticalScale(200),
    top: verticalScale(280),
  },
  cloud: {
    position: 'absolute',
    flexDirection: 'row',
  },
  cloud1: {
    top: 0,
    left: scale(60),
  },
  cloud2: {
    top: verticalScale(20),
    right: scale(80),
  },
  cloud3: {
    top: verticalScale(40),
    left: scale(100),
  },
  cloudPart: {
    width: scale(40),
    height: scale(20),
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: scale(10),
  },
  cloudPartSmall: {
    width: scale(25),
    height: scale(15),
    marginLeft: -scale(10),
    marginTop: scale(5),
  },
  buildingsContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
  },
  building: {
    backgroundColor: 'rgba(100, 180, 200, 0.4)',
    marginHorizontal: scale(2),
  },
  building1: {
    width: scale(30),
    height: verticalScale(60),
  },
  building2: {
    width: scale(35),
    height: verticalScale(90),
  },
  building3: {
    width: scale(40),
    height: verticalScale(70),
  },
  building4: {
    width: scale(45),
    height: verticalScale(100),
  },
  building5: {
    width: scale(35),
    height: verticalScale(80),
  },
  building6: {
    width: scale(30),
    height: verticalScale(65),
  },
  building7: {
    width: scale(25),
    height: verticalScale(50),
  },
  pinContainer: {
    alignItems: 'center',
    marginBottom: SIZES.lg,
  },
  pinOuter: {
    width: scale(80),
    height: scale(100),
    backgroundColor: '#FF9500',
    borderRadius: scale(40),
    borderBottomLeftRadius: scale(5),
    borderBottomRightRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '0deg' }],
  },
  pinInner: {
    width: scale(30),
    height: scale(30),
    backgroundColor: COLORS.white,
    borderRadius: scale(15),
    marginBottom: scale(15),
  },
  pinShadow: {
    width: scale(50),
    height: scale(15),
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    borderRadius: scale(25),
    marginTop: scale(10),
  },
  title: {
    marginTop: SIZES.xl,
    letterSpacing: 1,
  },
});

export default SplashScreen;
