import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const Animation5 = () => {
  const [animation] = useState(new Animated.Value(1));

  const pressIn = () => {
    Animated.spring(animation, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const pressOut = () => {
    Animated.spring(animation, {
      toValue: 1,
      friction: 4, //mas bajo mayor rebote
      tension: 60,
      useNativeDriver: true,
    }).start();
  };

  const animationStyle = {
    transform: [{scale: animation}],
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPressIn={pressIn} onPressOut={pressOut}>
          <Animated.View style={[styles.btn, animationStyle]}>
            <Text style={styles.text}>Iniciar sesión</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  btn: {
    backgroundColor: 'cornflowerblue',
    height: 80,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Animation5;
