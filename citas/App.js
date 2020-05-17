import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import Appointment from './app/components/Appointment';
import Form from './app/components/Form';

const App = () => {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [citas, setCitas] = useState([]);

  const remove = id => {
    setCitas(actualAppointment =>
      actualAppointment.filter(appointment => appointment.id !== id),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Administrador de Citas</Text>
      <TouchableHighlight
        style={styles.btnShow}
        onPress={() => setFormIsVisible(!formIsVisible)}>
        <Text style={{color: '#fff', textAlign: 'center', marginTop: 5}}>
          {!formIsVisible ? <Text>Crear</Text> : <Text>Mis citas</Text>}
        </Text>
      </TouchableHighlight>
      {formIsVisible ? (
        <Form
          setFormIsVisible={setFormIsVisible}
          appointments={citas}
          setAppointment={setCitas}
        />
      ) : (
        <View style={{paddingHorizontal: '2.5%'}}>
          <Text style={styles.title}>
            {citas.length > 0 ? 'Administra tus Citas' : 'no hay citas'}
          </Text>
          <FlatList
            style={styles.list}
            data={citas}
            keyExtractor={(appointment, value) => value.toString()}
            renderItem={data => (
              <Appointment patient={data} actionRemove={remove} />
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C477F',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',
  },
  btnShow: {
    backgroundColor: 'grey',
    alignContent: 'center',
    height: 35,
    margin: 10,
  },
  list: {width: '100%', marginTop: 15},
});

export default App;
