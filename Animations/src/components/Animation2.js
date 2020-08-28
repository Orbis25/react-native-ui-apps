import React, {useState, useEffect} from 'react';
import {View, Animated, StyleSheet, Text} from 'react-native';

const Animation2 = () => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 450, //valor al que llega,
      duration: 1000, //tiempo en que llega
      useNativeDriver: false,
    }).start(); //start la animacion
  }, []);

  return (
    <Animated.View
      style={[
        styles.box,
        {
          width: animation,
          height: animation,
        },
      ]}></Animated.View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default Animation2;
