import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import ImageColors from 'react-native-image-colors';
import {useNavigation} from '@react-navigation/core';

import Coloraze from 'coloraze';
// Components
import {Button, StatusBar} from '../../components';

// Utils
import CONSTANTS from '../../utils/constants';
import colors from '../../utils/colors';

import styles from './styles';

function Home(props) {
  const navigation = useNavigation();

  const {route} = props;
  const {params} = route;
  const coloraze = new Coloraze();

  const [colorExtract, setColorExtract] = useState(null);

  useEffect(() => {
    async function getColorImage() {
      const data = await ImageColors.getColors(params.image.path);
      console.log(data);
      setColorExtract(data);
    }
    getColorImage();
  }, []);

  if (colorExtract) {
    console.log(colorExtract.dominant);
    console.log(coloraze.name(colorExtract.dominant));
    // console.log(colorHexToName(colorExtract.dominant)[0]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={CONSTANTS.STATUS_BAR.CONTENT.LIGHT_CONTENT}
        backgroundColor={colors.blue}
      />

      <Image source={{uri: params.image.path}} style={styles.image} />

      {colorExtract && (
        <View style={styles.textWrapper}>
          <Text style={styles.titleText}>Nearest Color</Text>
          <Text>
            1.{' '}
            {`${colorExtract.dominant} - ${coloraze.name(
              colorExtract.dominant,
            )}`}
          </Text>
          <Text>
            2.{' '}
            {`${colorExtract.average} - ${coloraze.name(colorExtract.average)}`}
          </Text>
          <Text>
            3. {`${colorExtract.muted} - ${coloraze.name(colorExtract.muted)}`}
          </Text>
        </View>
      )}
      <View style={styles.buttonWrapper}>
        <Button text="Take another picture" onPress={navigation.goBack} />
      </View>
    </SafeAreaView>
  );
}

export default Home;
