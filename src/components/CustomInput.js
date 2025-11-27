import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES, FONTS } from '../theme';

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  icon,
  iconName,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  editable = true,
  style,
  inputStyle,
  rightComponent,
  onFocus,
  onBlur,
  multiline = false,
  numberOfLines = 1,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus && onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur && onBlur();
  };

  return (
    <View
      style={[
        styles.container,
        isFocused && styles.focusedContainer,
        style,
      ]}
    >
      {iconName && (
        <Icon
          name={iconName}
          size={SIZES.iconMedium}
          color={COLORS.textLight}
          style={styles.icon}
        />
      )}
      {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textPlaceholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        editable={editable}
        onFocus={handleFocus}
        onBlur={handleBlur}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.eyeIcon}
        >
          <Icon
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={SIZES.iconMedium}
            color={COLORS.textLight}
          />
        </TouchableOpacity>
      )}
      {rightComponent && (
        <View style={styles.rightComponent}>{rightComponent}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingVertical: SIZES.sm,
    minHeight: SIZES.inputHeight,
  },
  focusedContainer: {
    borderBottomColor: COLORS.primary,
  },
  icon: {
    marginRight: SIZES.md,
  },
  input: {
    flex: 1,
    fontSize: FONTS.body1,
    color: COLORS.textPrimary,
    paddingVertical: SIZES.sm,
  },
  eyeIcon: {
    padding: SIZES.xs,
  },
  rightComponent: {
    marginLeft: SIZES.sm,
  },
});

export default CustomInput;
