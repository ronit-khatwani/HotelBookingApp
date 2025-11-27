import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../theme';
import CustomText from './CustomText';
import { COUNTRY_CODES } from '../data/dummyData';

const PhoneInput = ({ value, onChangeText, selectedCode, onCodeChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  const currentCode = COUNTRY_CODES.find((c) => c.code === selectedCode) || COUNTRY_CODES[0];

  const renderCodeItem = ({ item }) => (
    <TouchableOpacity
      style={styles.codeItem}
      onPress={() => {
        onCodeChange(item.code);
        setShowPicker(false);
      }}
    >
      <CustomText variant="body1">{item.flag} {item.code}</CustomText>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Icon name="cellphone" size={SIZES.iconMedium} color={COLORS.textLight} />
      <TouchableOpacity
        style={styles.codeSelector}
        onPress={() => setShowPicker(true)}
      >
        <CustomText variant="body1" color={COLORS.textPrimary}>
          {currentCode.code}
        </CustomText>
        <Icon name="chevron-down" size={18} color={COLORS.primary} />
      </TouchableOpacity>
      <View style={styles.divider} />
      <CustomText
        variant="body1"
        color={value ? COLORS.textPrimary : COLORS.textPlaceholder}
        style={styles.input}
      >
        {value || 'Mobile Number'}
      </CustomText>

      <Modal visible={showPicker} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowPicker(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={COUNTRY_CODES}
              renderItem={renderCodeItem}
              keyExtractor={(item) => item.code}
            />
          </View>
        </TouchableOpacity>
      </Modal>
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
  codeSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: SIZES.md,
    paddingRight: SIZES.sm,
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: COLORS.border,
    marginHorizontal: SIZES.sm,
  },
  input: {
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radiusMedium,
    width: '80%',
    maxHeight: 300,
    padding: SIZES.md,
  },
  codeItem: {
    paddingVertical: SIZES.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
});

export default PhoneInput;
