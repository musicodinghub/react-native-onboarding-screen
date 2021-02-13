import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './Onboarding';
import { Clipboard } from 'react-native'

// HACK: Prevent "Expo pasted from CoreSimulator" notification from spamming continuously
if (__DEV__) {
  Clipboard.setString('')
}
export default function App() {
  return <Onboarding />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
