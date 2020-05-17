import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const Appointment = props => {
  const {patient, actionRemove} = props;
  const {item} = patient;

  const remove = id => {
    console.log('eliminada ' + id);
    actionRemove(id);
  };

  return (
    <View style={styles.apointmentContainer}>
      <View>
        <Text style={styles.label}>Propietario : </Text>
        <Text style={styles.text}>{item.person}</Text>
      </View>
      <View>
        <Text style={styles.label}>Pasiente : </Text>
        <Text style={styles.text}>{item.patient}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas : </Text>
        <Text style={styles.text}>{item.sintoms}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableHighlight
          onPress={() => remove(item.id)}
          style={styles.btnDelete}>
          <Text style={styles.textDelete}>Eliminar &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  apointmentContainer: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  btnDelete: {
    backgroundColor: 'red',
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  textDelete: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Appointment;
