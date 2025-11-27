import React, { useState, useEffect } from 'react';
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
  Card,
  OTPInput,
} from '../components';
import { COLORS, SIZES, verticalScale } from '../theme';

const VerifyOTPScreen = ({ navigation, route }) => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleVerify = () => {
    if (otp.length === 4) {
      navigation.navigate('Home');
    }
  };

  const handleResend = () => {
    if (canResend) {
      setTimer(30);
      setCanResend(false);
      // Resend OTP logic here
    }
  };

  const handleChangeNumber = () => {
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
            Verify Account
          </CustomText>
        </View>

        {/* Form Card */}
        <Card style={styles.card}>
          <CustomText variant="body1" weight="bold" color={COLORS.textPrimary}>
            VERIFY MOBILE NUMBER
          </CustomText>
          
          <CustomText
            variant="body2"
            color={COLORS.textLight}
            style={styles.subtitle}
          >
            OTP has been sent to you on your mobile number, please enter it below
          </CustomText>

          <OTPInput
            length={4}
            value={otp}
            onChangeText={setOtp}
          />

          <CustomText
            variant="body3"
            color={COLORS.textLight}
            align="center"
            style={styles.resendText}
          >
            Don't received otp?
          </CustomText>

          <View style={styles.buttonRow}>
            <CustomButton
              title={canResend ? 'Resend OTP' : `Resend in ${timer}s`}
              variant="primary"
              onPress={handleResend}
              disabled={!canResend}
              style={styles.actionButton}
            />
            <CustomButton
              title="Change number"
              variant="primary"
              onPress={handleChangeNumber}
              style={styles.actionButton}
            />
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
    marginTop: SIZES.sm,
    lineHeight: 22,
  },
  resendText: {
    marginTop: SIZES.md,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: SIZES.md,
    marginTop: SIZES.lg,
  },
  actionButton: {
    flex: 1,
  },
});

export default VerifyOTPScreen;
