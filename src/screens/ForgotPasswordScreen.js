import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
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

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle password reset logic
    navigation.goBack();
  };

  return (
    <GradientBackground>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <CustomText variant="h3" weight="bold" color={COLORS.white}>
            Forgot Password?
          </CustomText>
        </View>

        {/* Form Card */}
        <Card style={styles.card}>
          <CustomText
            variant="body2"
            color={COLORS.textLight}
            style={styles.subtitle}
          >
            Please enter your registered email address to recover your password
          </CustomText>

          <View style={styles.inputContainer}>
            <CustomInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              iconName="email-outline"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton title="Submit" onPress={handleSubmit} />
          </View>
        </Card>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: SIZES.paddingHorizontal,
    paddingTop: verticalScale(80),
    marginBottom: SIZES.lg,
  },
  card: {
    marginHorizontal: SIZES.md,
    paddingTop: SIZES.xl,
    paddingBottom: SIZES.xxl,
  },
  subtitle: {
    marginBottom: SIZES.xl,
    lineHeight: 22,
  },
  inputContainer: {
    marginTop: SIZES.md,
  },
  buttonContainer: {
    marginTop: SIZES.xl,
  },
});

export default ForgotPasswordScreen;
