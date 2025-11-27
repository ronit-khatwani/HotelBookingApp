import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  GradientBackground,
  CustomText,
  CustomButton,
  CustomInput,
  Card,
  PhoneInput,
} from '../components';
import { COLORS, SIZES, verticalScale, scale } from '../theme';

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+225');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    navigation.navigate('VerifyOTP', { phoneNumber, countryCode });
  };

  return (
    <GradientBackground>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.header}>
            <CustomText variant="h3" weight="bold" color={COLORS.white}>
              Sign Up
            </CustomText>
          </View>

          {/* Form Card */}
          <Card style={styles.card}>
            <CustomInput
              placeholder="Full Name"
              value={fullName}
              onChangeText={setFullName}
              iconName="account-outline"
              autoCapitalize="words"
            />

            <CustomInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              iconName="email-outline"
              keyboardType="email-address"
            />

            <PhoneInput
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              selectedCode={countryCode}
              onCodeChange={setCountryCode}
            />

            <CustomInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              iconName="lock-outline"
              secureTextEntry
            />

            <View style={styles.buttonContainer}>
              <CustomButton title="Create Account" onPress={handleSignUp} />
            </View>

            {/* Social Login */}
            <View style={styles.socialContainer}>
              <CustomText
                variant="body3"
                color={COLORS.textLight}
                align="center"
              >
                or sign In using
              </CustomText>

              <View style={styles.socialButtons}>
                <CustomButton
                  title="Facebook"
                  variant="facebook"
                  onPress={() => {}}
                  style={styles.socialButton}
                />
                <CustomButton
                  title="Google"
                  variant="google"
                  onPress={() => {}}
                  style={styles.socialButton}
                />
              </View>

              <CustomText
                variant="body3"
                color={COLORS.textLight}
                align="center"
                style={styles.termsText}
              >
                By creating an account, you are agree to our{' '}
                <CustomText variant="body3" color={COLORS.primary}>
                  Terms
                </CustomText>
              </CustomText>
            </View>

            {/* Sign In Link */}
            <View style={styles.signInContainer}>
              <CustomText variant="body3" color={COLORS.textLight}>
                Already have an account?{' '}
              </CustomText>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <CustomText variant="body3" weight="semiBold" color={COLORS.primary}>
                  Sign In
                </CustomText>
              </TouchableOpacity>
            </View>
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: verticalScale(80),
  },
  header: {
    paddingHorizontal: SIZES.paddingHorizontal,
    marginBottom: SIZES.lg,
  },
  card: {
    flex: 1,
    marginHorizontal: SIZES.md,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingTop: SIZES.xl,
    paddingBottom: SIZES.xl,
  },
  buttonContainer: {
    marginTop: SIZES.xl,
  },
  socialContainer: {
    marginTop: SIZES.xl,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.md,
    gap: SIZES.md,
  },
  socialButton: {
    flex: 1,
  },
  termsText: {
    marginTop: SIZES.lg,
    lineHeight: 20,
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.lg,
  },
});

export default SignUpScreen;
