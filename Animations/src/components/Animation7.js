import React, {useState, useEffect} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  TouchableOpacity,
} from 'react-native';

const Animation = () => {
  const [animation1] = useState(new Animated.Value(0));
  const [animation2] = useState(new Animated.Value(1));

  const handleAnimate = () => {
    Animated.sequence([
      Animated.timing(animation1, {
        toValue: 300,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(animation2, {
        toValue: 10,
        useNativeDriver: true,
      }),
      Animated.spring(animation2, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(animation1, {
        toValue: 600,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animationStyle = {
    transform: [{translateY: animation1}, {scale: animation2}],
  };

  return (
    <>
      <TouchableOpacity
        style={{backgroundColor: 'blue', alignSelf: 'center', height: 100}}
        onPress={handleAnimate}>
        <Text>OTRA VEZ</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.box, animationStyle]}></Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

export default Animation;
