import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {Image, Text, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/core';

// Components
import {Button, StatusBar} from '../../components';

// Utils
import CONSTANTS from '../../utils/constants';
import colors from '../../utils/colors';
import {Splashscreen} from '../../assets/img';

import styles from './styles';

function Splash() {
  const navigation = useNavigation();
  const openCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        width: 300,
        height: 300,
        cropping: true,
        includeBase64: true,
      });

      navigation.navigate('Home', {image});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={CONSTANTS.STATUS_BAR.CONTENT.DARK_CONTENT}
        backgroundColor={colors.white}
      />
      <View style={styles.imageWrapper}>
        <Image source={Splashscreen} style={styles.image} />
      </View>
      <View style={styles.bottomWrapper}>
        <Text style={styles.text}>
          “Color blindness is a common disability. People with these issues find
          it difficult to distinguish colors, mostly red and green. And we know
          how important red and green is, the traffic signals, grocery shopping,
          choosing clothes can go difficult.“
        </Text>
        <Button text="Getting Started" onPress={openCamera} />
      </View>
    </SafeAreaView>
  );
}

export default Splash;
