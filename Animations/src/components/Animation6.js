import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

const Animation5 = () => {
  const [animation] = useState(new Animated.Value(1));
  const [animation2] = useState(new Animated.Value(-50));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation2, {
          toValue: -30,
          duration: 500,
        }),
        Animated.timing(animation, {
          toValue: 60,
          duration: 500,
        }),
        Animated.timing(animation2, {
          toValue: 30,
          duration: 500,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 500,
        }),
        Animated.timing(animation2, {
          toValue: -30,
          duration: 500,
        }),
      ]),
    ).start();
  }, []);

  const styleAnimation = {
    transform: [{translateY: animation}, {translateX: animation2}],
  };

  return (
    <>
      <View style={styles.container}>
        <Animated.View style={[styles.box, styleAnimation]}></Animated.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'cornflowerblue',
    width: 10,
    height: 10,
  },
  container: {
    alignItems: 'center',
  },
});

export default Animation5;
