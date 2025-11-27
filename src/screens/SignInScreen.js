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
import {
  GradientBackground,
  CustomText,
  CustomButton,
  CustomInput,
  Card,
} from '../components';
import { COLORS, SIZES, verticalScale } from '../theme';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    navigation.navigate('Home');
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
              Sign In
            </CustomText>
          </View>

          {/* Form Card */}
          <Card style={styles.card}>
            <View style={styles.formSection}>
              <CustomInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                iconName="email-outline"
                keyboardType="email-address"
              />

              <CustomInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                iconName="lock-outline"
                secureTextEntry
              />

              <TouchableOpacity
                style={styles.forgotPassword}
                onPress={() => navigation.navigate('ForgotPassword')}
              >
                <CustomText variant="body2" color={COLORS.primary}>
                  Forgot Password?
                </CustomText>
              </TouchableOpacity>

              <View style={styles.buttonContainer}>
                <CustomButton title="Sign In" onPress={handleSignIn} />
              </View>
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

            {/* Sign Up Link */}
            <View style={styles.signUpContainer}>
              <CustomText variant="body3" color={COLORS.textLight}>
                Don't have an account?{' '}
              </CustomText>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <CustomText variant="body3" weight="semiBold" color={COLORS.primary}>
                  Sign Up
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
  formSection: {
    marginTop: SIZES.md,
  },
  forgotPassword: {
    alignSelf: 'center',
    marginTop: SIZES.lg,
    marginBottom: SIZES.md,
  },
  buttonContainer: {
    marginTop: SIZES.md,
  },
  socialContainer: {
    marginTop: SIZES.xxl,
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
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.lg,
  },
});

export default SignInScreen;
