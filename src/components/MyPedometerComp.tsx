/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import GoogleFit, {Scopes} from 'react-native-google-fit';

function MyPedometerComp(): JSX.Element {
  console.log('MyPedometerComp');
  const opt = {
    startDate: '2023-01-01T00:00:17.971Z', // required ISO8601Timestamp
    endDate: new Date().toISOString(), // required ISO8601Timestamp
    bucketInterval: 1, // optional - default 1.
  };

  console.log(opt);

  GoogleFit.getDailyStepCountSamples(opt)
    .then(res => {
      console.log('Daily steps >>> ', res);
    })
    .catch(err => {
      console.warn(err);
    });

  GoogleFit.getDailySteps()
    .then(res => {
      console.log('Daily steps >>> ', res);
    })
    .catch(err => {
      console.warn(err);
    });

  return (
    <View>
      <Text>MyPedometerComp</Text>
    </View>
  );
}

export default MyPedometerComp;
