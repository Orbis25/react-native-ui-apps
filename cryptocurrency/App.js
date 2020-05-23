import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Sheet from './app/components/Home/Sheet';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Sheet />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
