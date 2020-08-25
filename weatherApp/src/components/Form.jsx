import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  Keyboard,
  Animated,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

const Form = ({location, setLocation, setConsultation, consultation}) => {
  const [responseText, setResponseText] = useState();
  const {city, country} = location;

  const [animationButtom] = useState(new Animated.Value(1));

  const handleHideKeyBoard = () => {
    Keyboard.dismiss();
  };

  const inAnimation = () => {
    Animated.spring(animationButtom, {
      toValue: 0.75,
      useNativeDriver: true,
    }).start();
  };

  const outAnimation = () => {
    Animated.spring(animationButtom, {
      toValue: 1,
      friction: 3,
      tension: 30,
      useNativeDriver: true,
    }).start();
  };

  const animationStyle = {
    transform: [{scale: animationButtom}],
  };

  const hanldeSubmit = () => {
    inAnimation();
    if (location.city.length && location.country.length) {
      setResponseText('Now swipe the view ➡');
      setConsultation(!consultation);
    } else {
      setResponseText('Please Complete the fields');
    }
  };

  return (
    <>
      <TouchableNativeFeedback onPress={handleHideKeyBoard}>
        <View style={styles.formContainer}>
          <View style={styles.iconContainer}>
            <Text style={styles.textLog}>WEATHER APP</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={city}
              style={styles.input}
              onChangeText={(city) => setLocation({...location, city})}
              placeholder="INGRESA TU CIUDAD"
            />
          </View>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={country}
              onValueChange={(country) => setLocation({...location, country})}
              style={styles.picker}>
              <Picker.item label="SELECCIONA TU PAIS" value="" />
              <Picker.item label="ESTADOS UNIDOS" value="US" />
              <Picker.item label="REPUBLICA DOMINICANA" value="DO" />
              <Picker.item label="MEXICO" value="MX" />
            </Picker>
          </View>
          <View style={styles.btnContainer}>
            {responseText && (
              <Text style={styles.responseText}>{responseText}</Text>
            )}
            <TouchableNativeFeedback
              onPress={hanldeSubmit}
              onPressIn={inAnimation}
              onPressOut={outAnimation}>
              <Animated.View style={[styles.btn, animationStyle]}>
                <Text style={styles.textBtn}>CAMBIAR</Text>
              </Animated.View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </TouchableNativeFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  responseText: {
    fontWeight: 'bold',
    fontFamily: 'Alata',
    marginBottom: 10,
    color: '#E5ECF4',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  textLog: {
    fontSize: 30,
    fontFamily: 'Alata',
    color: '#E5ECF4',
  },
  textBtn: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#313745',
    fontFamily: 'Alata',
  },
  btn: {
    backgroundColor: '#E5ECF4',
    padding: 15,
    width: '75%',
    justifyContent: 'center',
    borderRadius: 100,
  },
  btnContainer: {
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#313745',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  pickerContainer: {
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    borderWidth: 2,
    width: '80%',
    paddingLeft: 10,
    fontFamily: 'Alata',
    borderColor: '#E5ECF4',
    color: '#E5ECF4',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  text: {
    fontFamily: 'Alata',
    fontSize: 40,
  },
  picker: {
    color: '#E5ECF4',
  },
});

export default Form;
