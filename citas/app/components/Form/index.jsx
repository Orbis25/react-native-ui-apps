import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid';

const Form = ({setFormIsVisible, setAppointment, appointments}) => {
  const [patient, setPatient] = useState('');
  const [person, setPerson] = useState('');
  const [phone, setphone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [sintoms, setSintoms] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimerPickerVisible, setTimePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    const options = {year: 'numeric', month: 'long', day: '2-digit'};
    setDate(
      `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(
        date,
      ).getFullYear()}`,
    );
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = date => {
    setTime(`${new Date(date).getHours()} : ${new Date(date).getMinutes()}`);
    hideTimePicker();
  };

  const showAlert = () => {
    Alert.alert('Error', 'Todos los campos son obligatorios', [{text: 'OK'}]);
  };

  const send = () => {
    if (
      patient.trim() === '' ||
      person.trim() === '' ||
      phone.trim() === '' ||
      date.trim() === '' ||
      time.trim() === '' ||
      sintoms.trim() === ''
    ) {
      showAlert();
    } else {
      const appointment = {patient, person, phone, date, time, sintoms};
      appointment.id = shortid.generate();
      setAppointment([...appointments, appointment]);
      setFormIsVisible(false);
      // setPatient('')
      // setPerson('');
      // se('');
      // setPatient('');
      // setPatient('');
    }
  };

  return (
    <>
      <ScrollView style={styles.content}>
        <View style={styles.form}>
          <View>
            <Text style={styles.label}>Paciente:</Text>
            <TextInput
              style={styles.textInputs}
              onChangeText={value => setPatient(value)}
            />
          </View>
          <View>
            <Text style={styles.label}>Dueño:</Text>
            <TextInput
              style={styles.textInputs}
              onChangeText={value => setPerson(value)}
            />
          </View>
          <View>
            <Text style={styles.label}>Telefono de contacto:</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.textInputs}
              onChangeText={value => setphone(value)}
            />
          </View>
          <View style={{margin: 10}}>
            <Text style={styles.label}>Fecha:</Text>

            <Button title="Seleccionar fecha" onPress={showDatePicker} />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              locale="es-ES"
              onCancel={hideDatePicker}
            />
            <Text
              style={{textAlign: 'center', marginTop: 10, fontWeight: 'bold'}}>
              {date}
            </Text>
          </View>
          <View style={{margin: 10}}>
            <Text style={styles.label}>Hora:</Text>
            <Button title="Seleccionar hora" onPress={showTimePicker} />
            <DateTimePickerModal
              isVisible={isTimerPickerVisible}
              mode="time"
              locale="es-ES"
              onConfirm={handleTimeConfirm}
              onCancel={hideTimePicker}
            />
          </View>
          <Text
            style={{textAlign: 'center', marginTop: 10, fontWeight: 'bold'}}>
            {time}
          </Text>
          <View>
            <Text style={styles.label}>Sintomas:</Text>
            <TextInput
              multiline
              style={styles.textInputs}
              onChangeText={value => setSintoms(value)}
            />
          </View>
          <View>
            <TouchableHighlight style={styles.btnSend} onPress={send}>
              <Text style={{color: '#fff', textAlign: 'center', marginTop: 8}}>
                Enviar
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingVertical: 20,
    marginTop: 20,
    paddingHorizontal: 20,

    flex: 1,
  },
  content: {
    paddingHorizontal: '2.5%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  textInputs: {
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  btnSend: {
    width: '98%',
    backgroundColor: 'green',
    height: 35,
  },
});

export default Form;
