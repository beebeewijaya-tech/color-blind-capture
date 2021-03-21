import React from 'react';
import {TextInput, View} from 'react-native';
import {QrCodeIcon} from '../../assets/icon';

import styles from './styles';

function Header(props) {
  const {placeholder} = props;
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.qrWrapper}>
          <QrCodeIcon width={24} height={24} />
        </View>
        <TextInput style={styles.input} placeholder={placeholder} />
      </View>
    </View>
  );
}

export default Header;
