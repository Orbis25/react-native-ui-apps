import React, {useState, useEffect} from 'react';
import {View, Animated, StyleSheet, Text} from 'react-native';

const Animation1 = () => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1, //valor al que llega,
      duration: 500, //tiempo en que llega
      useNativeDriver: true,
    }).start(); //start la animacion
  }, []);

  return (
    <Animated.View style={{opacity: animation}}>
      <Text style={styles.text}>Animacion 1</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animation1;
