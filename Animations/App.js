import React from 'react';
import {StyleSheet, View} from 'react-native';

// import Animation from './src/components/Animation1';
// import Animation from './src/components/Animation2';
// import Animation from './src/components/Animation3';
// import Animation from './src/components/Animation4';
// import Animation from './src/components/Animation5';
// import Animation from './src/components/Animation6';
import Animation from './src/components/Animation7';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Animation />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default App;
